
    class App{
        constructor(){
            this.x = 0;
            this.y = 0;
            this.moveX = document.body.clientWidth / 2;
            this.moveY = document.body.clientHeight / 2;
            this.speed = 0.03;
            this.prvDom;
            this.mapFlag = false;
            this.canvas = document.querySelector('.canvas');
            this.ctx = this.canvas.getContext('2d');
            this.wrapper = document.querySelector('.wrapper');
            this.mission = document.querySelector('.mission');
            this.backToWorldBtn = document.querySelector('.back');
            this.map = document.querySelector('.map');
            this.svg = document.querySelector('.svg');
            this.areas = document.querySelectorAll('.area');
            this.mapStyle = window.getComputedStyle(this.map);
            this.matrix = this.mapStyle.transform || this.mapStyle.webkitTransform || this.mapStyle.mozTransform;
            this.matrixType = this.matrix.includes('3d') ? '3d' : '2d';
            this.matrixValues = this.matrix.match(/matrix.*\((.+)\)/)[1].split(', ');
            this.statusX = Number(this.matrixValues[4]);
            this.statusY = Number(this.matrixValues[5]);

            this.mission.remove();
            this.areas.forEach((el) => {
                el.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.areaZoom(el);
                }, false);
            });
            this.resize();
            this.backToWorldBtn.addEventListener('click', () => { this.resetZoom(); }, false); 
            window.addEventListener('resize', () => { this.resize(); }, false);
            window.addEventListener('wheel', (e) => { this.wheelZoom(e); }, false);
        }

        
        getMission(name){
            this.prvItem = [];
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
                        this.newMission = this.mission.cloneNode(true);
                        this.newMissionTitle = this.newMission.querySelector('.mission__title');
                        this.newMissionWriter = this.newMission.querySelector('.mission__writer');
                        this.newMissionDeadLine = this.newMission.querySelector('.mission__deadline');
    
                        this.newMissionTitle.textContent = item['ms_title'];
                        this.newMissionWriter.textContent = item['ms_writer'];
                        this.newMissionDeadLine.textContent = item['ms_date_end'];

                        this.wrapper.appendChild(this.newMission);

                        if(index === 0){
                            this.mapCenterX = document.body.clientWidth / 2 - this.newMission.clientWidth;
                            this.mapCenterY = document.body.clientHeight / 2 - this.newMission.clientHeight;

                            this.mapRandomCenterX = Math.ceil(Math.random() * (this.mapCenterX - 100));
                            this.mapRandomCenterY = Math.ceil(Math.random() * this.mapCenterY);
                        }else if(index === 1){
                            this.mapCenterX = document.body.clientWidth / 2 - this.newMission.clientWidth;
                            this.mapCenterY = document.body.clientHeight / 2 - this.newMission.clientHeight;

                            this.mapRandomCenterX = Math.ceil((Math.random() * this.mapCenterX) + (document.body.clientWidth / 2));
                            this.mapRandomCenterY = Math.ceil((Math.random() * (this.mapCenterY - 100)));
                        }else if(index === 2){
                            this.mapCenterX = document.body.clientWidth / 2 - this.newMission.clientWidth;
                            this.mapCenterY = document.body.clientHeight / 2 - this.newMission.clientHeight;

                            this.mapRandomCenterX = Math.ceil((Math.random() * (this.mapCenterX - 100)));
                            this.mapRandomCenterY = Math.ceil((Math.random() * this.mapCenterY) + (document.body.clientHeight / 2));
                        }else if(index === 3){
                            this.mapCenterX = document.body.clientWidth / 2 - this.newMission.clientWidth;
                            this.mapCenterY = document.body.clientHeight / 2 - this.newMission.clientHeight;

                            this.mapRandomCenterX = Math.ceil((Math.random() * this.mapCenterX) + (document.body.clientWidth / 2));
                            this.mapRandomCenterY = Math.ceil((Math.random() * (this.mapCenterY - 100)) + (document.body.clientHeight / 2));
                        }

                        this.x = Math.ceil(this.mapRandomCenterX + (this.newMission.clientWidth / 2));
                        this.y = Math.ceil(this.mapRandomCenterY + (this.newMission.clientHeight / 2));

                        this.createLine(this.moveX, this.moveY);

                        this.prvItem.push(this.newMission);
                        this.newMission.style.left = `${this.mapRandomCenterX}px`;
                        this.newMission.style.top = `${this.mapRandomCenterY}px`;
                    });
                }
            });
        }

        createLine(x, y){
            setInterval(() => {
                this.ctx.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
                this.ctx.lineWidth = 10;
                this.ctx.lineCap = 'round';
                this.ctx.beginPath();
                this.ctx.moveTo(this.moveX, this.moveY);
                this.ctx.lineTo(this.moveX + (x - this.moveX) * this.speed, this.moveY + (y - this.moveY) * this.speed);
                this.ctx.stroke();
            }, 30);
        }


        // 겹침 감지 함수 사용 예
        // this.collisionFlag = this.isCollision(this.prvItem, this.newMission, this.mapRandomCenterX, this.mapRandomCenterY);  
        
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

        //             ((document.body.clientWidth / 2) - 200) < (next_x + next.clientWidth) &&
        //             ((document.body.clientWidth / 2) - 200 + 400) > next_x
        //         );
        //     });
            
        //     return this.flagArr.every((flag) => {
        //         return flag === true ? false : true;
        //     });
        // }

        wheelZoom(e){
        }

        resetZoom(){
            this.missions = document.querySelectorAll('.mission');
            this.missions.forEach((el) => {
                el.remove();
            });
            this.areas.forEach((el) => {
                el.style.transition = '600ms';
                el.style.opacity = 1;
                el.style.transition = '0';
            });
            this.mapFlag = false;
            this.map.style.zoom = '100%';
            this.map.style.left = `0px`;
            this.map.style.top = `0px`;
        }
        
        areaZoom(dom){
            if(this.mapFlag === false){
                this.getMission(dom.id);
                this.areas.forEach((el) => {
                    if(el !== dom){
                        el.style.transition = '600ms';
                        el.style.opacity = 0;
                        el.style.transition = '0';
                    }
                });

                this.mapFlag = true;
                this.map.style.left = `0px`;
                this.map.style.top = `0px`;
                this.mapCenterX = this.map.clientWidth / 2;
                this.mapCenterY = this.map.clientHeight / 2;

                this.domRect = dom.getBoundingClientRect();
                this.domRectCenterX = this.domRect['x'] + this.domRect['width'] / 2;
                this.domRectCenterY = this.domRect['y'] + this.domRect['height'] / 2;
    
                this.mapMoveToX = this.mapCenterX - this.domRectCenterX;
                this.mapMoveToY = this.mapCenterY - this.domRectCenterY;
    
                this.map.style.zoom = '250%';
                this.map.style.transition = '600ms';
                this.map.style.left = `${this.mapMoveToX}px`;
                this.map.style.top = `${this.mapMoveToY}px`;
                this.map.style.transition = '0';

                this.prvDom = dom;
            }
        }

        resize(){
            this.appWidth = document.body.clientWidth;
            this.appHeight = document.body.clientHeight;
            this.scale = window.devicePixelRatio;

            this.map.style['width'] = this.appWidth * this.scale;
            this.map.style['height'] = this.appHeight * this.scale;

            this.canvas.width = this.appWidth * (this.scale * 2);
            this.canvas.height = this.appHeight * (this.scale * 2);

        }
    }

    window.onload = () => {
        new App();
    }
