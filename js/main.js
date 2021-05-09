{
    const loading = document.querySelector('.loading');
    const missionsList = document.querySelector('.missions__list');
    const missions = document.querySelector('.missions');
    const missionsWrapper = document.querySelector('.missions__wrapper');
    const slideNowText = document.querySelector('.slide__mission--now');
    const slideLeftBtn = document.querySelector('.slide__mission--buttons-left');
    const slideRightBtn = document.querySelector('.slide__mission--buttons-right');
    const slideRightWrapper = document.querySelector('.slide__right--wrapper');
    const slideMission = document.querySelectorAll('.slide__mission');
    let slideNow = 0;
    let slidDeg = 0;
    
    removeChild(missionsWrapper);

    slideLeftBtn.addEventListener('click', () => { rotateSlide('left'); });
    slideRightBtn.addEventListener('click', () => { rotateSlide('right'); });

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
        const info = {
            'type': type,
        };

        fetch('./modules/getSlideMission.php', {
            method: 'post',
            body: JSON.stringify(),
        }).then(respon => respon.json(info))
        .then(result => {
            
        });
    }

    function getMission(){

        fetch('./modules/getMission.php')
        .then(respon => respon.text())
        .then(data => {
            console.log(data);
            const total = data.length;
            const block = Math.ceil(total / 7);
            const arr = [];
            let newDiv;
            let newMission;
            
            for(let n=0, i=0; i < block; i++){
                const blockArr = [];
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
                        let newThum = data[n]['ms_expain_pic'] != '' ? data[n]['ms_expain_pic'].split(',') : 'common.png';
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
                arr.push(blockArr);
            }

            const missionsActive = document.querySelectorAll('.missions__list');
    
            missionsActive.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('active');
                },(index * 100));
            });
        });
    }

    function removeChild(dom){
        while(dom.hasChildNodes()){
            dom.removeChild(dom.firstChild);
        }
    }
}