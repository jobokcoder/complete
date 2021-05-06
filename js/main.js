{
    const loading = document.querySelector('.loading');
    const missionsList = document.querySelector('.missions__list');
    const missions = document.querySelector('.missions');
    const missionsWrapper = document.querySelector('.missions__wrapper');

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

    window.addEventListener('load', () => {

        removeChild(missionsWrapper);
        // getMission();

    });
}