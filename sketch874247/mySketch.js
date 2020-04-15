let countryOutline;

function preload(){
	img = loadImage('http://www.openprocessing.org/sketch/874247/files/usa_outline.png');
}

function setup() {
	createCanvas(1131, 724);
	background(255);
}

function draw() {
	image(img, 0, 0, width, height);
}