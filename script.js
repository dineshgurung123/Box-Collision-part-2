

var rect = document.getElementById("rectangle");
var button = document.getElementById("btn");
var stops = document.getElementById("stop");

var SpeedX  = 4;
var SpeedY  = 4;

var redX = 0;
var redY = 350;


var initialX = redX;
var initialY = redY;

var initialSpeedX = SpeedX;
var initialSpeedY = SpeedY;


function move() {
    

redX += SpeedX;

rect.style.left  = redX + "px";


redY += SpeedY;
rect.style.top = redY + "px";

  if (redX <=0 || redX + rect.offsetWidth>=800) {
    

    SpeedX *= -1;

    var arr = ["blue", "yellow", "pink", "white", "black", "green", "orange" ];
    
  
    rect.style.background = arr[Math.floor(Math.random()*7)];
    var collisionSound = new Audio('Audio/collision.mp3');

    collisionSound.play();
  }

   if(redY <=0 || redY + rect.offsetHeight >=800){

    SpeedY *= -1;

    var arr = ["blue", "yellow", "pink", "white", "black" , "green", "skyblue"];
    
    
    rect.style.background = arr[Math.floor(Math.random()*7)];
    var collisionSound = new Audio('Audio/collision.mp3');

    collisionSound.play();

   }


}


var timer;
function start() {
  
  timer = setInterval(move, 22);


stops.addEventListener('click', reset);



}

button.addEventListener('click', start);



function reset() {
  
 
  clearInterval(timer);
   
   rect.style.left = initialX + "px";
   rect.style.top = initialY + "px";

    redX = 0;
    redY = 350;


   SpeedX = initialSpeedX;
   SpeedY = initialSpeedY;

}





