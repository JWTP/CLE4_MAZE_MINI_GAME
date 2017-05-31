class Canvas {

    constructor(){

        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var canvasWidth = window.innerWidth;
        var canvasHeight = window.innerHeight;
        var img = new Image();
        img.src = './images/level1.png'
        img.onload = function(){
            ctx.drawImage(img,300,150,1220,780);
        }

    }
}