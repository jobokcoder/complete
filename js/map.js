import {zoomController} from './zoom-controller.js';

class App{
    constructor(){
        console.log("%cComplete", "color: rgb(255, 255, 255); font-size: 42px");

        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        this.zoomController = new zoomController();
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
        this.scale = window.devicePixelRatio;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2,2);
    }
}

window.onload = () => {
    new App();
}
