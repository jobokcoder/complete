import {zoomController} from './zoom-controller.js';

class App{
    constructor(){
        console.log("%cComplete", "color: rgb(255, 255, 255); font-size: 42px");

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        this.zoomController = new zoomController();
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
    }
}

window.onload = () => {
    new App();
}
