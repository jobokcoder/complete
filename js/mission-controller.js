export class missionController{
    constructor(id){
        this.id = id;
        this.app = document.querySelector('.app');
        this.prvDom = [];
        this.centerDom;
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
        this.zoomFlag = false;
        
        window.addEventListener('resize', () => { this.resize(); });
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
        if(this.zoomFlag === true){
            this.getMission();
        }
    }

    removeMission(){
        const missions = document.querySelectorAll('.mission');
        missions.forEach((el) => {
            el.remove();
        });
        this.zoomFlag = false;
    }

    isNear(dom, event){
        const domRect = dom.getBoundingClientRect();
        const eventX = event.pageX;
        const eventY = event.pageY;
        let moveX = domRect.x + (domRect.width / 2);
        let moveY = domRect.y + (domRect.height / 2);

        moveX = (eventX - moveX);
        moveY = (eventY - moveY);
        
        dom.style.transform = `translate(${(moveX/4)}px, ${(moveY/4)}px)`;
    }

    isCollision(dom1, dom2){
        const dom1_Rect = dom1.getBoundingClientRect();
        const dom2_Rect = dom2.getBoundingClientRect();

        return dom1_Rect.left < dom2_Rect.left + dom2_Rect.width && 
        dom1_Rect.left + dom1_Rect.width  > dom2_Rect.left &&
		dom1_Rect.top < dom2_Rect.top + dom2_Rect.height && 
        dom1_Rect.top + dom1_Rect.height > dom2_Rect.top;
    }

    isCenterCollision(dom1){
        const dom1_Rect = dom1.getBoundingClientRect();
        const centerDom_Rect = this.centerDom.getBoundingClientRect();

        const centerX = (this.stageWidth / 2) - (centerDom_Rect.width);
        const centerY = (this.stageHeight / 2) - (centerDom_Rect.height);

        const centerWidth = centerDom_Rect.width * 2;
        const centerHeight = centerDom_Rect.height * 2;

        return dom1_Rect.left < centerX + centerWidth && 
        dom1_Rect.left + dom1_Rect.width  > centerX &&
        dom1_Rect.top < centerY + centerHeight && 
        dom1_Rect.top + dom1_Rect.height > centerY;
    }

    missionLocationLoop(comMission){
        this.prvDom.forEach((ms) => {
            let flag1 = this.isCollision(comMission, ms);
            let flag2 = this.isCenterCollision(comMission);
            if(flag1 === true || flag2 === true){
                let rndLocationInfo = this.getRandomLocation(comMission);
                comMission.style.left = `${rndLocationInfo['x']}px`;
                comMission.style.top = `${rndLocationInfo['y']}px`;
            }
        });
    }

    getRandomLocation(){
        const locationInfo = {};
        let maxLocationX = this.stageWidth - 300;
        let maxLocationY = this.stageHeight - 300;

        let rndLocationX = Math.floor(Math.random() * maxLocationX);
        let rndLocationY = Math.floor(Math.random() * maxLocationY);

        locationInfo['x'] = rndLocationX;
        locationInfo['y'] = rndLocationY;

        return locationInfo;
    }

    getMission(){
        this.zoomFlag = true;
        this.info = {
            'name': this.id,
        };

        fetch('../modules/getAreaMission.php', {
            method: 'POST',
            body: JSON.stringify(this.info),
        }).then((respon) => respon.json())
        .then((data) => {
            if(data.length !== 0){
                data.forEach((item, index) => {
                    const newMission = document.createElement('div');
                    newMission.classList.add('mission');
                    newMission.style.width = '200px';
                    newMission.style.height = '300px';
                    newMission.style.background = '#000';

                    let rndLocationInfo = this.getRandomLocation(newMission);
                    newMission.style.left = `${rndLocationInfo['x']}px`;
                    newMission.style.top = `${rndLocationInfo['y']}px`;
                    newMission.textContent = item['ms_title'];

                    this.app.appendChild(newMission);
                    this.centerDom = document.querySelector(`#${this.id}`);

                    if(index !== 0){
                        this.prvDom.forEach((ms) => {
                            let flag1 = this.isCollision(newMission, ms);
                            let flag2 = this.isCenterCollision(newMission);
                            if(flag1 === true || flag2 === true){
                                this.missionLocationLoop(newMission);
                            }
                        });
                    }
                    this.prvDom.push(newMission);

                    newMission.addEventListener('mousemove', (e) => { this.isNear(newMission, e) });
                    newMission.addEventListener('mouseleave', () => { 
                        newMission.style.transform = 'none';
                    });
                });
            }
        });
    }

}