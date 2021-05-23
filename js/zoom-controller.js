import {missionController} from './mission-controller.js';

export class zoomController{
    constructor(){
        this.map = document.querySelector('.map');
        this.areas = document.querySelectorAll('.area');
        this.backToWorldBtn = document.querySelector('.back');
        this.mapStyle = window.getComputedStyle(this.map);
        this.matrix = this.mapStyle.transform || this.mapStyle.webkitTransform || this.mapStyle.mozTransform;
        this.matrixType = this.matrix.includes('3d') ? '3d' : '2d';
        this.matrixValues = this.matrix.match(/matrix.*\((.+)\)/)[1].split(', ');

        this.prvDom;
        this.mapFlag = false;

        this.backToWorldBtn.addEventListener('click', () => { this.resetZoom(); }, false); 
        this.areas.forEach((el) => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                this.areaZoom(el);
            }, false);
        });

        this.missionController = new missionController();
    }
    
    resetZoom(){
        this.missionController.removeMission();
        this.areas.forEach((el) => {
            el.style.transition = '600ms';
            el.style.opacity = 1;
            el.style.transition = 0;
        });
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

            this.map.style.zoom = '250%';
            this.map.style.transition = '600ms';
            this.map.style.left = `${this.mapMoveToX}px`;
            this.map.style.top = `${this.mapMoveToY}px`;
            this.map.style.transition = '0';
            this.prvDom = dom;
            
            this.areas.forEach((el) => {
                if(dom !== el){
                    el.style.transition = '600ms';
                    el.style.opacity = 0;
                    el.style.transition = 0;
                }
            });

            this.missionController.id = dom.id;
            this.missionController.getMission();
        }
    }

    resize(stageWidth, stageHeight){
        this.map.style['width'] = stageWidth;
        this.map.style['height'] = stageHeight;
    }
}