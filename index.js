var x = 100, y =75, operatorX = 2, operatorY = 2;
var Circles = [];

var Circle = {
  posX: Math.random() * 100,
  posY: 75,
  operatorX: 2,
  operatorY: 2
};

var colors = ['green','red','silver','blue','yellow','black','pink'
];

var drawCircle = function(){

  var c=document.getElementById("canvas");
  var ctx=c.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(Circles.length < 100 && Math.floor((Math.random() * 100)) == 0)
      Circles.push({posX: Math.random()*100,posY: 75,operatorX:2,operatorY:2, colorize: colors[Math.floor(Math.random() * 7)]});

  for(var i=0; i < Circles.length; i++){
    ctx.beginPath();
    Circles[i].posX = Circles[i].posX + Circles[i].operatorX;
    Circles[i].posY = Circles[i].posY + Circles[i].operatorY;
    ctx.arc(Circles[i].posX,Circles[i].posY,50,0,2*Math.PI);
    ctx.fillStyle = Circles[i].colorize;
     ctx.fill();
    ctx.stroke();

    if(Circles[i].posX > c.width){
      Circles[i].operatorX = Circles[i].operatorX * -1;
    }else if(Circles[i].posX < 0){
      Circles[i].operatorX = Circles[i].operatorX * -1;
    }

    if(Circles[i].posY > c.height){
      Circles[i].operatorY = Circles[i].operatorY * -1;
    }else if(Circles[i].posY < 0){
      Circles[i].operatorY = Circles[i].operatorY * -1;
    }
  }
};

$(document).ready(function(){

  setInterval(drawCircle, 10);
});
