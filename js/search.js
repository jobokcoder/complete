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
                            let newView = viewContents.cloneNode(true);
                            let newViewId = data[n]['ms_id'];
                            
                            let newThum = data[n]['ms_expain_pic'] != undefined ? data[n]['ms_expain_pic'].split(',') : 'common.png';
                            let newImgSrc = newThum[0] !== '' ? `./upload/${newThum[0]}` : '/upload/common.png';
                            let tags = data[n]['ms_tag'].split(',');
                            let conds = data[n]['ms_done_cond'] !== '' ? data[n]['ms_done_cond'].split(',') : '';

                            let newid = data[n]['ms_id'];
                            let newViewImg = newView.querySelector('.view__contents--picture-img');
                            let newViewTitle = newView.querySelector('.view__contents--title');
                            let newViewTag = newView.querySelector('.view__contents--tag');
                            let newViewContent = newView.querySelector('.view__contents--content');
                            let newViewCondList = newView.querySelector('.view__contents--done-conditionlist');
                            let newViewDoneList = newView.querySelector('.view__contents--done-compensationlist');
                            let newViewListItem = newView.querySelector('.done__list--item');
                            let newViewDate = newView.querySelector('.view__contents--writer-date');
                            let newViewWriter = newView.querySelector('.view__contents--writer-user');
                            let newViewCancelBtn = newView.querySelector('.view__cancel');
                            
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
                            
                            viewWrapper.appendChild(newView);

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

    function removeChild(dom){
        while(dom.hasChildNodes()){
            dom.removeChild(dom.firstChild);
        }
    }
}