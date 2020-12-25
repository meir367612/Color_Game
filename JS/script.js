
var win=0 ;  
var color=""
var list_of_winRGB=[]
var headLine =document.getElementById("headLine")
var square = document.querySelectorAll(".square");
var esay_hard="hard"
var guess = document.querySelector("#guess");
var time_out1;
var time_out2;

//create the circles
var circle1 =document.getElementById("circle1");
circle1.addEventListener("click", function() {
checkColor(0)});                                           
var circle2 =document.getElementById("circle2");
circle2.addEventListener("click", function() {
checkColor(1)});
var circle3 =document.getElementById("circle3");
circle3.addEventListener("click", function() {
checkColor(2)});
var circle4 =document.getElementById("circle4");            circle4.addEventListener("click", function() {
checkColor(3)});
var circle5 =document.getElementById("circle5");
circle5.addEventListener("click", function() {
checkColor(4)});
var circle6 =document.getElementById("circle6");
circle6.addEventListener("click", function() {
checkColor(5)});


/* 
This function get ID of circle and check if it's the right color and than print the result.

input:
  Circle ID
output:
  NONE
*/
function checkColor(numCircle)
 {
    var trouth_color=list_of_winRGB[list_of_winRGB.length-1]
    var circleColor = square[numCircle].style.background
    var circle=numCircle+1
    var realCircle="circle"+circle

    if (circleColor==trouth_color){
      if(esay_hard=="hard"){
        for (var i = 0; i < 6; i++)
         {
            square[i].style.background = trouth_color
          };
      }
            else{
        for (var i = 0; i < 3; i++)
         {
            square[i].style.background = trouth_color
          };
      }
        headLine.innerHTML="Well done!!! ";
        guess.innerHTML="Correct"
        reset.textContent = "Play again?";
        headLine.style.color=trouth_color
        guess.style.color=trouth_color
      }
      else if ( square[numCircle].style.background!="rgb(44, 62, 80)")
      {
          square[numCircle].style.background="none"
          guess.innerHTML="Try Again!";
      }
    }

/* 
This function generate random numbers and conver it to RGB color number to list.
input:
  NONE
output:
  List of RGB colors.
*/
function random_colors()
{
  var o = Math.round, r = Math.random, s = 255;
  color= 'rgb(' + o(r()*s) + ', ' + o(r()*s) + ', ' + o(r()*s)  + ')';
   
  return color
}

/* 
This function generate the WIN color by random numbers and conver it to RGB color number.

input:
  NONE
output:
  List of RGB WIN colors.
*/
function trouth_color()
{
  var o = Math.round, r = Math.random, s = 255;
  var trouth_color= 'rgb(' + o(r()*s) + ', ' + o(r()*s) + ', ' + o(r()*s)  + ')';
  list_of_winRGB.push(trouth_color)
  
  return trouth_color
}


/* 
This function doing:
 1. count 60 sec and reset the game.
 2. control the game, check the color and ptint (Winner or Looser)

input:
  NONE
output:
  NONE
*/
function random_rgb_real(){
  timeOut();
  restart_game();


  var trouth_color_real=trouth_color();
  if (esay_hard=="hard"){

    win_place=Math.floor(Math.random() * 6) ;  
    for (var i = 0; i < 6; i++)
    {
      if (i!=win_place)
      {
        square[i].style.background = random_colors();
      }
      else
      {
      square[win_place].style.background = trouth_color_real;
      }
    }

  }
  else{
      square[3].style.background="none"
      square[4].style.background="none"
      square[5].style.background="none"
      win_place=Math.floor(Math.random() * 3) ;  
        for (var i = 0; i < 3; i++)
    {
      if (i!=win_place)
      {
        square[i].style.background = random_colors();
      }
      else
      {
      square[win_place].style.background = trouth_color_real;
      }
    }
  }
  headLine.innerHTML=trouth_color_real;
}

/* 
This function remove circles by change their color to none.

input:
  NONE
output:
  NONE
*/
function remove_circles() {

  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");

  square[3].style.background="none"
  square[4].style.background="none"
  square[5].style.background="none"
   esay_hard="easy"
    random_rgb_real()
  }

/* 
This function add circles to the game.

input:
  NONE
output:
  NONE
*/
function add_circles()
 {
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
    esay_hard="hard"
    random_rgb_real()
  }
/* 
This function count 60 sec and restart the game every 60 sec.

input:
  NONE
output:
  NONE
*/
function timeOut(){
  clearTimeout(time_out1);
  clearTimeout(time_out2);
  time_out1=setTimeout(function(){ guess.innerHTML="Next time do it Faster!"; },60000);
  time_out2=setTimeout(function(){   random_rgb_real()},61000*1000);


  return
}

/* 
This function restart the game.

input:
  NONE
output:
  NONE
*/
function restart_game(){
  guess.innerHTML="Guess the RGB"
  guess.style.color= "#3AA1FF";
  headLine.style.color= "#3AA1FF";
  reset.innerHTML="Reset"
  return
}




random_rgb_real()