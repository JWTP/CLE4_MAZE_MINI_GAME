class Game{

    p: Player;

    constructor(){
        this.p = new Player();
    }

    gameLoop(){
        this.p.move();
        requestAnimationFrame(this.gameLoop.bind(this));
    }
}