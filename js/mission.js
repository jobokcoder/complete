export class mission{
    constructor(name){
        this.mission = document.querySelector('.mission');
        this.name = name;
        this.getMission(this.name);
    }

}
