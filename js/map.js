
    class App{
        constructor(){
            this.canvas = document.createElement('canvas');
            document.body.appendChild(this.canvas);
            this.ctx = this.canvas.getContext('2d');

            this.x = 0;
            this.y = 0;
            this.speed = 0.03;

            this.prvDom;
            this.mapFlag = false;
            this.wrapper = document.querySelector('.wrapper');
            this.backToWorldBtn = document.querySelector('.back');
            this.areas = document.querySelectorAll('.area');
            
            this.map = document.querySelector('.map');
            this.mapStyle = window.getComputedStyle(this.map);
            this.matrix = this.mapStyle.transform || this.mapStyle.webkitTransform || this.mapStyle.mozTransform;
            this.matrixType = this.matrix.includes('3d') ? '3d' : '2d';
            this.matrixValues = this.matrix.match(/matrix.*\((.+)\)/)[1].split(', ');

            this.resize();
            this.backToWorldBtn.addEventListener('click', () => { this.resetZoom(); }, false); 
            this.areas.forEach((el) => {
                el.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.areaZoom(el);
                }, false);
            });
            window.addEventListener('resize', () => { this.resize(); }, false);
        }

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
            this.stageWidth = document.body.clientWidth;
            this.stageHeight = document.body.clientHeight;
            this.scale = window.devicePixelRatio;

            this.map.style['width'] = this.stageWidth * this.scale;
            this.map.style['height'] = this.stageHeight * this.scale;

            this.canvas.width = this.stageWidth * 2;
            this.canvas.height = this.stageHeight * 2;
            this.ctx.scale(2,2);
        }
    }

    window.onload = () => {
        new App();
    }
