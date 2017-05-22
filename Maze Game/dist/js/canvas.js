window.onload = function(){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var canvasWidth = window.innerWidth;
    var canvasHeight = window.innerHeight;
    var img = new Image();
    img.src = './images/lv2.png'

    ctx.drawImage(img,0,0,1137,656);
}