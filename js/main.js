{
    const loading = document.querySelector('.loading');
    const missionsList = document.querySelector('.missions__list');
    const missions = document.querySelector('.missions');
    const missionsWrapper = document.querySelector('.missions__wrapper');

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
    
    const slideMissionBtn = document.querySelector('.slide__mission--buttons');
    const slideMissionWrapper = document.querySelector('.slide__contents--mission');
    const slideMissionOrigin = document.querySelector('.slide__mission');
    const slideMissionHash = document.querySelector('.slide__mission--hash-tag');
    const slideMissionHashTag = document.querySelector('.missions__list--hash-text');
    const slideRightMissionWrapper = document.querySelector('.slide__right--wrapper');
    const slideRightMission = document.querySelector('.slide__right--mission');

    let slideNow = 0;
    let slidDeg = 0;
    let missionCount = 0;
    
    missions.remove();
    missionsList.remove();
    slideMissionOrigin.remove();
    slideMissionHash.remove();
    slideRightMission.remove();

    setInterval(setBorderRadius, 800);
    getSlideMission(1);

    window.addEventListener('load', () => {
        setTimeout(() => {
            scrollTo(0, 0);
        }, 0);
    });

    window.addEventListener('scroll', () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            getMission();
            missionCount++;
        }
    });

    slideLeftBtn.addEventListener('click', () => { rotateSlide('left'); });
    slideRightBtn.addEventListener('click', () => { rotateSlide('right'); });

    slideMenuPopluar.addEventListener('click', (e) => { 
        slideMenuText.forEach((el) => {
            el.classList.remove('active');
        });
        e.target.parentNode.parentNode.classList.add('active');
        getSlideMission(1); 
    });

    slideMenuDeadline.addEventListener('click', (e) => {
        slideMenuText.forEach((el) => {
            el.classList.remove('active');
        });
        e.target.parentNode.parentNode.classList.add('active');
        getSlideMission(2); 
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

        slideWrapper.style.display = 'none';
        slideEvent.style.display = 'grid';
        changeTitle.textContent = 'EVENT';
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

    // 인기순 , 마감임박 , 이벤트
    function getSlideMission(type){

        slideEvent.style.display = 'none';
        slideWrapper.style.display = 'grid';

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
            'type': type,
        };

        fetch('./modules/getSlideMission.php', {
            method: 'post',
            body: JSON.stringify(param),
        }).then(respon => respon.json(param))
        .then(data => {
            const total = data.length;
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
                
                tags.forEach((el, index) => {
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
            });
        });
    }

    function getMission(){

        const param = {
            'count': missionCount,
        };

        fetch('./modules/getMission.php', {
            method: 'post',
            body: JSON.stringify(param),
        })
        .then(respon => respon.json())
        .then(data => {
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
                        let newMissionImg = newMission.querySelector('.missions__list--image img');
                        let newMissionTitle = newMission.querySelector('.missions__list--info-title');
                        let newMissionWriter = newMission.querySelector('.missions__list--info-writer');
                        let newMissionHashBox = newMission.querySelector('.missions__list--info-hash');
                        let newThum = data[n]['ms_expain_pic'] != undefined ? data[n]['ms_expain_pic'].split(',') : 'common.png';
                        let newImgSrc = newThum[0] !== '' ? `./upload/${newThum[0]}` : '/upload/common.png';
                        let tags = data[n]['ms_tag'].split(',');

                        newMissionImg.src = newImgSrc;
                        newMissionTitle.textContent = data[n]['ms_title'];
                        newMissionWriter.textContent = data[n]['ms_writer'];
                        
                        newDiv.appendChild(newMission);
                        tags.forEach((el) => {
                            let newMissionHashTag = newMission.querySelector('.missions__list--hash-text').cloneNode();
                            newMissionHashTag.textContent = el;
                            newMissionHashBox.appendChild(newMissionHashTag);
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