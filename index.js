var Circles = [];
var colors = ['green','red','silver','blue','yellow','black','pink'];
var RADIUS_SIZE = 30;
var MAX_BALLS_IN_SCREEN = 20;
var drawCircle = function(){
  var c=document.getElementById("canvas");
  var ctx=c.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(Circles.length < MAX_BALLS_IN_SCREEN && Math.floor((Math.random() * 100)) == 0)
      Circles.push({posX: Math.floor((Math.random())*100)+RADIUS_SIZE,
		    posY: 75,
		    operatorX:2 * Math.random(),
		    radius:  RADIUS_SIZE,
		    operatorY:2 *  Math.random(),
		    colorize: colors[Math.floor(Math.random() * 7)]});

  for(var i=0; i < Circles.length; i++){
    ctx.beginPath();
    Circles[i].posX = Circles[i].posX + Circles[i].operatorX;
    Circles[i].posY = Circles[i].posY + Circles[i].operatorY;
    ctx.arc(Circles[i].posX,Circles[i].posY,Circles[i].radius,0,2*Math.PI);
    ctx.fillStyle = Circles[i].colorize;
    ctx.fill();
    ctx.stroke();

    if((Circles[i].posX+Circles[i].radius) > c.width){
      Circles[i].operatorX = Circles[i].operatorX * -1;
    }else if((Circles[i].posX-Circles[i].radius) < 0){
      Circles[i].operatorX = Circles[i].operatorX * -1;
    }

    if((Circles[i].posY+Circles[i].radius) > c.height){
      Circles[i].operatorY = Circles[i].operatorY * -1;
    }else if((Circles[i].posY-Circles[i].radius) < 0){
      Circles[i].operatorY = Circles[i].operatorY * -1;
    }
  }
};


$(document).ready(function(){
    var canvas = $('#canvas');
    canvas.attr('width',$(window).width());
    canvas.attr('height',$(window).height());
    setInterval(drawCircle, 5);
});
