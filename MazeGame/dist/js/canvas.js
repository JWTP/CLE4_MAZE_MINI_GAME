window.onload = function(){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var canvasWidth = window.innerWidth;
    var canvasHeight = window.innerHeight;
    var img = new Image();
    img.src = './images/level1.png'
    ctx.drawImage(img,0,0,1140,656);
}   