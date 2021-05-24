export class missionController{
    constructor(id){
        this.id = id;
        this.app = document.querySelector('.app');
        this.locationArr = [];
        this.centerDom;
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
        this.zoomFlag = false;
        
        window.addEventListener('resize', () => { this.resize(); });
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
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

    isCollision(num1, num2){
        return  num1.x < num2.x + 200 && 
                num1.x + 200  > num2.x &&
                num1.y < num2.y + 300 && 
                num1.y + 300 > num2.y;
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

    missionCollisionLoop(){
        const missions = document.querySelectorAll('.mission');
        const prvMissions = this.prvDom;

        for(let i = 0; i < prvMissions.length; i++){
            for(let j = 0; j < missions.length; j++){
                if(missions[j] !== prvMissions[i]){
                    let flag = this.isCollision(missions[j], prvMissions[i]);
                    if(flag === true){
                        let rndLocationInfo = this.getRandomLocation();
                        missions[j].style.left = `${rndLocationInfo['x']}px`;
                        missions[j].style.top = `${rndLocationInfo['y']}px`;
                    }
                }
            }
        }
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

    getRandomArray(count) {
        const rst = [];

        while(true){
            let newLocation = this.getRandomLocation();
     
            if(rst.length > 0){
                if(this.isCollision(newLocation, rst[rst.length-1])){
                    continue;
                }
            }

            rst.push(newLocation);
     
            if (rst.length == count) {
                break;
            }
        }

        return rst;
    }

    createDom(data){
        const newMission = document.createElement('div');
        newMission.style.left = '-1000px';
        newMission.style.top = '-1000px';
        newMission.style.width = '200px';
        newMission.style.height = '300px';
        newMission.style.background = '#000';

        newMission.textContent = data['ms_title'];
        newMission.classList.add('mission');

        newMission.addEventListener('mousemove', (e) => { this.isNear(newMission, e) });
        newMission.addEventListener('mouseleave', () => { 
            newMission.style.transform = 'none';
        });
        this.app.appendChild(newMission);
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
                data.forEach((item) => {
                    this.createDom(item);
                });
            }
        }).then(() => {
            const mission = document.querySelectorAll('.mission');
            const arr = this.getRandomArray(mission.length);
            console.log(arr);

            mission.forEach((el, index) => {
                el.style.left = `${arr[index]['x']}px`;
                el.style.top = `${arr[index]['y']}px`;
            });
        });
    }
}