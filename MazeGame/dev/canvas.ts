class Canvas {

    constructor(){

        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var canvasWidth = window.innerWidth;
        var canvasHeight = window.innerHeight;
        var img = new Image();
        img.src = './images/level2.png'
        img.onload = function(){
            ctx.drawImage(img,0,0,1140,656);
        }

    }
}