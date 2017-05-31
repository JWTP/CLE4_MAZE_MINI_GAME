class Finish{


    private div: HTMLElement

    public posX : number;
    public posY : number;


    constructor(){
        this.div = document.createElement('finish');
        document.body.appendChild(this.div);
        this.posX = 300 ;
        this.posY = 150;
    }

    move(){
        this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";
    }
}