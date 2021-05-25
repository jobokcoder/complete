{
    const userNick = document.querySelector('.mypage__user--nick');
    const userAdd = document.querySelector('.mypage__user--add');

    const mypageMenus = document.querySelectorAll('.mypage__nav--menu');
    const mypageSubFunction = document.querySelector('.missions__subFunction');
    const accountWrapper = document.querySelector('.account__wrapper');

    const missionsWrapper = document.querySelector('.missions__wrapper');
    const missionsList = document.querySelector('.missions__list');
    const missions = document.querySelector('.missions');
    let user = 'none';

    window.addEventListener('load', () => {
        fetch('./modules/getUserInfo.php')
        .then((respon) => respon.json())
        .then((data) => {
            user = data['id'];
            userNick.textContent = data['nick'];
            userAdd.textContent = `${data['m_add1']} ${data['m_add2']}`;
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
    });


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