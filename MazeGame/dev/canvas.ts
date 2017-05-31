class Canvas {

    constructor(){

        var canvas = document.getElementsByTagName('canvas')[0];
        var ctx = canvas.getContext('2d');
        canvas.width = 1300;
        canvas.height = 800;
        
        var img = new Image();
        img.src = './images/level1.png'
        img.onload = function(){
            ctx.drawImage(img,0,0,canvas.width,(canvas.height - 50));
        }

    }
}
