export class mission{
    constructor(name){
        this.name = name;
    }

    getMission(){
        this.info = {
            'name': this.name,
        };

        fetch('../modules/getAreaMission.php', {
            method: 'POST',
            body: JSON.stringify(this.info),
        }).then((respon) => respon.json())
        .then((data) => {
            if(data.length !== 0){
                data.forEach((item, index) => {

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
                });
            }
        });
    }
}