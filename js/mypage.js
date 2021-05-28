{
    const loading = document.querySelector('.loading');

    const userNick = document.querySelector('.mypage__user--nick');
    const userAdd = document.querySelector('.mypage__user--add');
    const userComment = document.querySelector('.mypage__user--comment');

    const accountItemID = document.querySelector('.missions__account--item-id');
    const accountItemPW = document.querySelector('.missions__account--item-pw');
    const accountItemEmail = document.querySelector('.missions__account--item-email');
    const accountItemAddress = document.querySelector('.missions__account--item-add');

    const mypageModal = document.querySelector('.mypage__modal');
    const mypageModalNick = document.querySelector('.mypage__modal--nick');
    const mypageModalComment = document.querySelector('.mypage__modal--comment');
    const mypageModalOpenBtn = document.querySelector('.mypage__user--edit');
    const mypageModalCloseBtn = document.querySelector('.mypage__modal--select-cancel');
    const mypageModalDoneBtn = document.querySelector('.mypage__modal--select-done');

    const mypageMenus = document.querySelectorAll('.mypage__nav--menu');
    const mypageSubFunction = document.querySelector('.missions__subFunction');
    const accountWrapper = document.querySelector('.account__wrapper');

    const missionsWrapper = document.querySelector('.missions__wrapper');
    const missionsList = document.querySelector('.missions__list');
    const missions = document.querySelector('.missions');

    let user = '';

    window.addEventListener('load', () => {
        fetch('./modules/getUserInfo.php')
        .then((respon) => respon.json())
        .then((data) => {
            console.log(data);
            user = data['id'];
            userNick.textContent = data['nick'];
            userComment.textContent = data['comment'];
            userAdd.textContent = `${data['m_add1']} ${data['m_add2']}`;
            mypageModalNick.value = data['nick'];
            mypageModalComment.value = data['comment'];
            accountItemID.textContent = data['id'];
            accountItemPW.textContent = data['pw'];
            accountItemEmail.textContent = data['email'];
            accountItemAddress.textContent = `${data['m_add1']} ${data['m_add2']}`;
            getMission(0);
        });

        mypageMenus.forEach((item) => {
            item.addEventListener('click', () => {
                mypageMenus.forEach((el) => {
                    el.classList.remove('active');
                });

                missionsWrapper.style.display = 'none';
                mypageSubFunction.style.display = 'none';
                accountWrapper.style.display = 'none';
                item.classList.add('active');

                let tek = item.classList[item.classList.length-2];
                
                if(tek === 'quest'){
                    missionsWrapper.style.display = 'grid';
                    mypageSubFunction.style.display = 'flex';
                }else if(tek === 'agent'){
                    
                }else if(tek === 'status'){
                    accountWrapper.style.display = 'flex';
                }
            });
        });

        mypageModalOpenBtn.addEventListener('click', () => {
            mypageModal.style.display = 'flex';
        });

        mypageModalCloseBtn.addEventListener('click', () => {
            mypageModal.style.display = 'none';
        });

        mypageModalDoneBtn.addEventListener('click', () => {
            if(mypageModalNick.value == ''){
                alert('닉네임 비어있습니다.');
                return 0;
            }else{
                mypageModalDone();
            }
        });
    });

    function mypageModalDone(){
        loading.style.display = 'flex';
        const param = {
            'id': user,
            'nick': mypageModalNick.value,
            'comment': document.querySelector('.mypage__modal--comment').value,
        };

        fetch('./modules/editProfile.php', {
            method: 'post',
            body: JSON.stringify(param),
        }).then((respon) => respon.json())
        .then((data) => {
            if(data['status'] === 200){
                userNick.textContent = data[0]['m_nick'];
                userComment.textContent = data[0]['m_comment'];
                mypageModalNick.value = data[0]['m_nick'];
                mypageModalComment.value = data[0]['m_comment'];
            }
            loading.style.display = 'none';
            mypageModal.style.display = 'none';
        });
    }

    function removeChild(dom){
        while(dom.hasChildNodes()){
            dom.removeChild(dom.firstChild);
        }
    }

    function getMission(type){
        const param = {
            'id': user,
            'type': type,
        };

        fetch('./modules/getMyPageMission.php', {
            method: 'post',
            body: JSON.stringify(param),
        }).then((respon) => respon.json())
        .then((data) => {
            if(data.length > 0){
                const total = data.length;
                const block = Math.ceil(total / 7);
                let newDiv;
                let newMission;
                
                for(let n=0, i=0; i < block; i++){
                    for(let j=0; j < 7; j++){
                        if(n < total){
                            if(j == 0 || j == 3){
                                newDiv = missions.cloneNode(true);
                                removeChild(newDiv);
                            }

                            newMission = missionsList.cloneNode(true);
                            
                            let newThum = data[n]['ms_expain_pic'] != undefined ? data[n]['ms_expain_pic'].split(',') : 'common.png';
                            let newImgSrc = newThum[0] !== '' ? `./upload/${newThum[0]}` : '/upload/common.png';
                            let tags = data[n]['ms_tag'].split(',');

                            let newMissionthum = newMission.querySelector('.missions__list--image');
                            let newMissionImg = newMission.querySelector('.missions__list--image img');
                            let newMissionTitle = newMission.querySelector('.missions__list--info-title');
                            let newMissionWriter = newMission.querySelector('.missions__list--info-writer');
                            let newMissionHashBox = newMission.querySelector('.missions__list--info-hash');
                            let newMissionHashText = newMission.querySelector('.missions__list--hash-text');

                            newMissionImg.src = newImgSrc;
                            newMissionTitle.textContent = data[n]['ms_title'];
                            newMissionWriter.innerHTML = `의뢰자 : ${data[n]['ms_writer']} <br> 마감일 : ${data[n]['ms_date_end']}`;
                            missionsWrapper.appendChild(newMission);
                            tags.forEach((el) => {
                                let newMissionHashTag = newMission.querySelector('.missions__list--hash-text').cloneNode();
                                newMissionHashText.remove();
                                newMissionHashTag.textContent = el;
                                newMissionHashBox.appendChild(newMissionHashTag);
                            });

                            newMissionthum.addEventListener('click', () => {
                                const originMissionView = document.querySelectorAll(`.view__contents`);
                                originMissionView.forEach((el) => {
                                    el.classList.remove('active');
                                });
                                viewWrapper.classList.add('active');
                                newView.classList.add('active');

                                const viewInfo = {
                                    'id': newViewId,
                                };

                                fetch('./modules/okView.php', {
                                    method: 'POST',
                                    body: JSON.stringify(viewInfo),
                                })
                                .then(respon => respon.json());
                            });
                        }
                        n++;
                    }
                }
            }
        }).then(() => {
            const allMissions = document.querySelectorAll('.missions__list');
            const newMissions = [];
            allMissions.forEach((el) => {   
                if(el.classList.contains('active') === false){
                    newMissions.push(el);
                }
            });

            newMissions.forEach((el, index) => {
                el.classList.add('active');
                setTimeout(() => {
                    el.style.opacity = 1;
                    el.style.transform = 'translateY(0)';
                },200 * index);
            });
        });
    }
}