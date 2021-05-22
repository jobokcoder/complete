export class missionController{
    constructor(){
        this.app = document.querySelector('.app');
        this.prvDom = [];
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
    }

    removeMission(){
        const missions = document.querySelectorAll('.mission');
        missions.forEach((el) => {
            el.remove();
        });
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

        let centerX = (this.stageWidth / 2) - 150;
        let centerY = (this.stageHeight / 2) - 150;

        let centerWidth = 500;
        let centerHeight = 500;

        return dom1_Rect.left < centerX + centerWidth && 
        dom1_Rect.left + dom1_Rect.width  > centerX &&
        dom1_Rect.top < centerY + centerHeight && 
        dom1_Rect.top + dom1_Rect.height > centerY;
    }

    getRandomLocation(mission){
        const locationInfo = {};
        let maxLocationX = this.stageWidth - Number(mission.style.width.replace('px', ''));
        let maxLocationY = this.stageHeight - Number(mission.style.height.replace('px', ''));

        let rndLocationX = Math.floor(Math.random() * maxLocationX);
        let rndLocationY = Math.floor(Math.random() * maxLocationY);

        locationInfo['x'] = rndLocationX;
        locationInfo['y'] = rndLocationY;

        return locationInfo;
    }

    getMission(name){
        this.info = {
            'name': name,
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

                    if(index !== 0){
                        this.prvDom.forEach((mission) => {
                            let flag = this.isCollision(newMission, mission);
                            while(flag !== false){
                                let rndLocationInfo = this.getRandomLocation(newMission);
                                newMission.style.left = `${rndLocationInfo['x']}px`;
                                newMission.style.top = `${rndLocationInfo['y']}px`;
                                newMission.textContent = item['ms_title'];
                                flag = this.isCollision(newMission, mission);
                            }
                        });

                        let flag = this.isCenterCollision(newMission);
                        while(flag !== false){
                            let rndLocationInfo = this.getRandomLocation(newMission);
                            newMission.style.left = `${rndLocationInfo['x']}px`;
                            newMission.style.top = `${rndLocationInfo['y']}px`;
                            newMission.textContent = item['ms_title'];
                            flag = this.isCenterCollision(newMission);
                        }
                    }

                    this.prvDom.push(newMission);
                });
            }
        });
    }
}

// if(index === 0){
//     this.mapCenterX = document.body.clientWidth / 2 - this.newMission.clientWidth;
//     this.mapCenterY = document.body.clientHeight / 2 - this.newMission.clientHeight;

//     this.mapRandomCenterX = Math.ceil(Math.random() * (this.mapCenterX - 100));
//     this.mapRandomCenterY = Math.ceil(Math.random() * this.mapCenterY);
// }else if(index === 1){
//     this.mapCenterX = document.body.clientWidth / 2 - this.newMission.clientWidth;
//     this.mapCenterY = document.body.clientHeight / 2 - this.newMission.clientHeight;

//     this.mapRandomCenterX = Math.ceil((Math.random() * this.mapCenterX) + (document.body.clientWidth / 2));
//     this.mapRandomCenterY = Math.ceil((Math.random() * (this.mapCenterY - 100)));
// }else if(index === 2){
//     this.mapCenterX = document.body.clientWidth / 2 - this.newMission.clientWidth;
//     this.mapCenterY = document.body.clientHeight / 2 - this.newMission.clientHeight;

//     this.mapRandomCenterX = Math.ceil((Math.random() * (this.mapCenterX - 100)));
//     this.mapRandomCenterY = Math.ceil((Math.random() * this.mapCenterY) + (document.body.clientHeight / 2));
// }else if(index === 3){
//     this.mapCenterX = document.body.clientWidth / 2 - this.newMission.clientWidth;
//     this.mapCenterY = document.body.clientHeight / 2 - this.newMission.clientHeight;

//     this.mapRandomCenterX = Math.ceil((Math.random() * this.mapCenterX) + (document.body.clientWidth / 2));
//     this.mapRandomCenterY = Math.ceil((Math.random() * (this.mapCenterY - 100)) + (document.body.clientHeight / 2));
// }

// this.createLine(this.centerX, this.centerY, (this.mapRandomCenterX + (this.newMission.clientWidth / 2)), (this.mapRandomCenterY + (this.newMission.clientHeight / 2)));

// this.x = Math.ceil(this.mapRandomCenterX + (this.newMission.clientWidth / 2));
// this.y = Math.ceil(this.mapRandomCenterY + (this.newMission.clientHeight / 2));


// this.prvItem.push(this.newMission);
// this.newMission.style.left = `${this.mapRandomCenterX}px`;
// this.newMission.style.top = `${this.mapRandomCenterY}px`;

// createLine(moveX, moveY, posX, posY){
//     setInterval(() => {
//         moveX = moveX + (posX - moveX) * this.speed;
//         moveY = moveY + (posY - moveY) * this.speed;
//         this.ctx.lineWidth = 2;
//         this.ctx.lineCap = 'round';
//         this.ctx.beginPath();
//         this.ctx.moveTo(this.centerX, this.centerY);
//         this.ctx.lineTo(moveX, moveY);
//         this.ctx.stroke();
//     }, 15);
// }
//
// 겹침 감지 함수 사용 예
// this.collisionFlag = this.isCollision(this.prvItem, this.newMission, this.mapRandomCenterX, this.mapRandomCenterY);  
//
// 겹침 감지 함수
// isCollision(prv, next, next_x, next_y){
//     this.flagArr = [];
//     prv.forEach((item) => {
//         this.prvItemRect = item.getBoundingClientRect();
//         this.flagArr.push(
//             this.prvItemRect['x'] < (next_x + next.clientWidth) &&
//             (this.prvItemRect['x'] + this.prvItemRect['width']) > next_x &&
//             this.prvItemRect['y'] < (next_y + next.clientHeight) &&
//             (this.prvItemRect['y'] + this.prvItemRect['height']) > next_y ||
//
//             ((document.body.clientWidth / 2) - 200) < (next_x + next.clientWidth) &&
//             ((document.body.clientWidth / 2) - 200 + 400) > next_x
//         );
//     });
//
//     return this.flagArr.every((flag) => {
//         return flag === true ? false : true;
//     });
// }