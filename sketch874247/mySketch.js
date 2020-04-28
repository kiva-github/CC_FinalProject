let countryOutline;
var cityArray = [];

let seattle;
let seattleJSON;
let losAngeles;
let losAngelesJSON;
let newYork;
let newYorkJSON
let miami;
let miamiJSON;
let chicago
let chicagoJSON;
let phoenix;
let phoenixJSON;
let denver;
let denverJSON;

// los%20angeles
// Seattle

function preload(){
	img = loadImage('http://www.openprocessing.org/sketch/874247/files/usa_outline.png');
  seattleJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=seattle&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	losAngelesJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=los%20angeles&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	newYorkJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=new%20york&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	miamiJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=miami&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	chicagoJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=chicago&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	phoenixJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=phoenix&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	denverJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=denver&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
}

function setup() {
	createCanvas(1131, 724);
	background(255);
	cityArray.push(new City(seattleJSON,179, 140.5));
	cityArray.push(new City(losAngelesJSON, 196, 455));
	cityArray.push(new City(newYorkJSON, 951, 240));
	cityArray.push(new City(miamiJSON, 930, 586));
	cityArray.push(new City(chicagoJSON, 712, 280));
	cityArray.push(new City(phoenixJSON, 295, 488));
	cityArray.push(new City(denverJSON, 456, 378));
}

function draw() {
	image(img, 0, 0, width, height);
	for (i = 0; i < cityArray.length; i++){
		cityArray[i].display();
	}
}


function mousePressed(){
	print("X: "+ mouseX + " Y: " + mouseY);
}

function printLocation(x, y){
	if ((x > 1131/2) && (y > 724/2)) {
		print("Bottom Right");
	} else if ((x > 1131/2) && (y < 724/2)) {
		print("Top Right");
	} else if ((x < 1131/2) && (y > 724/2)) {
		print("Bottom Left");
	} else {
		print("Top Left");
	}
}


class City {
	constructor(cityJSON, xCoord, yCoord){
		this.name = cityJSON.name;
		this.x = xCoord;
		this.y = yCoord;
		this.json = cityJSON;
		this.temp = cityJSON.main.temp;
		this.windSpeed = cityJSON.wind.speed;
		this.weather = cityJSON.weather[0].description;
	}
	
	display(){
		
		print(this.temp > 100);
		
		// switch (this.temp) {
		// 	case (this.temp > 100):
		// 		fill(255,0,0);
		// 		break;
		// 	case (this.temp > 90):
		// 		fill(117, 25, 25);
		// 		break;
		// 	case (this.temp > 80):
		// 		fill(168, 35, 35);
		// 		break;
		// 	case (this.temp > 70):
		// 		fill(227, 110, 14);
		// 		break;
		// 	case (this.temp > 60):
		// 		fill(227, 167, 14);
		// 		break;
		// 	case (this.temp > 50):
		// 		fill(255, 236, 31);
		// 		break;
		// 	case (this.temp > 40):
		// 		fill(7, 179, 39); 
		// 		break;
		// 	case (this.temp > 30):
		// 		fill(34, 163, 189); 
		// 		break;
		// 	case (this.temp > 20):
		// 		fill(22, 110, 145); 
		// 		print("> 20");
		// 		break;
		// 	case (this.temp > 10):
		// 		fill(13, 53, 112); 
		// 		break;
		// 	case (this.temp > 0):
		// 		fill(113, 45, 168); 
		// 		break;
		// }
		
		switch(this.temp){
			case (this.temp < 80):
				print("LEss than 80");
				break;
			case (this.temp > 80):
				print("More than 80");
				break;
		}
			
		ellipse(this.x, this.y, 25, 25);		
		text("City: " + this.name, this.x - 10, this.y + 25);
		text("Temp: " + this.temp, this.x - 10, this.y + 45);
		text("Forecast: " + this.weather, this.x - 10, this.y + 65);
		text("Wind: " + this.windSpeed + "mph", this.x - 10, this.y + 85);
	}
}