export class missionController{
    constructor(id){
        this.id = id;
        this.app = document.querySelector('.app');
        this.locationArr = [];
        this.centerDom;
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
        this.zoomFlag = false;

        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();
    }

    resize(){
        const missions = document.querySelectorAll('.mission');
        if(missions.length > 0){
            missions.forEach((el, index) => {
                el.style.left = `${(el.offsetLeft / this.stageWidth * 100)}%`;
                el.style.top = `${(el.offsetTop / this.stageHeight * 100)}%`;
                if(this.locationArr[index]['dom'] === el){
                    this.locationArr[index]['x'] = el.offsetLeft;
                    this.locationArr[index]['y'] = el.offsetTop;
                }
            });
        }

        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
        this.scale = window.devicePixelRatio;

        this.canvas.width = this.stageWidth;
        this.canvas.height = this.stageHeight;
        this.ctx.scale(1,1);
    }

    removeMission(){
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        const missions = document.querySelectorAll('.mission');
        missions.forEach((el) => {
            el.remove();
        });
        this.zoomFlag = false;
    }

    isNear(el, event){
        const domRect = el.getBoundingClientRect();
        const eventX = event.pageX;
        const eventY = event.pageY;
        let moveX = domRect.x + (domRect.width / 2);
        let moveY = domRect.y + (domRect.height / 2);

        moveX = Math.floor(eventX - moveX);
        moveY = Math.floor(eventY - moveY);
        
        el.style.transform = `translate(${Math.floor(moveX/4)}px, ${Math.floor(moveY/4)}px)`;

        this.locationArr.findIndex((item) => {
            if(item.dom == el){
                item.x = Math.floor(Number(el.style.left.replace('px', '')) + (moveX/4));
                item.y = Math.floor(Number(el.style.top.replace('px', '')) + (moveY/4));
            }
        });

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

    getRandomArray(count) {
        const rst = [];
        let cnt = 0;

        while(true){ 
            let newLocation = {};

            if(cnt == 0){
                newLocation['x'] = Math.floor(Math.random() * ((this.stageWidth / 2) - 200));
                newLocation['y'] = Math.floor(Math.random() * ((this.stageHeight / 2) - 300) + 90);
            }else if(cnt == 1){
                newLocation['x'] = Math.floor(Math.random() * ((this.stageWidth / 2) - 200)) + (this.stageWidth / 2);
                newLocation['y'] = Math.floor(Math.random() * ((this.stageHeight / 2) - 300) + 90);
            }else if(cnt == 2){
                newLocation['x'] = Math.floor(Math.random() * ((this.stageWidth / 2) - 200));
                newLocation['y'] = Math.floor(Math.random() * ((this.stageHeight / 2) - 300)) + (this.stageHeight / 2);
            }else if(cnt == 3){
                newLocation['x'] = Math.floor(Math.random() * ((this.stageWidth / 2) - 200)) + (this.stageWidth / 2);
                newLocation['y'] = Math.floor(Math.random() * ((this.stageHeight / 2) - 300)) + (this.stageHeight / 2);
            }

            const mission = document.querySelectorAll('.mission');
            newLocation['dom'] = mission[cnt];
            rst.push(newLocation);
     
            if (rst.length == count) {
                break;
            }
            cnt++;
        }
        
        return rst;
    }

    createDom(data){
        const tags = data['ms_tag'].split(',');
        const newThum = data['ms_expain_pic'] != undefined ? data['ms_expain_pic'].split(',') : 'common.png';
        const newImgSrc = newThum[0] !== '' ? `./upload/${newThum[0]}` : '/upload/common.png';

        const newMission = document.createElement('div');
        const newMissionFrame = document.createElement('div');
        const newMissionHash = document.createElement('div');
        const newMissionImg = document.createElement('img');
        const newMissionTitle = document.createElement('h1'); 
        const newMissionWriter = document.createElement('p');

        newMission.style.left = '-1000px';
        newMission.style.top = '-1000px';
        newMission.style.width = '276px';
        newMission.style.height = '314px';
        newMission.classList.add('mission');

        newMissionImg.src = newImgSrc;
        newMissionTitle.textContent = data['ms_title'];
        newMissionWriter.textContent = `의뢰자 : ${data['ms_writer']}`;

        tags.forEach((hash) => {
            const newMissionHashText = document.createElement('p');
            newMissionHashText.textContent = hash;
            newMissionHash.appendChild(newMissionHashText);
        });

        newMission.appendChild(newMissionImg);
        newMission.appendChild(newMissionFrame);

        newMissionFrame.appendChild(newMissionTitle);
        newMissionFrame.appendChild(newMissionHash);
        newMissionFrame.appendChild(newMissionWriter);


        newMission.addEventListener('mousemove', (e) => { this.isNear(newMission, e) });
        newMission.addEventListener('mouseleave', () => { 
            newMission.style.transform = 'none';
        });
        this.app.appendChild(newMission);
    }

    drawLine(){
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        this.locationArr.forEach((move) => {
            this.centerX = (this.stageWidth / 2);
            this.centerY = (this.stageHeight / 2);
    
            this.ctx.beginPath(); 
            this.ctx.moveTo(this.centerX, this.centerY); 
            this.ctx.lineTo(move.x + 100, move.y + 150);
            this.ctx.lineWidth = 2;
            this.ctx.strokeStyle = '#3A3A3C';
            this.ctx.stroke();  
        });
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
            if(mission.length > 0){
                this.locationArr = this.getRandomArray(mission.length);
    
                mission.forEach((el, index) => {
                    el.style.left = `${this.locationArr[index]['x']}px`;
                    el.style.top = `${this.locationArr[index]['y']}px`;
                });
                
                setTimeout(() => {
                    mission.forEach((el, index) => {
                        setTimeout(() => {
                            el.style.opacity = 1;
                        }, (index+1) * 200);
                    })
                        
                    setTimeout(() => {
                        this.canvas.style.transition = '600ms';
                        this.canvas.style.opacity = 1;
                    },1000);
                }, 600);
            }
        });
    }
}