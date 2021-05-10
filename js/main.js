{
    const loading = document.querySelector('.loading');
    const missionsList = document.querySelector('.missions__list');
    const missions = document.querySelector('.missions');
    const missionsWrapper = document.querySelector('.missions__wrapper');

    const slideMenuText = document.querySelectorAll('.slide__menu--text');
    const slideMenuPopluar = document.querySelector('.slide__menu--text-popluar');
    const slideMenuDeadline = document.querySelector('.slide__menu--text-deadline');
    const slideMenuEvent = document.querySelector('.slide__menu--text-event');
    const slideNowText = document.querySelector('.slide__mission--now');
    const slideLeftBtn = document.querySelector('.slide__mission--buttons-left');
    const slideRightBtn = document.querySelector('.slide__mission--buttons-right');
    const slideRightWrapper = document.querySelector('.slide__right--wrapper');
    const slideMission = document.querySelectorAll('.slide__mission');
    let slideNow = 0;
    let slidDeg = 0;
    let missionCount = 0;
    
    // missions.remove();
    // missionsList.remove();

    window.addEventListener('load', () => {
        setTimeout(() => {
            scrollTo(0, 0);
        }, 0);
    });

    window.addEventListener('scroll', () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // getMission();
            missionCount++;
        }
    });

    setInterval(setBorderRadius, 800);
    
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
        getSlideMission(3);
    });

    function rotateSlide(direction){

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

        const changeTitle = document.querySelector('.slide__left--title');
        const changeCircle = document.querySelectorAll('.slide__right--circle');
        const changeBeforeCircle = document.querySelector('.slide__right--before-circle');
        const changeAfterCircle = document.querySelector('.slide__right--after-circle');
        const changeTag = document.querySelectorAll('.slide__mission--hash-tag');
        const changeWrapperCircle = document.querySelector('.missions__header--circle');

        changeTitle.style['color'] = type === 1 ? '#2EA0AA' : type === 2 ? '#F5CE33' : '#1E3470';

        changeCircle.forEach((el) => {
            el.style['background'] = type === 1 ? '#2EA0AA' : type === 2 ? '#F5CE33' : '#1E3470';
            el.style['boxShadow'] = type === 1 ? '0px 0px 16px #2EA0AA' : type === 2 ? '0px 0px 16px #F5CE33' : '0px 0px 16px #1E3470';
        });

        changeBeforeCircle.style['background'] = type === 1 ? '#2EA0AA' : type === 2 ? '#F5CE33' : '#1E3470';
        changeAfterCircle.style['background'] = type === 1 ? '#2EA0AA' : type === 2 ? '#F5CE33' : '#1E3470';

        changeTag.forEach((el) => {
            el.style['background'] = type === 1 ? '#2EA0AA' : type === 2 ? '#F5CE33' : '#1E3470';
        });

        changeWrapperCircle.style['background'] = type === 1 ? '#2EA0AA' : type === 2 ? '#F5CE33' : '#1E3470';

        const param = {
            'type': type,
        };

        // fetch('./modules/getSlideMission.php', {
        //     method: 'post',
        //     body: JSON.stringify(),
        // }).then(respon => respon.json(info))
        // .then(result => {
            
        // });
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
                        let newMissionText = newMission.querySelector('.missions__list--info-text');
                        let newMissionWriter = newMission.querySelector('.missions__list--info-writer');
                        let newThum = data[n]['ms_expain_pic'] != undefined ? data[n]['ms_expain_pic'].split(',') : 'common.png';
                        let newImgSrc = newThum !== 'common.png' ? `./upload/${newThum[0]}` : '/upload/common.png';
                        newMissionImg.src = newImgSrc;
                        newMissionTitle.textContent = data[n]['ms_title'];
                        newMissionText.textContent = data[n]['ms_contents'];
                        newMissionWriter.textContent = data[n]['ms_writer'];
                        newDiv.appendChild(newMission);
                        
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
    }

    function generateBorderRadiusValue() {
        return `${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% / 
        ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}%`;
    }

    function getRandomValue(){
        return Math.floor(Math.random() * 30) + 60;
    }
}