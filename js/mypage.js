{
    const loading = document.querySelector('.loading');

    const userModalFrame = document.querySelector('.mypage__modal--picture');
    const userModalFile = document.querySelector('.mypage__modal--picture-file');
    const userModalImg = document.querySelector('.mypage__modal--picture-img');
    const userImg = document.querySelector('.mypage__user--pic-img');
    const userNick = document.querySelector('.mypage__user--nick');
    const userAdd = document.querySelector('.mypage__user--add');
    const userComment = document.querySelector('.mypage__user--comment');

    const accountItemID = document.querySelector('.missions__account--item-id');
    const accountItemPW = document.querySelector('.missions__account--item-pw');
    const accountItemEmail = document.querySelector('.missions__account--item-email');
    const accountItemAddress = document.querySelector('.missions__account--item-add');

    const mypageModal = document.querySelector('.mypage__modal');
    const mypageModalForm = document.querySelector('.mypage__modal--contents');
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

    const stamps = document.querySelectorAll('.stamp');
    const doneModal = document.querySelector('.done__modal');
    const doneModalCancel = document.querySelector('.done__modal--cancel');
    const doneLeftHashBox = document.querySelector('.done__left--hash');
    const doneRightHashBox = document.querySelector('.done__right--hash');
    const doneRightStampItem = document.querySelector('.done__right--stamp-item');
    const doneRightStampSelect = document.querySelector('.done__right--stamp-select');
    const doneRightSumbit = doneModal.querySelector('.done__right--submit');
    const doneRightStampID = doneModal.querySelector('.done__right--stamp-id');

    const stampModal = document.querySelector('.send__modal');
    const stampModalCancel = document.querySelector('.send__modal--cancel');
    const stampLeftHashBox = document.querySelector('.send__left--hash');
    const stampLeftHashTag = document.querySelector('.send__left--hash-text');
    const sendRightSumbit = stampModal.querySelector('.send__right--submit');

    const fileLabel = document.querySelector('.send__right--file-btn');
    const fileInput = document.querySelector('.send__right--file-input');
    const fileBox = document.querySelector('.send__right--file');
    const fileName = document.querySelector('.done__compensation--file-name');

    const missionSelectBox = document.querySelector('.missions__filter--select-mission');
    const withSelectBox = document.querySelector('.missions__filter--select-with');

    const doneMissionModal = document.querySelector('.doneMission__modal');
    const doneMissionModalClose = document.querySelector('.doneMission__modal--cancel');

    const tagBox = document.querySelector('.write__input--tagbox');
    const tagInput= document.querySelector('.write__input--tag');
    const hashtag = document.querySelector('.hashtag');
    const writeHashTag = document.querySelector('.write__input--hidden');
    const tagArr = [];

    let flagCheckPW = false;
    const passchangeModal = document.querySelector('.passchange__modal');
    const passchangeModalOpenBtn = document.querySelector('.missions__account--password-change');
    const passchangeModalCancelBtn = document.querySelector('.passchange__form--select-cancel');
    const passchangeModalDoneBtn = document.querySelector('.passchange__form--select-done');
    const passchangeModalChangePass = document.querySelector('.passchange__form--change-pass');
    const passchangeModalChangePassText = document.querySelector('.passchange__form--change-text');
    const passchangeModalNowPassText = document.querySelector('.passchange__form--now-pass');

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
            const time = new Date().getTime();
            const newImgSrc = `./agents/${data['id']}.png?time=${time}`;
            userImg.src = newImgSrc;
            userModalImg.src = newImgSrc;
            userNick.textContent = data['nick'];
            userComment.textContent = data['comment'];
            userAdd.textContent = `${data['m_add1']} ${data['m_add2']}`;
            mypageModalNick.value = data['nick'];
            mypageModalComment.value = data['comment'];
            accountItemID.textContent = data['id'];
            accountItemPW.textContent = data['pw'];
            accountItemEmail.textContent = data['email'];
            accountItemAddress.textContent = `${data['m_add1']} ${data['m_add2']}`;
            getFulFillMission(0);
            getCompleteStatus();
            hashtag.remove();
        });
    });

    missionSelectBox.addEventListener('change', () => {
        removeChild(missionsWrapperMission);
        getFulFillMission(missionSelectBox.value);
    });

    withSelectBox.addEventListener('change', () => {
        removeChild(missionsWrapperWith);
        getWithMission(withSelectBox.value);
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
                missionSelectBox.value = 0;
                getFulFillMission(0);
            }else if(item.textContent === '같이하기'){
                item.classList.add('active');
                missionsWrapperWith.classList.add('active');
                missionsSubFunctionAll[1].classList.add('active');
                withSelectBox.value = 0;
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

    userModalFile.addEventListener("change", e => { readImage(e.target); });
    userModalFrame.addEventListener('click', () => { userModalFile.click(); });
    passchangeModalOpenBtn.addEventListener('click', () => { toggleModal(passchangeModal); });
    passchangeModalCancelBtn.addEventListener('click', () => { toggleModal(passchangeModal); });
    agentModalCancel.addEventListener('click', () => { toggleModal(agentModal); });
    agentModalSubmit.addEventListener('click', () => { sendAgents(); });
    fileLabel.addEventListener('click', () => { fileInput.click(); });
    filterAccept.addEventListener('change', () => { getRequest(filterAccept.value) });
    mypageModalOpenBtn.addEventListener('click', () => { mypageModal.style.display = 'flex'; });
    mypageModalCloseBtn.addEventListener('click', () => { mypageModal.style.display = 'none'; });
    stampModalCancel.addEventListener('click', () => { toggleModal(stampModal); });
    sendRightSumbit.addEventListener('click', () => { sendDoneMisson(); });
    doneModalCancel.addEventListener('click', () => { toggleModal(doneModal); });
    doneRightSumbit.addEventListener('click', () => { confirmDoneMission(); });
    doneMissionModalClose.addEventListener('click', () => { doneMissionModal.style.display = 'none'; });

    doneRightStampItem.addEventListener('click', (e) => { 
        e.preventDefault();
        doneRightStampSelect.style.display = 'grid';
    })

    stamps.forEach((el, index) => {
        el.addEventListener('click', (e) => {
            const copyStamp = el.cloneNode(true);
            const copyStampText = document.querySelector('.done__right--stamp-text');

            e.preventDefault();
            removeChild(doneRightStampItem);
            
            doneRightStampID.value = index;
            copyStampText.style.display = 'none';
            doneRightStampSelect.style.display = 'none';

            doneRightStampItem.appendChild(copyStamp);
        });
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

    tagInput.addEventListener('keyup', (e) => {
        if(e.key === ','){
            hash(e.target.value);
        }
    });

    tagInput.addEventListener('keydown', (e) => {
        if(e.key === 'Backspace' && e.target.value === ''){
            removehash();
        }
    });

    passchangeModalChangePass.addEventListener('keydown', (e) => {
        flagCheckPW = CheckPW(e.target.value);
        passchangeModalChangePassText.style.display = flagCheckPW ? 'none' : 'block';
    });

    passchangeModalDoneBtn.addEventListener('click', () => {
        if(flagCheckPW && passchangeModalNowPassText.value !== '' && passchangeModalChangePass.value !== ''){

            const param = {
                'now_pass': passchangeModalNowPassText.value,
                'change_pass': passchangeModalChangePass.value,
            };

            fetch('./modules/passwordChange.php', {
                method: 'post',
                body: JSON.stringify(param),
            }).then((respon) => respon.json())
            .then((data) => {
                if(data['status'] == 404){
                    alert('잘못된 비밀번호 입니다.');
                    return 0;
                }
                loading.style.display = 'flex';
                setTimeout(() => {
                    loading.style.display = 'none';
                    if(data['status'] == 200){
                        location.reload();
                    }
                }, 1000);
            });
        }
    });

    function readImage(input) {
        if(input.files && input.files[0]) {
            const reader = new FileReader() 

            reader.onload = e => {
                userModalImg.src = e.target.result
            }
            
            reader.readAsDataURL(input.files[0])
        }
    }
    
    function CheckPW(str){     
        const regPW = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,20}$/;
        if(str == ''){          
            return true;    
        }
        if(!regPW.test(str)) {
            return false;
        }else {                      
            return true;         
        }           
    }

    function hash(str){
        if(tagArr.length < 5){
            let tag = hashtag.cloneNode(true);
            let text = '#' + str.replaceAll(',','');
            tag.textContent = text;
            tagArr.push(text);
            tagBox.prepend(tag);
            tagInput.value = '';
        }
        writeHashTag.value = tagArr;
    }

    function removehash(){
        if(tagArr.length > 0){
            const tags = document.querySelectorAll('.hashtag');
            tags[tags.length - 1].remove();
            tagArr.pop();
        }
    }

    function showDoneMission(id){
        doneMissionModal.style.display = 'flex';
        const param = {
            'ms_id': id,
        };
        
        fetch('./modules/showDoneMission.php', {
            method: 'post',
            body: JSON.stringify(param),
        }).then((respon) => respon.json())
        .then((data) => {
            data = data[0];

            const newThum_left = data['ms_expain_pic'] != undefined ? data['ms_expain_pic'].split(',') : 'common.png';
            const newImgSrc_left = newThum_left[0] !== '' ? `./upload/${newThum_left[0]}` : '/upload/common.png';

            const newThum_right = data['c_picture'] != undefined ? data['c_picture'].split(',') : 'common.png';
            const newImgSrc_right = newThum_right[0] !== '' ? `./upload/${newThum_right[0]}` : '/upload/common.png';
            
            const doneMissionLeftTags = data['ms_tag'].split(',', 2);
            const doneMissionLeftImg = doneMissionModal.querySelector('.doneMission__left--thum-img');
            const doneMissionLeftHashBox = doneMissionModal.querySelector('.doneMission__left--hash');
            const doneMissionLeftTitle = doneMissionModal.querySelector('.doneMission__left--title-text');
            const doneMissionLeftTextArea = doneMissionModal.querySelector('.doneMission__left--textarea-text');
            const doneMissionLeftCond = doneMissionModal.querySelector('.doneMission__left--cond-text');
            const doneMissionLeftDone = doneMissionModal.querySelector('.doneMission__left--done-text');
            const doneMissionLeftWriter = doneMissionModal.querySelector('.doneMission__left--writer-text');

            const doneMissionRightImg = doneMissionModal.querySelector('.doneMission__right--thum-img');
            const doneMissionRightTitle = doneMissionModal.querySelector('.doneMission__right--title-text');
            const doneMissionRightTextArea = doneMissionModal.querySelector('.doneMission__right--textarea-text');
            const doneMissionRightDate = doneMissionModal.querySelector('.doneMission__right--date-text');
            const doneMissionRightWriter = doneMissionModal.querySelector('.doneMission__right--writer-text');

            const doneStamps = doneMissionModal.querySelectorAll('.done-stamp');
            
            removeChild(doneMissionLeftHashBox);
            doneMissionLeftImg.src = newImgSrc_left;
            doneMissionLeftTitle.textContent = data['ms_title'];
            doneMissionLeftTextArea.textContent = data['ms_contents'];
            doneMissionLeftCond.textContent = data['ms_done_cond'];
            doneMissionLeftDone.textContent = data['ms_done_com'];
            doneMissionLeftWriter.textContent = `마감일 : ${data['ms_date_end']}  작성자 : ${data['ms_writer']}`;

            doneMissionRightImg.src = newImgSrc_right;
            doneMissionRightTitle.textContent = data['ms_title'];
            doneMissionRightTextArea.textContent = data['c_text'];
            doneMissionRightDate.textContent = `제출일 : ${data['c_date']}`;
            doneMissionRightWriter.textContent = `제출자 : ${data[20]}`;

            doneStamps.forEach((el, index) => {
                if(index == data['c_stamp']){
                    el.style.display = 'block';
                }
            });

            doneMissionLeftTags.forEach((el) => {
                const newStampTag = stampLeftHashTag.cloneNode(true);
                newStampTag.textContent = el;
                doneMissionLeftHashBox.appendChild(newStampTag);
            });
        });
    }

    function confirmDoneMission(){
        if(doneRightStampID.value === ''){
            alert('도장을 선택해주세요.'); 
            return 0;
        }
        loading.style.display = 'flex';
        
        const param = {
            'ms_id': doneModal.id,
            'stamp': doneRightStampID.value,
        };
        
        fetch('./modules/confirmDoneMission.php', {
            method: 'post',
            body: JSON.stringify(param),
        }).then((respon) => respon.json())
        .then(() => {
            loading.style.display = 'none';
            location.reload();
        });
    }

    function missionDoneConfirm(id){
        removeChild(doneLeftHashBox);
        removeChild(doneRightHashBox);
        
        const param = {
            'ms_id': id,
        };
        fetch('./modules/getMissionConfirmInfo.php', {
            method: 'post',
            body: JSON.stringify(param),
        }).then((respon) => respon.json())
        .then((data) => {
            data = data[0];
            const doneLeftTags = data['ms_tag'].split(',', 2);
            const doneRightTags = data['c_hash'].split(',', 2);
            const doneLeftTitle = doneModal.querySelector('.done__left--title-text');
            const doneLeftTextArea = doneModal.querySelector('.done__left--textarea-text');
            const doneLeftCond = doneModal.querySelector('.done__left--cond-text');
            const doneLeftDone = doneModal.querySelector('.done__left--done-text');
            const doneLeftWriter = doneModal.querySelector('.done__left--writer-text');
            const doneLeftImg = doneModal.querySelector('.done__left--thum-img');
            const newThum = data['ms_expain_pic'] != undefined ? data['ms_expain_pic'].split(',') : 'common.png';
            const newImgSrc = newThum[0] !== '' ? `./upload/${newThum[0]}` : '/upload/common.png';
            
            doneLeftImg.src = newImgSrc;
            doneLeftTitle.textContent = data['ms_title'];
            doneLeftTextArea.textContent = data['ms_contents'];
            doneLeftCond.textContent = data['ms_done_cond'];
            doneLeftDone.textContent = data['ms_done_com'];
            doneLeftWriter.textContent = `마감일 : ${data['ms_date_end']} 작성자 : ${data['ms_writer']}`;

            const doneRightTitle = doneModal.querySelector('.done__right--subject-text');
            const doneRightDate = doneModal.querySelector('.done__right--date');
            const doneRightHash = doneModal.querySelector('.done__right--hash');
            const doneRightNick = doneModal.querySelector('.done__right--nick');
            const doneRightText = doneModal.querySelector('.done__right--textarea-text');
            
            doneModal.id = data['ms_id'];
            doneRightTitle.textContent = data['c_title'];
            doneRightNick.textContent = `수행자 : ${data['m_id']}`;
            doneRightText.textContent = data['c_text'];

            const today = new Date();   
            const year = today.getFullYear();
            let month = today.getMonth() + 1;
            let date = today.getDate();

            month = (month < 10) ? '0' + month : month;
            date = (date < 10) ? '0' + date : date;

            doneRightDate.textContent = `${year}.${month}.${date}`;
            
            doneLeftTags.forEach((el) => {
                const newStampTag = stampLeftHashTag.cloneNode(true);
                newStampTag.textContent = el;
                doneLeftHashBox.appendChild(newStampTag);
            });

            doneRightTags.forEach((el) => {
                const newStampTag = stampLeftHashTag.cloneNode(true);
                newStampTag.textContent = el;
                doneRightHash.appendChild(newStampTag);
            });
        })
        .then(() => {
            toggleModal(doneModal);
        });
    }

    function getCompleteStatus(){
        fetch('./modules/getCompleteStatus.php')
        .then((respon) => respon.json())
        .then((data) => {
            data = data[0];
            const statusComplete = document.querySelector('.mypage__user--status-complete');
            const statusFail = document.querySelector('.mypage__user--status-fail');
            const statusNumber = document.querySelector('.mypage__user--status-number');
            const statusCompletePercent = document.querySelector('.mypage__user--complete-percent');
            const statusFailPercent = document.querySelector('.mypage__user--fail-percent');
            const complete = Number(data['m_complete']);
            const fail = Number(data['m_fail']);
            const total = complete + fail;
            let completePercent = 0;
            if(total !== 0){
                completePercent = (complete / total) * 100;
            }

            statusComplete.textContent = `${complete}개 `;
            statusFail.textContent = `${fail}개`;
            statusNumber.style.width = `${(completePercent == 0 ? 50 : completePercent)}%`;
            numberPerAnimation(statusCompletePercent, completePercent, '%')
            .then(() => numberPerAnimation(statusFailPercent, (completePercent == 0 ? 0 : 100 - completePercent), '%'))
            .then(() => numberPerAnimation(statusComplete, complete, '개'))
            .then(() => numberPerAnimation(statusFail, fail, '개'));
        });
    }

    function numberPerAnimation(dom, num, text){
        return new Promise((res, rej) => {
            for(let i=0,time=((num/2)); i<=num; i++){
                setTimeout(() => {
                    dom.textContent = `${i}${text}`;
                    time = time - 1;
                }, i * (-10 + time));
            }
            res();
        });
    }

    function getFulFillMission(type){
        removeChild(missionsWrapperMission);
        const param = {
            'type': type
        };
        fetch('./modules/getFulFillMission.php', {
            method: 'post',
            body: JSON.stringify(param),
        })
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
            const sendRightDate = stampModal.querySelector('.send__right--date');
            const sendRightNick = stampModal.querySelector('.send__right--nick');
            
            sendRightMissionID.value = data['ms_id'];
            sendRightNick.textContent = `수행자 : ${user}`;

            const today = new Date();   
            const year = today.getFullYear();
            let month = today.getMonth() + 1;
            let date = today.getDate();

            month = (month < 10) ? '0' + month : month;
            date = (date < 10) ? '0' + date : date;

            sendRightDate.textContent = `${year}.${month}.${date}`;
            
            sendLeftTags.forEach((el) => {
                let newStampTag = stampLeftHashTag.cloneNode(true);
                newStampTag.textContent = el;
                stampLeftHashBox.appendChild(newStampTag);
            });
        })
        .then(() => {
            toggleModal(stampModal);
        });
    }

    function sendDoneMisson(){
        const sendRightForm = stampModal.querySelector('.send__right--contents');
        const sendRightTitle = stampModal.querySelector('.send__right--subject-text');
        const sendRightText = stampModal.querySelector('.send__right--textarea-text');
        const formData = new FormData(sendRightForm);

        if(sendRightTitle.value == '' || sendRightText.value == ''){
            alert('빈 칸을 채워주세요.');
            return 0;
        }

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

        loading.style.display = 'flex';
        fetch('./modules/sendAgents.php', {
            method: 'post',
            body: JSON.stringify(param),
        }).then((respon) => respon.json())
        .then((data) => {
            loading.style.display = 'none';
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
                agentUserPicImg.src = `./agents/${user}.png`;
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

        const form = new FormData(mypageModalForm);
        fetch('./modules/editProfile.php', {
            method: 'post',
            body: form,
        }).then((respon) => respon.json())
        .then((data) => {
            if(data['status'] === 200){
                userNick.textContent = data[0]['m_nick'];
                userComment.textContent = data[0]['m_comment'];
                mypageModalNick.value = data[0]['m_nick'];
                mypageModalComment.value = data[0]['m_comment'];
                userImg.src = userModalImg.src;
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
        removeChild(missionsWrapperWith);
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
                datas.forEach((item) => {
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

                    if(type == 1){
                        newMission.addEventListener('click', (e) => {
                            e.preventDefault();
                            missionDoneConfirm(item['ms_id']);
                        });
                    }

                    if(type == 2){
                        newMission.addEventListener('click', (e) => {
                            e.preventDefault();
                            showDoneMission(item['ms_id']);
                        });
                    }

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