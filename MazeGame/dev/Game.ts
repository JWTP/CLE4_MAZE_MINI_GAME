class Game{

    p: Player;

    constructor(){
        this.p = new Player('w','s','a','d');


        requestAnimationFrame(() => this.gameLoop());
    }

    gameLoop(){
        requestAnimationFrame(() => this.gameLoop());
        this.p.move();
    }
}