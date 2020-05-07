let countryOutline;
var skyColor;
var cityArray = [];
let dropArray = [];

let atlanta, atlantaJSON;
let augusta, augustaJSON;
let austin, austinJSON;
let batonRouge, batonRougeJSON;
let bismarck, bismarckJSON;
let boise, boiseJSON;
let carsonCity, carsonCityJSON;
let charleston, charlestonJSON;
let cheyenne, cheyenneJSON;
let chicago, chicagoJSON;
let columbia, columbiaJSON;
let columbus, columbusJSON;
let denver, denverJSON;
let desMoines, desMoinesJSON;
let frankfort, frankfortJSON;
let helena, helenaJSON;
let houston, houstonJSON;
let indianapolis, indianapolisJSON;
let jackson, jacksonJSON;
let jeffersonCity, jeffersonCityJSON;
let lansing, lansingJSON;
let lincoln, lincolnJSON;
let littleRock, littleRockJSON;
let losAngeles, losAngelesJSON;
let madison, madisonJSON;
let miami, miamiJSON;
let montgomery, montgomeryJSON;
let nashville, nashvilleJSON;
let newYork, newYorkJSON;
let oklahoma, oklahomaCityJSON;
let philadelphia, philadelphiaJSON;
let phoenix, phoenixJSON;
let pierre, pierreJSON;
let portland, portlandJSON;
let raleigh, raleighJSON;
let richmond, richmondJSON;
let saintPaul, saintPaulJSON;
let saltLakeCity, saltLakeCityJSON;
let sanDiego, sanDiegoJSON;
let santaFe, santaFeJSON;
let seattle, seattleJSON;
let topeka, topekaJSON;

function preload(){
	img = loadImage('http://www.openprocessing.org/sketch/874247/files/usa_outline.png');
	
	atlantaJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=atlanta&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	augustaJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=augusta&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	austinJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=austin&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
  batonRougeJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=baton%20rouge&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	bismarckJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=bismarck&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	boiseJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=boise&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	carsonCityJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=carson%20city&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	charlestonJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=charleston&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	cheyenneJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=cheyenne&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	chicagoJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=chicago&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	columbiaJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=columbia&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	columbusJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=columbus&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	denverJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=denver&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	desMoinesJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=des%20moines&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	frankfortJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=frankfort&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	helenaJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=helena&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	houstonJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=houston&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	indianapolisJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=indianapolis&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	jacksonJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=jackson&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	jeffersonCityJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=jefferson%20city&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	lansingJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=lansing&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	lincolnJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=lincoln&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	littleRockJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=little%20rock&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	losAngelesJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=los%20angeles&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	madisonJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=madison&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	miamiJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=miami&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	montgomeryJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=montgomery&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	nashvilleJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=nashville&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	newYorkJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=new%20york&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	oklahomaCityJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=oklahoma%20city&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	philadelphiaJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=philadelphia&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	phoenixJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=phoenix&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	pierreJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=pierre&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	portlandJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=portland&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	raleighJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=raleigh&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	richmondJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=richmond&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	saintPaulJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=saint%20paul&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	saltLakeCityJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=salt%20lake%20city&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	sanDiegoJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=san%20diego&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	santaFeJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=santa%20fe&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	seattleJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=seattle&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
	topekaJSON = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=topeka&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");

}

function setup() {
	createCanvas(1131, 724);
	background(255);
	
	cityArray.push(new City(atlantaJSON, 817, 438));
	cityArray.push(new City(augustaJSON, 998, 106));
	cityArray.push(new City(austinJSON, 572, 549));
	cityArray.push(new City(batonRougeJSON, 705, 549));
	cityArray.push(new City(bismarckJSON, 500, 194));
	cityArray.push(new City(boiseJSON, 251, 220));
	cityArray.push(new City(carsonCityJSON, 184, 324));
	cityArray.push(new City(charlestonJSON, 851, 340));
	cityArray.push(new City(cheyenneJSON, 437, 307));
	cityArray.push(new City(chicagoJSON, 712, 280));
	cityArray.push(new City(columbiaJSON, 878, 425));
	cityArray.push(new City(columbusJSON, 817, 312));
	cityArray.push(new City(denverJSON, 456, 378));
	cityArray.push(new City(desMoinesJSON, 628, 305));
	cityArray.push(new City(frankfortJSON,796, 343));
	cityArray.push(new City(helenaJSON, 321, 167));
	cityArray.push(new City(houstonJSON, 635, 551));
	cityArray.push(new City(indianapolisJSON, 759, 314));
	cityArray.push(new City(jacksonJSON, 702, 505));
	cityArray.push(new City(jeffersonCityJSON, 658, 358));
	cityArray.push(new City(lansingJSON, 778, 258));
	cityArray.push(new City(lincolnJSON, 578, 319));
	cityArray.push(new City(littleRockJSON, 663, 428));
	cityArray.push(new City(losAngelesJSON, 196, 455));
	cityArray.push(new City(madisonJSON, 690, 255));
	cityArray.push(new City(miamiJSON, 930, 586));
	cityArray.push(new City(montgomeryJSON, 779, 489));
	cityArray.push(new City(nashvilleJSON, 760, 400));
	cityArray.push(new City(newYorkJSON, 951, 240));
	cityArray.push(new City(oklahomaCityJSON, 556, 449));
	cityArray.push(new City(philadelphiaJSON, 917, 286));
	cityArray.push(new City(phoenixJSON, 295, 488));
	cityArray.push(new City(pierreJSON, 507, 236));
	cityArray.push(new City(portlandJSON, 176, 186));
	cityArray.push(new City(richmondJSON, 923, 344));
	cityArray.push(new City(raleighJSON, 905, 370));
	cityArray.push(new City(saintPaulJSON, 628, 218));
	cityArray.push(new City(saltLakeCityJSON, 307, 304));
	cityArray.push(new City(sanDiegoJSON, 220, 480));
	cityArray.push(new City(santaFeJSON, 403, 425));
	cityArray.push(new City(seattleJSON, 179, 140));
	cityArray.push(new City(topekaJSON, 591, 346));
	

	for (i = 0; i < 100; i++){
		dropArray[i] = new Raindrop();
	}

}

function draw() {
	fill(125);
	square(0, 0, width);
	image(img, 0, 0, width, height);
	for (i = 0; i < cityArray.length; i++){
		cityArray[i].display();
		if (cityArray[i].isActive == true){
			cityArray[i].displayWeather();
		}
	}
	
	for (i = 0; i < 100; i++){
		dropArray[i].show();
		dropArray[i].fall();
	}
	
	circle(30,30, 25);
	text("Rain", 50, 35);
	
}

function mousePressed(){
	for (i = 0; i < cityArray.length; i++){
		cityArray[i].mouseClick();
	}
	print("X: " + mouseX + " Y: " + mouseY);
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
		
		stroke(2);
		stroke(0);
				
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
		} else if (this.weather == "haze"){
			print(this.name + "'s weather is haze");
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
		
		noStroke();
		
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


class Raindrop {
	constructor(){
		this.xCoord = random(width);
		this.yCoord = random(0, -100);
		this.speed = random(4,10);
	}
	
	show(){
		stroke(23, 87, 156);
		strokeWeight(4)
		line(this.xCoord, this.yCoord, this.xCoord, this.yCoord + 5);
	}
	
	fall(){
		this.yCoord += this.speed;
		if (this.yCoord > height){
			this.yCoord = random(0, -100);
		}
	}
}
