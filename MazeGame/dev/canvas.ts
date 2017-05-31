class Canvas {

    constructor(){

        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var canvasWidth = 600;
        var canvasHeight = 400;
        var img = new Image();
        img.src = './images/level1.png'
        img.onload = function(){
            ctx.drawImage(img,0,0,canvasWidth,canvasHeight);
        }

    }
}