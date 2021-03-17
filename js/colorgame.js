var colors = generateColors(6);
var boxes = document.querySelectorAll(".box");
var randomrgb = document.querySelector("h1");
var pickedColor = pickColor();
var easy = document.querySelector(".easy");
var hard = document.querySelector(".hard");
var reset = document.querySelector(".reset");
var head = document.querySelector(".heading");
var mode = false;
var sound4 = new Howl({
  src: ['232 sounds/sounds/corona.mp3']
});
var sound16 = new Howl({
  src: ['232 sounds/sounds/prism-2.mp3']
});

var sound24 = new Howl({
	src: ['232 sounds/sounds/veil.mp3']
});

reset.addEventListener("click",function(){
	sound24.play();
//generate random color
if (mode == true){
	colors = generateColors(3);
}
colors = generateColors(6);
//pick a color
pickedColor = pickColor();
//set display to picked color
randomrgb.textContent = pickedColor;
// adding colors to the boxes
for (i = 0; i <= boxes.length; i++) {
 // adding colors to square
 boxes[i].style.backgroundColor = colors[i];
 reset.textContent = "NEW COLORS";
 head.style.color  = "white";
}
})


hard.addEventListener("click",function(){
	head.style.color  = "white";
	 reset.textContent = "NEW COLORS";
	hard.style.backgroundColor = "blue";
	easy.style.backgroundColor = "#6c757d";
//generate random color
colors = generateColors(6);
//pick a color
pickedColor = pickColor();
//set display to picked color
randomrgb.textContent = pickedColor;
// adding colors to the boxes

for (i = 0; i <= boxes.length; i++) {
 // adding colors to square
 
	boxes[i].style.backgroundColor = colors[i];
	boxes[i].style.display = "block";

}
var mode = false;
});	


easy.addEventListener("click",function(){
	easy.style.backgroundColor = "green";
	hard.style.backgroundColor = "#6c757d";
	head.style.color  = "white";
	 reset.textContent = "NEW COLORS";
//generate random color
colors = generateColors(3);
//pick a color
pickedColor = pickColor();
//set display to picked color
randomrgb.textContent = pickedColor;
// adding colors to the boxes

 reset.textContent = "NEW COLORS";
 head.style.color  = "white";

for (i = 0; i <= boxes.length; i++) {
 // adding colors to square
 if (colors[i]){
	boxes[i].style.backgroundColor = colors[i];
}
else{
	boxes[i].style.display = "none";
}
}
var mode = true;
});



function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateColors(num){
	var arr = [];   // making array
for (var i =0; i<num; i++){
// get random colors and push into array

var random = randomColor();
console.log(random);
arr.push(random);

}
return arr;  // return array
}

function randomColor (){
var red = Math.floor(Math.random() * 255);
var green = Math.floor(Math.random() * 255);
var blue = Math.floor(Math.random() * 255);

return "rgb(" + red + ", " + green + ", " + blue +")";
}

 randomrgb.textContent = pickedColor;

for (i = 0; i <= boxes.length; i++) {
 // adding colors to square
 boxes[i].style.backgroundColor = colors[i];

 boxes[i].addEventListener("click",function(){
 	// taking clicked color
var clickedColor = this.style.backgroundColor;
if(clickedColor===pickedColor){
	sound16.play();
	for (i = 0; i < boxes.length; i++) {
 boxes[i].style.backgroundColor = clickedColor;
 reset.textContent = "Play Again?";
 head.style.color = pickedColor;;
 }
}
else{
sound4.play();
	this.style.backgroundColor = 'transparent';
    }
  })
 }


