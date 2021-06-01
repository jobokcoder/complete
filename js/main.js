{
    const loading = document.querySelector('.loading');
    const missionsWrapper = document.querySelector('.missions__wrapper');
    const missionsList = document.querySelector('.missions__list');
    const missions = document.querySelector('.missions');
    const viewWrapper = document.querySelector('.view');
    const viewContents = document.querySelector('.view__contents');
    const slideEvent = document.querySelector('.slide__event');
    const slideWrapper = document.querySelector('.slide__wrapper');
    const slideMenuText = document.querySelectorAll('.slide__menu--text');
    const slideMenuPopluar = document.querySelector('.slide__menu--text-popluar tspan');
    const slideMenuDeadline = document.querySelector('.slide__menu--text-deadline tspan');
    const slideMenuEvent = document.querySelector('.slide__menu--text-event tspan');
    const slideNowText = document.querySelector('.slide__mission--now');
    const slideLeftBtn = document.querySelector('.slide__mission--buttons-left');
    const slideRightBtn = document.querySelector('.slide__mission--buttons-right');
    const slideRightWrapper = document.querySelector('.slide__right--wrapper');
    const slideMissionWrapper = document.querySelector('.slide__contents--mission');
    const slideMissionOrigin = document.querySelector('.slide__mission');
    const slideMissionHash = document.querySelector('.slide__mission--hash-tag');
    const slideRightMissionWrapper = document.querySelector('.slide__right--wrapper');
    const slideRightMission = document.querySelector('.slide__right--mission');

    let slideNow = 0;
    let slidDeg = 0;
    let missionCount = 0;
    let area = 'none';
    
    window.addEventListener('load', () => {

        viewContents.remove();
        missions.remove();
        missionsList.remove();
        slideMissionOrigin.remove();
        slideMissionHash.remove();
        slideRightMission.remove();

        fetch('./modules/getAreaInfo.php')
        .then((respon) => respon.json())
        .then((data) => {
            area = data['area'];
            getSlideMission(1, area);
        });

        setInterval(setBorderRadius, 800);
    });

    window.addEventListener('load', () => {
        setTimeout(() => {
            scrollTo(0, 0);
        }, 0);
    });

    window.addEventListener('scroll', () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            getMission(area);
        }
    });

    slideLeftBtn.addEventListener('click', () => { rotateSlide('left'); });
    slideRightBtn.addEventListener('click', () => { rotateSlide('right'); });

    slideMenuPopluar.addEventListener('click', (e) => { 
        slideMenuText.forEach((el) => {
            el.classList.remove('active');
        });
        e.target.parentNode.parentNode.classList.add('active');
        getSlideMission(1, area); 
    });

    slideMenuDeadline.addEventListener('click', (e) => {
        slideMenuText.forEach((el) => {
            el.classList.remove('active');
        });
        e.target.parentNode.parentNode.classList.add('active');
        getSlideMission(2, area); 
    });

    slideMenuEvent.addEventListener('click', (e) => {
        slideMenuText.forEach((el) => {
            el.classList.remove('active');
        });
        e.target.parentNode.parentNode.classList.add('active');
        eventShow();
    });

    function slideReset(){
        const slideLeftMissionAll = document.querySelectorAll('.slide__mission');
        const slideRightMissionAll = document.querySelectorAll('.slide__right--mission');

        slideLeftMissionAll.forEach((el) => {
            el.remove();
        });

        slideRightMissionAll.forEach((el) => {
            el.remove();
        });
    }

    function eventShow(){
        const changeTitle = document.querySelector('.slide__title');

        changeTitle.textContent = 'EVENT';
        changeTitle.style.transform = 'translateY(0%)';
        slideWrapper.style.display = 'none';
        slideEvent.style.display = 'grid';
    }

    function rotateSlide(direction){

        const slideMission = document.querySelectorAll('.slide__mission');
        const rotateMission = document.querySelectorAll('.slide__right--mission');

        if(direction === 'left'){
            slideNow--;
            slidDeg -= 45;
        }else{
            slideNow++;
            slidDeg += 45;
        }

        slideNow = slideNow < 0 ? 7 : slideNow > 7 ? 0 : slideNow;
        slideNowText.textContent = `${slideNow + 1} / 8`;

        slideRightWrapper.style.transform = `translateX(80%) rotate(${slidDeg}deg)`;

        slideMission.forEach((el) => {
            el.classList.remove('now');
        });

        slideMission.forEach((el,index) => {
            if(index === slideNow){
                el.classList.add('now');
            }
        });

        rotateMission.forEach((el) => {
            el.classList.remove('now');
        });

        rotateMission.forEach((el,index) => {
            if(index === slideNow){
                el.classList.add('now');
            }
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
            if(data['status'] === 400){
                alert('로그인 후 이용하실 수 있습니다.');
                return 0;
            }else if(data['status'] === 300){
                alert('이미 신청하셨습니다.');
                return 0;
            }else{
                alert('수행 신청되었습니다.');
                location.reload();
            }
        });
    }

    // 인기순 , 마감임박
    function getSlideMission(type){
        const changeSlideTitle = document.querySelector('.slide__title');
        changeSlideTitle.textContent = 'MISSION';
        changeSlideTitle.style.transform = 'translateY(100%)';
        slideEvent.style.display = 'none';
        slideWrapper.style.display = 'flex';

        slideReset();
        slideNow = 0;
        slidDeg = 0;
        slideRightWrapper.style.transform = `translateX(80%) rotate(${slidDeg}deg)`;
        slideNowText.textContent = `${slideNow + 1} / 8`;

        const changeOriginTag = document.querySelectorAll('.missions__list--hash-text');
        const changeTitle = document.querySelector('.slide__title');
        const changeCircle = document.querySelectorAll('.slide__right--circle');
        const changeBeforeCircle = document.querySelector('.slide__right--before-circle');
        const changeAfterCircle = document.querySelector('.slide__right--after-circle');
        const changeCenterCircle = document.querySelector('.slide__right--center-circle');
        const changeTag = document.querySelectorAll('.slide__mission--hash-tag');
        const changeWrapperCircle = document.querySelector('.missions__header--circle');

        missionsList.querySelector('.missions__list--hash-text').style['background'] = type === 1 ? '#2EA0AA' : type === 2 ? '#F5CE33' : '#1E3470';

        changeOriginTag.forEach((el) => {
            el.style['background'] = type === 1 ? '#2EA0AA' : type === 2 ? '#F5CE33' : '#1E3470';
        });

        changeTitle.style['color'] = type === 1 ? '#2EA0AA' : type === 2 ? '#F5CE33' : '#1E3470';

        changeCircle.forEach((el) => {
            el.style['background'] = type === 1 ? '#2EA0AA' : type === 2 ? '#F5CE33' : '#1E3470';
            el.style['boxShadow'] = type === 1 ? '0px 0px 16px #2EA0AA' : type === 2 ? '0px 0px 16px #F5CE33' : '0px 0px 16px #1E3470';
        });

        changeBeforeCircle.style['background'] = type === 1 ? '#2EA0AA' : type === 2 ? '#F5CE33' : '#1E3470';
        changeAfterCircle.style['background'] = type === 1 ? '#2EA0AA' : type === 2 ? '#F5CE33' : '#1E3470';
        changeCenterCircle.style['background'] = type === 1 ? '#2EA0AA' : type === 2 ? '#F5CE33' : '#1E3470';

        changeTag.forEach((el) => {
            el.style['background'] = type === 1 ? '#2EA0AA' : type === 2 ? '#F5CE33' : '#1E3470';
        });

        changeWrapperCircle.style['background'] = type === 1 ? '#2EA0AA' : type === 2 ? '#F5CE33' : '#1E3470';

        const param = {
            'area': area,
            'type': type,
        };

        fetch('./modules/getSlideMission.php', {
            method: 'post',
            body: JSON.stringify(param),
        }).then((respon) => respon.json())
        .then((data) => {
            if(data.length > 0){
                const item = data;
                
                item.forEach((el, index) => {
                    let tags = el['ms_tag'].split(',', 2);
                    let newSlideMission = slideMissionOrigin.cloneNode(true);
                    let newSlideMissionTitle = newSlideMission.querySelector('.slide__mission--title');
                    let newSlideMissionText = newSlideMission.querySelector('.slide__mission--text');
                    let newSlideMissionWriter = newSlideMission.querySelector('.slide__mission--writer');
                    let newSlideMissionDeadline = newSlideMission.querySelector('.slide__mission--deadline');
                    let newSlideMissionHashBox = newSlideMission.querySelector('.slide__mission--hash');
                    let newThum = el['ms_expain_pic'] != undefined ? el['ms_expain_pic'].split(',') : 'common.png';
                    let newImgSrc = newThum[0] !== '' ? `./upload/${newThum[0]}` : '/upload/common.png';

                    let newSlideRightMission = slideRightMission.cloneNode(true);
                    let newSlideRightMissionImg = newSlideRightMission.querySelector('.slide__right--mission-img');

                    newSlideRightMissionImg.src = newImgSrc;
                    newSlideMissionTitle.textContent = el['ms_title'];
                    newSlideMissionText.textContent = el['ms_contents'];
                    newSlideMissionWriter.textContent = el['ms_writer'];
                    newSlideMissionDeadline.textContent = el['ms_date_end'];
                    
                    tags.forEach((el) => {
                        let newSlideMissionHashTag = slideMissionHash.cloneNode(true);
                        newSlideMissionHashTag.style['background'] = type === 1 ? '#2EA0AA' : type === 2 ? '#F5CE33' : '#1E3470';
                        newSlideMissionHashTag.textContent = el;
                        newSlideMissionHashBox.appendChild(newSlideMissionHashTag);
                    });

                    if(index === 0){
                        newSlideMission.classList.add('now');
                        newSlideRightMission.classList.add('now');
                    }

                    slideMissionWrapper.appendChild(newSlideMission);
                    slideRightMissionWrapper.appendChild(newSlideRightMission);
                    
                    const newView = viewContents.cloneNode(true);
                            
                    tags = el['ms_tag'].split(',');
                    const conds = el['ms_done_cond'] !== '' ? el['ms_done_cond'].split(',') : '';
                    const newid = el['ms_id'];
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

                    newViewRequestBtn.addEventListener('click', () => { requestAgent(newid); });
                            
                    newViewListItem.remove();
                    newView.id = `slide_${newid}`;
                    newViewImg.src = newImgSrc;
                    newViewTitle.textContent = el['ms_title'];
                    newViewTag.textContent = '';
                    tags.forEach((el) => {
                        newViewTag.textContent += `${el} `;
                    });
                    newViewContent.textContent = el['ms_contents'];
                    if(conds !== ''){
                        conds.forEach((el) => {
                            let copyViewListItem = newViewListItem.cloneNode(true);
                            copyViewListItem.textContent = el;
                            newViewCondList.appendChild(copyViewListItem);
                        });
                    }
                    newViewDoneList.textContent = el['ms_done_com'];
                    newViewDate.textContent = `${el['ms_date_start']} ~ ${el['ms_date_end']}`;
                    newViewWriter.textContent = el['ms_writer'];
                    newViewCancelBtn.addEventListener('click', (e) => {
                        e.preventDefault();
                        newView.parentNode.classList.remove('active');
                    });
                    newSlideRightMissionImg.addEventListener('click', () => {
                        const originMissionView = document.querySelectorAll(`.view__contents`);
                        originMissionView.forEach((el) => {
                            el.classList.remove('active');
                        });
                        viewWrapper.classList.add('active');
                        newView.classList.add('active');

                        const viewInfo = {
                            'id': newid,
                        };

                        fetch('./modules/okView.php', {
                            method: 'POST',
                            body: JSON.stringify(viewInfo),
                        })
                        .then(respon => respon.json());
                    });
                    
                    viewWrapper.appendChild(newView);
                });
            }
        });
    }

    function getMission(){
        const param = {
            'area': area,
            'count': missionCount,
        };

        fetch('./modules/getMission.php', {
            method: 'post',
            body: JSON.stringify(param),
        })
        .then((respon) => respon.json())
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
                missionCount++;
            }
        });
    }

    function removeChild(dom){
        while(dom.hasChildNodes()){
            dom.removeChild(dom.firstChild);
        }
    }

    function setBorderRadius() {
        document.querySelector('.slide__right--before-circle').style.borderRadius = generateBorderRadiusValue();
        document.querySelector('.slide__right--after-circle').style.borderRadius = generateBorderRadiusValue();
        document.querySelector('.slide__right--center-circle').style.borderRadius = generateBorderRadiusValue();
    }

    function generateBorderRadiusValue() {
        return `${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% / 
        ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}%`;
    }

    function getRandomValue(){
        return Math.floor(Math.random() * 30) + 60;
    }
}