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

    const stampModal = document.querySelector('.send__modal');
    const stampModalCancel = document.querySelector('.send__modal--cancel');
    const stampLeftHashBox = document.querySelector('.send__left--hash');
    const stampLeftHashTag = document.querySelector('.send__right--hash-text');
    const stampRightHashBox = document.querySelector('.send__right--hash');
    const sendRightSumbit = stampModal.querySelector('.send__right--submit');

    const form = document.querySelector('.send__right--contents');
    const fileLabel = document.querySelector('.send__right--file-btn');
    const fileInput = document.querySelector('.send__right--file-input');
    const fileBox = document.querySelector('.send__right--file');
    const fileName = document.querySelector('.done__compensation--file-name');

    let user = '';

    window.addEventListener('load', () => {
        removeChild(missionsWrapperMission);
        removeChild(missionsWrapperWith);
        fileName.remove();
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
                getWithMission(0);
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

    agentModalCancel.addEventListener('click', () => { toggleModal(agentModal); });
    agentModalSubmit.addEventListener('click', () => { sendAgents(); });
    fileLabel.addEventListener('click', () => { fileInput.click(); });
    filterAccept.addEventListener('change', () => { getRequest(filterAccept.value) });
    mypageModalOpenBtn.addEventListener('click', () => { mypageModal.style.display = 'flex'; });
    mypageModalCloseBtn.addEventListener('click', () => { mypageModal.style.display = 'none'; });
    stampModalCancel.addEventListener('click', () => { toggleModal(stampModal); });
    sendRightSumbit.addEventListener('click', () => {
        if(sendRightSumbit.textContent == '제출'){
            sendDoneMisson();
        }else{

        }
    });
    
    statusContentsButtons.forEach((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            toggleModal(agentModal);
            getAgent(el);
        });
    });

    mypageModalDoneBtn.addEventListener('click', () => {
        if(mypageModalNick.value == ''){
            alert('닉네임 비어있습니다.');
            return 0;
        }else{
            mypageModalDone();
        }
    });

    fileInput.addEventListener('change', () => {
        const flag = checkFileExtens(fileInput.files);
        const doneFileNames = document.querySelectorAll('.done__compensation--file-name');
        doneFileNames.forEach(el => {
            el.remove();
        });

        if(flag){
            fileInput.value = "";
            alert('gif, jpg, png, mp4 확장자 파일만 가능합니다.');
        }else{
            if(fileInput.files.length > 1){
                fileInput.value = "";
            }else{
                for(let i=0; i< fileInput.files.length; i++){
                    let files = fileName.cloneNode(true);
                    files.textContent = fileInput.files[i]['name'];
                    fileBox.appendChild(files);
                }
            }
        }
    });

    function getFulFillMission(){
        removeChild(missionsWrapperMission);
        fetch('./modules/getFulFillMission.php')
        .then((respon) => respon.json())
        .then((data) => {
            if(data.length > 0){
                data.forEach((item) => {
                    let newMission = missionsList.cloneNode(true);
                            
                    let newThum = item['ms_expain_pic'] != undefined ? item['ms_expain_pic'].split(',') : 'common.png';
                    let newImgSrc = newThum[0] !== '' ? `./upload/${newThum[0]}` : '/upload/common.png';
                    let tags = item['ms_tag'].split(',');

                    let newMissionImg = newMission.querySelector('.missions__list--image img');
                    let newMissionTitle = newMission.querySelector('.missions__list--info-title');
                    let newMissionWriter = newMission.querySelector('.missions__list--info-writer');
                    let newMissionHashBox = newMission.querySelector('.missions__list--info-hash');
                    let newMissionHashText = newMission.querySelector('.missions__list--hash-text');

                    newMissionImg.src = newImgSrc;
                    newMissionTitle.textContent = item['ms_title'];
                    newMissionWriter.innerHTML = `의뢰자 : ${item['ms_writer']} <br> 마감일 : ${item['ms_date_end']}`;
                    
                    tags.forEach((el) => {
                        let newMissionHashTag = newMission.querySelector('.missions__list--hash-text').cloneNode();
                        newMissionHashText.remove();
                        newMissionHashTag.textContent = el;
                        newMissionHashBox.appendChild(newMissionHashTag);
                    });

                    const param2 = {
                        'ms_id': item['ms_id'],
                    };

                    fetch('./modules/checkConfirm.php', {
                        method: 'POST',
                        body: JSON.stringify(param2),
                    }).then((respon) => respon.json())
                    .then((data) => {
                        if(data.length == 0){
                            newMission.addEventListener('click', (e) => {
                                e.preventDefault();
                                missionDoneStamp(item['ms_id']);
                            });
                        }
                    });

                    missionsWrapperMission.appendChild(newMission);
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

    function missionDoneStamp(id){
        removeChild(stampLeftHashBox);
        removeChild(stampRightHashBox);
        const param = {
            'ms_id': id,
        };
        fetch('./modules/getMissionInfo.php', {
            method: 'post',
            body: JSON.stringify(param),
        }).then((respon) => respon.json())
        .then((data) => {
            data = data[0];
            const sendLeftTags = data['ms_tag'].split(',', 2);
            const sendLeftTitle = stampModal.querySelector('.send__left--title-text');
            const sendLeftTextArea = stampModal.querySelector('.send__left--textarea-text');
            const sendLeftCond = stampModal.querySelector('.send__left--cond-text');
            const sendLeftDone = stampModal.querySelector('.send__left--done-text');
            const sendLeftWriter = stampModal.querySelector('.send__left--writer-text');
            const sendLeftImg = stampModal.querySelector('.send__left--thum-img');
            const newThum = data['ms_expain_pic'] != undefined ? data['ms_expain_pic'].split(',') : 'common.png';
            const newImgSrc = newThum[0] !== '' ? `./upload/${newThum[0]}` : '/upload/common.png';
            
            sendLeftImg.src = newImgSrc;
            sendLeftTitle.textContent = data['ms_title'];
            sendLeftTextArea.textContent = data['ms_contents'];
            sendLeftCond.textContent = data['ms_done_cond'];
            sendLeftDone.textContent = data['ms_done_com'];
            sendLeftWriter.textContent = `마감일 : ${data['ms_date_end']} 작성자 : ${data['ms_writer']}`;

            const sendRightMissionID = stampModal.querySelector('.send__right--mission-id');
            const sendRightTitle = stampModal.querySelector('.send__right--subject-text');
            const sendRightCond = stampModal.querySelector('.send__right--cond-text');
            const sendRightWriter = stampModal.querySelector('.send__right--writer-text');
            const sendRightDate = stampModal.querySelector('.send__right--date');
            const sendRightNick = stampModal.querySelector('.send__right--nick');
            
            sendRightMissionID.value = data['ms_id'];
            sendRightTitle.textContent = data['ms_title'];
            sendRightCond.textContent = data['ms_done_cond'];
            sendRightWriter.textContent = `마감일 : ${data['ms_date_end']} 작성자 : ${data['ms_writer']}`;
            sendRightNick.textContent = `닉네임 : ${user}`;

            const today = new Date();   
            const year = today.getFullYear();
            let month = today.getMonth() + 1;
            let date = today.getDate();

            month = (month < 10) ? '0' + month : month;
            date = (date < 10) ? '0' + date : date;

            sendRightDate.textContent = `${year}.${month}.${date}`;
            sendRightSumbit.textContent = '제출';
            
            sendLeftTags.forEach((el) => {
                let newStampTag = stampLeftHashTag.cloneNode(true);
                newStampTag.textContent = el;
                stampLeftHashBox.appendChild(newStampTag);
            });

            sendLeftTags.forEach((el) => {
                let newStampTag = stampLeftHashTag.cloneNode(true);
                newStampTag.textContent = el;
                stampRightHashBox.appendChild(newStampTag);
            });

        })
        .then(() => {
            toggleModal(stampModal);
        });
    }

    function sendDoneMisson(){
        const sendRightForm = stampModal.querySelector('.send__right--contents');
        const formData = new FormData(sendRightForm);
        loading.style.display = 'flex';
        fetch('./modules/sendDoneMisson.php', {
            method: 'POST',
            body: formData,
        })
        .then(respon => respon.json())
        .then(data => {
            loading.style.display = 'none';
            if(data['status'] == 200){
                location.reload();
            }
        })
    }
    
    function checkFileExtens(files){
        for(let i=0; i<files.length; i++){
            const nameArr = files[i]['name'].split('.');
            if(nameArr[1] != 'gif' && nameArr[1] != 'jpg' && nameArr[1] != 'png' && nameArr[1] != 'mp4'){
                return true;
            }else{
                return false;
            }
        }
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

    function getWithMission(type){
        removeChild(missionsWrapperMission);
        const param = {
            'id': user,
            'type': type,
        };

        fetch('./modules/getWithMission.php', {
            method: 'post',
            body: JSON.stringify(param),
        })
        .then((respon) => respon.json())
        .then((data) => {
            if(data.length > 0){
                const datas = data;
                
                datas.forEach((item, index) => {
                    let newMission = missionsList.cloneNode(true);
                            
                    let newThum = item['ms_expain_pic'] != undefined ? item['ms_expain_pic'].split(',') : 'common.png';
                    let newImgSrc = newThum[0] !== '' ? `./upload/${newThum[0]}` : '/upload/common.png';
                    let tags = item['ms_tag'].split(',');

                    let newMissionImg = newMission.querySelector('.missions__list--image img');
                    let newMissionTitle = newMission.querySelector('.missions__list--info-title');
                    let newMissionWriter = newMission.querySelector('.missions__list--info-writer');
                    let newMissionHashBox = newMission.querySelector('.missions__list--info-hash');
                    let newMissionHashText = newMission.querySelector('.missions__list--hash-text');

                    newMissionImg.src = newImgSrc;
                    newMissionTitle.textContent = item['ms_title'];
                    newMissionWriter.innerHTML = `의뢰자 : ${item['ms_writer']} <br> 마감일 : ${item['ms_date_end']}`;
                    
                    tags.forEach((el) => {
                        let newMissionHashTag = newMission.querySelector('.missions__list--hash-text').cloneNode();
                        newMissionHashText.remove();
                        newMissionHashTag.textContent = el;
                        newMissionHashBox.appendChild(newMissionHashTag);
                    });

                    newMission.addEventListener('click', () => {

                    });

                    missionsWrapperWith.appendChild(newMission);
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
}