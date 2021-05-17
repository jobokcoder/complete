{
    class App{
        constructor(){
            this.x = 0;
            this.y = 0;
            this.prvDom;
            this.mapFlag = false;
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

            this.areas.forEach((el) => {
                el.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.areaZoom(el);
                }, false);
            });

            this.backToWorldBtn.addEventListener('click', () => {this.resetZoom();}, false); 
            window.addEventListener('resize', () => {this.resize();}, false);

            window.addEventListener('wheel', (e) => {   
                this.wheelZoom(e);
            }, false);
        }

        wheelZoom(e){
            if(this.mapFlag === true){
                if(e.wheelDelta > 0){
                    this.map.style['zoom'] = '300%';
                }else{
                    this.map.style['zoom'] = '200%';
                }
            }
        }

        resetZoom(){
            this.mapFlag = false;
            this.map.style.zoom = '100%';
            this.map.style.left = `0px`;
            this.map.style.top = `0px`;
        }
        
        areaZoom(dom){
            if(this.mapFlag === false){
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
    
                this.map.style.zoom = '200%';
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

            if((this.appWidth * this.scale) > 500){
                this.svg.style['transform'] = `scale(1)`;
            }else{
                this.svg.style['transform'] = `scale(0.8)`;
            }
        }
    }
    
    window.onload = () => {
        new App();
    }
}