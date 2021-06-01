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

    const missionsWrapperMission = document.querySelector('.missions__wrapper--mission');
    const missionsWrapperWith = document.querySelector('.missions__wrapper--with');
    const statusWrapper = document.querySelector('.status__wrapper');
    const accountWrapper = document.querySelector('.account__wrapper');

    const filterMission = document.querySelector('.missions__subFunction--mission').querySelector('.missions__filter--select');
    const filterWith = document.querySelector('.missions__subFunction--with').querySelector('.missions__filter--select');
    const filterAccept = document.querySelector('.missions__subFunction--accept').querySelector('.missions__filter--select');


    const missionsSubFunctionAll = document.querySelectorAll('.missions__subFunction');
    const missionsList = document.querySelector('.missions__list');
    const missions = document.querySelector('.missions');

    const agentModalUsers = document.querySelector('.agent__users');
    const agentModalSubmit = document.querySelector('.agent__bottom--select');

    const lastHeaderText = document.querySelector('.status__header--text:last-child');

    const agentModal = document.querySelector('.agent__modal');
    const agentModalCancel = document.querySelector('.agent__bottom--cancel');
    const statusContentsButtons = document.querySelectorAll('.status__contents--button');

    let user = '';

    window.addEventListener('load', () => {
        removeChild(missionsWrapperMission);
        removeChild(missionsWrapperWith);
        fetch('./modules/getUserInfo.php')
        .then((respon) => respon.json())
        .then((data) => {
            missions.remove();
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
            getFulFillMission();
        });
    });

    mypageMenus.forEach((item) => {
        item.addEventListener('click', () => {
            mypageMenus.forEach((el) => {
                el.classList.remove('active');
            });

            missionsSubFunctionAll.forEach((el) => {
                el.classList.remove('active');
            });

            missionsWrapperMission.classList.remove('active');
            missionsWrapperWith.classList.remove('active');
            statusWrapper.classList.remove('active');
            accountWrapper.classList.remove('active');

            if(item.textContent === '미션'){
                item.classList.add('active');
                missionsWrapperMission.classList.add('active');
                missionsSubFunctionAll[0].classList.add('active');
                getFulFillMission();
            }else if(item.textContent === '같이하기'){
                item.classList.add('active');
                missionsWrapperWith.classList.add('active');
                missionsSubFunctionAll[1].classList.add('active');
                getMission(0);
            }else if(item.textContent === '신청현황'){
                item.classList.add('active');
                statusWrapper.classList.add('active');
                missionsSubFunctionAll[2].classList.add('active');
                getRequest(0);
            }else if(item.textContent === '계정'){
                item.classList.add('active');
                accountWrapper.classList.add('active');
            }
        });
    });
    
    statusContentsButtons.forEach((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            toggleModal(agentModal);
            getAgent(el);
        });
    });

    agentModalCancel.addEventListener('click', () => {
        toggleModal(agentModal);
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

    agentModalSubmit.addEventListener('click', () => { sendAgents(); });

    filterAccept.addEventListener('change', () => { getRequest(filterAccept.value) });

    function getFulFillMission(){
        fetch('./modules/getFulFillMission.php')
        .then((respon) => respon.json())
        .then((data) => {
            if(data.length > 0){
                data.forEach((item) => {
                    console.log(item);
                    let newMission = missionsList.cloneNode(true);
                            
                    let newThum = item['ms_expain_pic'] != undefined ? item['ms_expain_pic'].split(',') : 'common.png';
                    let newImgSrc = newThum[0] !== '' ? `./upload/${newThum[0]}` : '/upload/common.png';
                    let tags = item['ms_tag'].split(',');

                    let newMissionthum = newMission.querySelector('.missions__list--image');
                    let newMissionImg = newMission.querySelector('.missions__list--image img');
                    let newMissionTitle = newMission.querySelector('.missions__list--info-title');
                    let newMissionWriter = newMission.querySelector('.missions__list--info-writer');
                    let newMissionHashBox = newMission.querySelector('.missions__list--info-hash');
                    let newMissionHashText = newMission.querySelector('.missions__list--hash-text');

                    newMissionImg.src = newImgSrc;
                    newMissionTitle.textContent = item['ms_title'];
                    newMissionWriter.innerHTML = `의뢰자 : ${item['ms_writer']} <br> 마감일 : ${item['ms_date_end']}`;
                    missionsWrapperMission.appendChild(newMission);

                    tags.forEach((el) => {
                        let newMissionHashTag = newMission.querySelector('.missions__list--hash-text').cloneNode();
                        newMissionHashText.remove();
                        newMissionHashTag.textContent = el;
                        newMissionHashBox.appendChild(newMissionHashTag);
                    });
                });
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

    function sendAgents(){
        const selectAgent = document.querySelectorAll('.agent__users--user');
        const arr = [];
        
        selectAgent.forEach((el) => {
            if(el.classList.contains('active')){
                arr.push(el.id);
            }
        });

        const param = {
            'id': agentModal.id,
            'agents': arr,
        };

        fetch('./modules/sendAgents.php', {
            method: 'post',
            body: JSON.stringify(param),
        }).then((respon) => respon.json())
        .then((data) => {
            if(data['status'] === 200){
                location.reload();
            }else if(data['status'] === 100){
                alert('인원을 선택해주세요.')
            }
        });
    }

    function getRequest(type){
        type = Number(type)
        const removeStatusContents = document.querySelectorAll('.status__contents');
        if(removeStatusContents.length){
            removeStatusContents.forEach((el) => {
                el.remove();
            });
        }

        const param = {
            'type': type,
        };
        if(type === 0){
            lastHeaderText.textContent = '인원선택';
        }else{
            lastHeaderText.textContent = '수락 여부';
        }

        fetch('./modules/getRequestAgent.php', {
            method: 'post',
            body: JSON.stringify(param),
        }).then((respon) => respon.json())
        .then((data) => {
            const database = data['data'];
            if(database.length > 0){
                database.forEach((item) => {
                    const statusContents = document.createElement('div');
                    const statusContentsTitle = document.createElement('p');
                    const statusContentsStart = document.createElement('p');
                    const statusContentsEnd = document.createElement('p');
    
                    statusContents.classList.add('status__contents');
                    statusContentsTitle.classList.add('status__contents--text');
                    statusContentsStart.classList.add('status__contents--text');
                    statusContentsEnd.classList.add('status__contents--text');
    
                    statusContentsTitle.textContent = item['ms_title'];
                    statusContentsStart.textContent = item['ms_date_start'];
                    statusContentsEnd.textContent = item['ms_date_end'];
    
                    statusContents.appendChild(statusContentsTitle);
                    statusContents.appendChild(statusContentsStart);
                    statusContents.appendChild(statusContentsEnd);

                    if(type === 0){
                        lastHeaderText.textContent = '인원선택';
                        if(item['r_status'] == 0){
                            const statusContentsButton = document.createElement('button');
                            statusContentsButton.classList.add('status__contents--button');
                            statusContentsButton.id = item['ms_id'];
                            statusContentsButton.textContent = '선택';
                            statusContentsButton.addEventListener('click', (e) => { selectAgent(e.target.id) });
                            statusContents.appendChild(statusContentsButton);
                        }else if(item['r_status'] == 1){
                            const statusContentsDone = document.createElement('p');
                            statusContentsDone.classList.add('status__contents--text');
                            statusContentsDone.textContent = '선택됨';
                            statusContents.appendChild(statusContentsDone);
                        }
                    }else{
                        lastHeaderText.textContent = '수락 여부';
                        if(item['r_status'] == 0){
                            const statusContentsDone = document.createElement('p');
                            statusContentsDone.classList.add('status__contents--text');
                            statusContentsDone.textContent = '신청중';
                            statusContents.appendChild(statusContentsDone);
                        }else if(item['r_status'] == 1){
                            const statusContentsDone = document.createElement('p');
                            statusContentsDone.classList.add('status__contents--text');
                            checkAgent(item['ms_id'])
                            .then((res) => {
                                statusContentsDone.textContent = res ? '수락됨' : '거절됨';
                            })
                            statusContents.appendChild(statusContentsDone);
                        }
                    }
                    statusWrapper.appendChild(statusContents);
                });
            }
        });
    }
                            
    function checkAgent(ms_id){
        return new Promise((res, rej) => {
            const param = {
                'id': ms_id,
            };

            fetch('./modules/checkAgent.php', {
                method: 'post',
                body: JSON.stringify(param),
            }).then((respon) => respon.json())
            .then((data) => {
                if(data['status'] == 0){
                    res(false);
                }else{
                    res(true);
                }
            });
        });
    }

    function selectAgent(id){
        const param = {
            'id': id,
        };

        fetch('./modules/selectAgent.php', {
            method: 'post',
            body: JSON.stringify(param),
        }).then((respon) => respon.json())
        .then((data) => {
            const database = data['data'];
            agentModal.id = data['data'][0]['ms_id'];
            removeChild(agentModalUsers);
            database.forEach((item) => {
                const agentUser = document.createElement('div');
                const agentUserPic = document.createElement('div');
                const agentUserPicImg = document.createElement('img');
                const agentUserNick = document.createElement('p');

                agentUser.classList.add('agent__users--user');
                agentUserPic.classList.add('agent__users--user-pic');
                agentUserNick.classList.add('agent__users--user-name');

                agentUser.id = item['m_id'];
                agentUserNick.textContent = item['m_nick'];
                agentUserPicImg.src = './images/common/common.png';
                agentUserPic.appendChild(agentUserPicImg);
                agentUser.appendChild(agentUserPic);
                agentUser.appendChild(agentUserNick);

                agentUser.addEventListener('click', () => {
                    agentUser.classList.toggle('active');

                    const agentNumberWrapper = document.querySelector('.agent__numbering--wrapper');
                    const selectNumber = document.querySelector('.agent__numbering--text');
                    const selectAgent = document.querySelectorAll('.agent__users--user');
                    let num = 0;

                    removeChild(agentNumberWrapper);

                    selectAgent.forEach((el) => {
                        if(el.classList.contains('active')){
                            const agentIcon = document.createElement('div');
                            const agentIconImg = document.createElement('img');
        
                            agentIcon.classList.add('agent__numbering--wrapper-user');
                            agentIconImg.src = './images/common/common.png';
                            agentIcon.appendChild(agentIconImg);
                            agentNumberWrapper.appendChild(agentIcon);

                            num++;
                        }
                    });
                    selectNumber.textContent = `총 ${num}명`;
                });

                agentModalUsers.appendChild(agentUser);
            });
            toggleModal(agentModal);
        });
    }

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
        removeChild(missionsWrapperMission);
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
                            missionsWrapperMission.appendChild(newMission);
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