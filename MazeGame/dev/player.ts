class Player {

private ball: HTMLElement;
private posX : number = 0;
private posY : number = 0;
private speedX : number = 5;
private speedY : number = 0;
private upKey : string
private downKey : string
private leftKey : string
private rightKey : string

    constructor(upKey: string, downKey: string, leftKey: string, rightKey: string ){
        
        this.upKey = upKey;
        this.downKey = downKey;
        this.leftKey = leftKey;
        this.rightKey = rightKey;

        this.ball = document.createElement("ball");
        document.body.appendChild(this.ball);

        this.posX = 0;
        this.posY = 610;

        console.log(this.posX, this.posY)

        window.addEventListener("keydonw",(event : KeyboardEvent) => this.onKeyDown(event));

    }
    

    move(){

        // this.posX = this.speedX;
        // this.posY = this.speedY;

        this.ball.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";
    
    }

    onKeyDown(event: KeyboardEvent){
        if(event.key == this.upKey){
            this.speedX = 0;
            this.speedY = -5;
            console.log(event.key)
        }
        if(event.key == this.downKey){
            this.speedX = 0;
            this.speedY = 5;
            console.log(event.key)
        }
        if(event.key == this.leftKey){
            this.speedX = -5;
            this.speedY = 0;
            console.log(event.key)
        }
        if(event.key == this.rightKey){
            this.speedX = 5;
            this.speedY = 0;
            console.log(event.key)
        }
    }

    
}