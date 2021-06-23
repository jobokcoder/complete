{
    const loading = document.querySelector('.loading');
    const missionsWrapper = document.querySelector('.missions__wrapper');
    const missionsList = document.querySelector('.missions__list');
    const missions = document.querySelector('.missions');
    const searchTitle = document.querySelector('.search__title');

    const viewWrapper = document.querySelector('.view');
    const viewContents = document.querySelector('.view__contents');

    let userAdd = '';

    window.addEventListener('load', () => {
        missions.remove();
        fetch('./modules/getUserInfo.php')
        .then((respon) => respon.json())
        .then((data) => {
            userAdd = data['m_add1'];
        }).then(() => {
            getMission(getParameters('search'));
        });
    });

    function getParameters(paramName) {
        let returnValue;
        const url = location.href;
        const parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&');
    
        for (let i = 0; i < parameters.length; i++) {
            let varName = parameters[i].split('=')[0];
            if (varName.toUpperCase() == paramName.toUpperCase()) {
                returnValue = parameters[i].split('=')[1];
                return decodeURIComponent(returnValue);
            }
        }
    };

    function getMission(keyword){
        const param = {
            'area': userAdd,
            'keyword': keyword,
        };

        fetch('./modules/getSearchMission.php', {
            method: 'post',
            body: JSON.stringify(param),
        })
        .then(respon => respon.json())
        .then(data => {
            if(data.length > 0){
                const total = data.length;
                const block = Math.ceil(total / 7);
                let newDiv;
                let newMission;

                searchTitle.textContent = `'${keyword}' 검색 결과 ${total}개`;
                
                for(let n=0, i=0; i < block; i++){
                    for(let j=0; j < 7; j++){
                        if(n < total){
                            if(j == 0 || j == 3){
                                newDiv = missions.cloneNode(true);
                                removeChild(newDiv);
                            }

                            newMission = missionsList.cloneNode(true);
                            const newView = viewContents.cloneNode(true);
                            const newViewId = data[n]['ms_id'];
                            
                            const newThum = data[n]['ms_expain_pic'] != undefined ? data[n]['ms_expain_pic'].split(',') : 'common.png';
                            const newImgSrc = newThum[0] !== '' ? `./upload/${newThum[0]}` : '/upload/common.png';
                            const tags = data[n]['ms_tag'].split(',');
                            const conds = data[n]['ms_done_cond'] !== '' ? data[n]['ms_done_cond'].split(',') : '';

                            const newid = data[n]['ms_id'];
                            const newViewImg = newView.querySelector('.view__contents--picture-img');
                            const newViewTitle = newView.querySelector('.view__contents--title');
                            const newViewTag = newView.querySelector('.view__contents--tag');
                            const newViewContent = newView.querySelector('.view__contents--content');
                            const newViewCondList = newView.querySelector('.view__contents--done-conditionlist');
                            const newViewDoneList = newView.querySelector('.view__contents--done-compensationlist');
                            const newViewListItem = newView.querySelector('.done__list--item');
                            const newViewDate = newView.querySelector('.view__contents--writer-date');
                            const newViewWriter = newView.querySelector('.view__contents--writer-user');
                            const newViewCancelBtn = newView.querySelector('.view__cancel');
                            const newViewRequestBtn = newView.querySelector('.view__contents--request-button');
                            const newViewContentsNum = newView.querySelector('.view__contents--num');
        
                            newViewRequestBtn.addEventListener('click', () => { requestAgent(newid); });
                            
                            newViewListItem.remove();
                            newView.id = newid;
                            newViewImg.src = newImgSrc;
                            newViewTitle.textContent = data[n]['ms_title'];
                            newViewTag.textContent = '';
                            tags.forEach((el) => {
                                newViewTag.textContent += `${el} `;
                            });
                            newViewContent.textContent = data[n]['ms_contents'];
                            if(conds !== ''){
                                conds.forEach((el) => {
                                    let copyViewListItem = newViewListItem.cloneNode(true);
                                    copyViewListItem.textContent = el;
                                    newViewCondList.appendChild(copyViewListItem);
                                });
                            }
                            newViewDoneList.textContent = data[n]['ms_done_com'];
                            newViewDate.textContent = `${data[n]['ms_date_start']} ~ ${data[n]['ms_date_end']}`;
                            newViewWriter.textContent = data[n]['ms_writer'];
                            newViewCancelBtn.addEventListener('click', (e) => {
                                e.preventDefault();
                                newView.parentNode.classList.remove('active');
                            });

                            const param2 = {
                                'ms_id': data[n]['ms_id'],
                            };

                            fetch('./modules/getRequestCount.php', {
                                method: 'post',
                                body: JSON.stringify(param2),
                            })
                            .then((respon2) => respon2.json())
                            .then((data2) => {
                                newViewContentsNum.textContent = `모집인원 : ${data2['count']}명`;
                                viewWrapper.appendChild(newView);
                            });
                            
                            let newMissionthum = newMission.querySelector('.missions__list--image');
                            let newMissionImg = newMission.querySelector('.missions__list--image img');
                            let newMissionTitle = newMission.querySelector('.missions__list--info-title');
                            let newMissionWriter = newMission.querySelector('.missions__list--info-writer');
                            let newMissionHashBox = newMission.querySelector('.missions__list--info-hash');
                            let newMissionHashText = newMission.querySelector('.missions__list--hash-text');

                            newMissionImg.src = newImgSrc;
                            newMissionTitle.textContent = data[n]['ms_title'];
                            newMissionWriter.innerHTML = `의뢰자 : ${data[n]['ms_writer']} <br> 마감일 : ${data[n]['ms_date_end']}`;
                            newDiv.appendChild(newMission);
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
                            
                            if(j == 2 || j == 6 || ((total-1) === n)){
                                missionsWrapper.appendChild(newDiv);
                            }
                        }
                        n++;
                    }
                }
            }else{
                searchTitle.textContent = `검색 결과가 존재하지 않습니다.`;
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

    function requestAgent(id){
        const param = {
            'id': id,
        };

        loading.style.display = 'flex';
        fetch('./modules/requestAgent.php', {
            method: 'post',
            body: JSON.stringify(param),
        }).then((respon) => respon.json())
        .then((data) => {
            loading.style.display = 'none';
            if(data['status'] === 500){
                alert('로그인 후 이용하실 수 있습니다.');
                return 0;
            }else if(data['status'] === 400){
                alert('의뢰자 본인은 신청할 수 없습니다.');
                return 0;
            }else if(data['status'] === 300){
                alert('이미 신청하셨습니다.');
                return 0;
            }else if(data['status'] === 200){
                location.reload();
            }
        });
    }

    function removeChild(dom){
        while(dom.hasChildNodes()){
            dom.removeChild(dom.firstChild);
        }
    }
}