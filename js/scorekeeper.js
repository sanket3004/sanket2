var p1= document.querySelector(".p1");
var p2= document.querySelector(".p2");
var reset= document.querySelector(".reset");
var forP1 = document.querySelector("#forP1");
var forP2 = document.querySelector("#forP2");
 

var count = document.querySelector(".count");
var numEntered = document.querySelector(".num")



numEntered.addEventListener("change",function(event){
var num = document.querySelector(".num").value; 

count.textContent = num;
var p1score=0;
 var p2score=0;
 var gameOver = false;
p1.addEventListener("click",function(){
	
if (!gameOver){
p1score++;
forP1.textContent = p1score;
if (p1score==num){
	forP1.classList.add("winner");
	gameOver = true;
    }
   }
});
p2.addEventListener("click",function(){
if (!gameOver){
p2score++;
forP2.textContent = p2score;
if (p2score==num){
	forP2.classList.add("winner");
	gameOver = true;
   }	
  }
});


});

reset.addEventListener("click",function(){
p1score=0;
p2score=0;
forP1.textContent = 0;
forP2.textContent = 0;
count.textContent = 0;
forP1.classList.remove("winner");
forP2.classList.remove("winner");
document.querySelector(".num").value = " ";
})