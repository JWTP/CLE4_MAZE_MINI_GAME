var Game = (function () {
    function Game() {
        var _this = this;
        this.p = new Player('w', 's', 'a', 'd');
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.gameLoop(); });
        this.p.move();
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Player = (function () {
    function Player(upKey, downKey, leftKey, rightKey) {
        var _this = this;
        this.posX = 0;
        this.posY = 0;
        this.speedX = 5;
        this.speedY = 0;
        this.upKey = upKey;
        this.downKey = downKey;
        this.leftKey = leftKey;
        this.rightKey = rightKey;
        this.ball = document.createElement("ball");
        document.body.appendChild(this.ball);
        this.posX = 0;
        this.posY = 610;
        console.log(this.posX, this.posY);
        window.addEventListener("keydonw", function (event) { return _this.onKeyDown(event); });
    }
    Player.prototype.move = function () {
        this.ball.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    };
    Player.prototype.onKeyDown = function (event) {
        if (event.key == this.upKey) {
            this.speedX = 0;
            this.speedY = -5;
            console.log(event.key);
        }
        if (event.key == this.downKey) {
            this.speedX = 0;
            this.speedY = 5;
            console.log(event.key);
        }
        if (event.key == this.leftKey) {
            this.speedX = -5;
            this.speedY = 0;
            console.log(event.key);
        }
        if (event.key == this.rightKey) {
            this.speedX = 5;
            this.speedY = 0;
            console.log(event.key);
        }
    };
    return Player;
}());
//# sourceMappingURL=main.js.map