window.onload = function(){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var img = new Image();
    img.src = './images/level2.png'
    ctx.drawImage(img,0,0,1300,740);
    //test
}