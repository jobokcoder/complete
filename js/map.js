{
    class App{
        constructor(){
            this.x = 0;
            this.y = 0;
            this.mouseX = 0;
            this.mouseY = 0;
            this.moveX = 0;
            this.moveY = 0;
            this.speed = 0.03;
            this.dragFlag = false;
            this.map = document.querySelector('.map');
            this.style = window.getComputedStyle(this.map);
            this.matrix = this.style.transform || this.style.webkitTransform || this.style.mozTransform;
            this.matrixType = this.matrix.includes('3d') ? '3d' : '2d';
            this.matrixValues = this.matrix.match(/matrix.*\((.+)\)/)[1].split(', ');

            this.statusX = Number(this.matrixValues[4]);
            this.statusY = Number(this.matrixValues[5]);

            window.addEventListener('mousedown', (e) => {
                e.preventDefault();
                this.dragFlag = true;
                this.x = e.clientX;
                this.y = e.clientY;
            },false);

            window.addEventListener('mouseup', (e) => {
                e.preventDefault();
                this.dragFlag = false;
                this.x = 0;
                this.y = 0;
                this.mouseX = 0;
                this.mouseY = 0;
                this.moveX = 0;
                this.moveY = 0;
            },false);
    
            window.addEventListener('mousemove', (e) => {
                e.preventDefault();
                if(this.dragFlag){
                    this.mouseMove(e);
                }
            }, false);

            window.addEventListener('wheel', (e) => {
                this.zoom(e);
            });

            requestAnimationFrame(this.mapMove.bind(this));
        }

        zoom(e){
            if(e.deltaY > 0){
                console.log('nozoom');
            }else{
                console.log('zoom');
            }
        }

        mouseMove(event){
            this.mouseX = event.clientX;
            this.mouseY = event.clientY;
            this.moveX = this.x - this.mouseX;
            this.moveY = this.y - this.mouseY;
            console.log(this.mouseX, this.mouseY);
        }

        mapMove(){
            
            if(this.dragFlag){
                this.statusX += (this.moveX - this.statusX) * this.speed;
                this.statusY += (this.moveY - this.statusY) * this.speed;
            }
            this.map.style.transform = "translate(" + this.statusX + "px, " + this.statusY + "px)";
            requestAnimationFrame(this.mapMove.bind(this));
        }
    }
    
    window.onload = () => {
        new App();
    }
}