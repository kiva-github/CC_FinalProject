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

function preload(){
	img = loadImage('http://www.openprocessing.org/sketch/874247/files/usa_outline.png');
  seattleJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=seattle&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	losAngelesJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=los%20angeles&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	newYorkJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=new%20york&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	miamiJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=miami&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	chicagoJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=chicago&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	phoenixJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=phoenix&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	denverJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=denver&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	philadelphiaJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=philadelphia&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	houstonJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=houston&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");




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
	cityArray.push(new City(philadelphiaJSON, 917, 286));
	cityArray.push(new City(houstonJSON, 635, 551));


}

function draw() {
	image(img, 0, 0, width, height);
	for (i = 0; i < cityArray.length; i++){
		cityArray[i].display();
		if (cityArray[i].isActive == true){
			cityArray[i].displayWeather();
		}
	}
}

function mousePressed(){
	for (i = 0; i < cityArray.length; i++){
		cityArray[i].mouseClick();
	}
	print(mouseX, mouseY);
}

// CLASSES //

class Location {
	constructor(cityJSON, xCoord, yCoord) {
		this.test = 5;
		this.name = cityJSON.name;
		this.x = xCoord;
		this.y = yCoord;
		this.json = cityJSON;
		this.temp = cityJSON.main.temp;
		this.windSpeed = cityJSON.wind.speed;
		this.weather = cityJSON.weather[0].description;
		this.isActive = false;
		this.displayCase = "";
  }
	
	mouseClick(){
		if (dist(this.x, this.y, mouseX, mouseY) < 12) {
			if (this.isActive == false) {
				this.isActive = true;
			}
		} else {
			this.isActive = false;
		}
	}
		
	displayWeather(){
		
				
		text("City: " + this.name, this.x - 10, this.y + 25);
		text("Temp: " + this.temp, this.x - 10, this.y + 45);
		text("Forecast: " + this.weather, this.x - 10, this.y + 65);
		text("Wind: " + this.windSpeed + "mph", this.x - 10, this.y + 85);
		
		if (this.weather == "clear sky"){
			print(this.name + "'s weather is clear sky");
		} else if (this.weather == "scattered clouds"){
			print(this.name + "'s weather is scattered clouds");
			this.scatteredClouds();
		} else if (this.weather == "broken clouds"){
			print(this.name + "'s weather is broken clouds");
		} else if (this.weather == "overcast clouds"){
			print(this.name + "'s weather is overcast clouds");
		} else if (this.weather == "few clouds"){
			print(this.name + "'s weather is few clouds");
		} else if (this.weather == "light rain"){
			print(this.name + "'s weather is light rain");
		} else {
			print(this.name + "'s weather is undefined");
		}
	}
	
	scatteredClouds(){

		noStroke();
		fill(255);
		ellipse(50,50,60,50);
		ellipse(80,40,60,50);
		ellipse(130,50,60,50);
		ellipse(70,70,60,50);
		ellipse(110,65,60,50);
	}
	
	
	
}
	

class City extends Location {
	constructor(cityJSON, xCoord, yCoord){
		super(cityJSON, xCoord, yCoord);																									
	}
	
	display(){
		
		if (this.temp > 100){
			fill("#FC582A")
		} else if (this.temp > 80) {
			fill("#FF9627")
		} else if (this.temp > 70) {
			fill("#FDC130")
		} else if (this.temp > 60) {
			fill("#8CC051")
		} else if (this.temp > 50) {
			fill("#319928")
		} else if (this.temp > 40) {
			fill("#139588")
		} else if (this.temp > 30) {
			fill("#23BBCD")
		} else if (this.temp > 20) {
			fill("#1DA9F0")
		} else if (this.temp > 10) {
			fill("#557EF8")
		} else {
			fill("#3E57AF")
		}
			
		ellipse(this.x, this.y, 25, 25);
		
	}
}
