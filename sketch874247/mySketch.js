var skyColor; // global variable for manipulating background color
var cityArray = []; // array for holding all City objects
let fastDropArray = []; // array for holding all Raindrop objects for rain behaviours
let cloudArray = []; // array for holding all Cloud objects for cloud behaviours
let snowflakeArray = []; // array for holding all Snowflake objects for snow behaviour
let lightningTimer = 2; // variable for timing in between lightning flashes for thunderstorm behaviour

var weatherNames = {}; // dictionary to hold all weather descriptions and number of occurances (i.e. "clear sky": 7)
let weatherNameLibrary; // array for holding all known weather descriptions
let buttonArray = [] // array for holding all weather buttons

let weatherClassObj; // instantiation of object of type Weather in order to call its various weather methods. I tried looking
										 // into making this class an abstract class because I am just calling its methods, but could not find any
										 // realiable sources

var activeCity; // variable that makes it so cities so up on load

// declaration of all City objects (all state capitals, for the most part) and their JSON variables
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
	img = loadImage('http://www.openprocessing.org/sketch/874247/files/usa_outline.png'); // image of US, edited in Photoshop to have no fill
	weatherClassObj = new Weather(); // instantiation of Weather object for calling class methods, as descibed above
	
	// loading JSON files for all cities
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
	createCanvas(windowWidth, windowHeight);
	background(255);
	skyColor = color(125); // sky set to gray by default
	activeCity = 0; // variable that makes it so cities show on load
	
	// all known weather descriptions. this is probably not the complete list, just what was the weather in the US during the time that I
	// creating this program, which is why there are no winter descriptions
	weatherNameLibrary = ["clear sky", "scattered clouds", "broken clouds", "overcast clouds", "few clouds",
												"light rain", "shower rain", "very heavy rain", "heavy intensity rain", "haze", "mist",
												"snow", "moderate rain", "thunderstorm with rain", "light intensity drizzle"];
	
	// instantiate and add all City objects to the cityArray
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
	
	// add Raindrop objects to respective array based on rain intensity
	for (i = 0; i < 500; i++){
		fastDropArray[i] = new Raindrop();
	}
	
	// add Cloud objects to respective array based on cloud type
	for (i = 0; i < 20; i++){
		cloudArray[i] = new Cloud();
	}
	
	// look through all City objects, check if the weather description is already in the dictionary: if it is, increment number
	// of occurances by 1, if it isn't, add it to the dictionary. this code ensures that even if there is a weather description
	// that isn't in my array of known descriptions (the weatherNameLibrary array), there will still be a button created for that
	// type of weather (even though i would not have made an animation for it).
	for (i = 0; i < cityArray.length; i++){
		if (weatherNames[cityArray[i].weather] == undefined) {
			weatherNames[cityArray[i].weather] = 1;
		} else {
			weatherNames[cityArray[i].weather] += 1;
		}
	}
	
	// look through array of all known weather descriptions, add to dictionary if it isn't ready there, otherwise increment number of
	// occurances. this code ensures that any weather that I did create an animation for is included and can be viewed by using the
	// weather buttons on the right side of the screen
	for (i = 0; i < weatherNameLibrary.length; i++){
		if (weatherNames[weatherNameLibrary[i]] == undefined) {
			weatherNames[weatherNameLibrary[i]] = 0;
		} else {
			weatherNames[weatherNameLibrary[i]] += 1;
		}
	}
	
	var ind = 0; // index for inserting in buttonArray
	var xCoord = 1200; // initial x-coordinate
	var yCoord = 75; // initial y-coordinate
	
	// creates new button for each weather description in the dictionary, which at this point hold all known weather descriptions,
	// as well as any new/unknown weather that is currently happening at any of the cities
	for (var key in weatherNames){
  	var value = weatherNames[key];
		buttonArray[ind] = new Button(xCoord, yCoord, key, value); 
		ind += 1;
		yCoord += 30;
	}
}

// DRAW LOOP //
function draw() {
	fill(skyColor);
	square(0, 0, width);
	image(img, 0, 0, 1131, 724);
	fill(0);
	
	// display all buttons
	for (i = 0; i < buttonArray.length; i++){
		buttonArray[i].display();
	}
	
	// if a button is active, display the weather for that button
	for (i = 0; i < buttonArray.length; i++){
		if (buttonArray[i].isActive == true){
			buttonArray[i].displayWeather();
			break;
		}
	}
	
	// display all cities
	for (i = 0; i < cityArray.length; i++){
		// this conditional fixes a small bug where city dots would not show on load
		if (activeCity == 0){
			cityArray[i].display();
		}
		// if city is actve, display the weather for that city
		if (cityArray[i].isActive == true){
			activeCity = 1
			cityArray[i].display();
			cityArray[i].displayWeather();
			break;
		}
	}
}

// if mouse is pressed, run mouseClick functions for all city dots and all buttons to see if it was clicked
function mousePressed(){
	for (i = 0; i < cityArray.length; i++){
		cityArray[i].mouseClick();
	}
	for (i = 0; i < buttonArray.length; i++){
		buttonArray[i].mouseClick();
	}
	//print("X: " + mouseX + " Y: " + mouseY);
}


////////// CLASSES //////////

// LOCATION CLASS //
class Location {
	constructor(cityJSON, xCoord, yCoord) {
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
	
	// if button was clicked, make it active, otherwise make it inactive
	mouseClick(){
		if (dist(this.x, this.y, mouseX, mouseY) < 12) {
			if (this.isActive == false) {
				this.isActive = true;
			}
		} else {
			this.isActive = false;
			activeCity = 0;
			skyColor = color(125);
		}
	}
		
	displayWeather(){
		
		// display info from JSON
		strokeWeight(1);
		stroke(2);
		text("City: " + this.name, this.x - 10, this.y + 25);
		text("Temp: " + this.temp, this.x - 10, this.y + 45);
		text("Forecast: " + this.weather, this.x - 10, this.y + 65);
		text("Wind: " + this.windSpeed + "mph", this.x - 10, this.y + 85);
		
		// conditionals for displaying weather based on weather description
		if (this.weather == "clear sky"){
			weatherClassObj.clearSky();
		} else if (this.weather == "few clouds"){
			weatherClassObj.clouds("few clouds");
		} else if (this.weather == "scattered clouds"){
			weatherClassObj.clouds("scattered cloud");
		} else if (this.weather == "broken clouds"){
			weatherClassObj.clouds("broken clouds");
		} else if (this.weather == "overcast clouds"){
			weatherClassObj.clouds("overcast clouds");
		}  else if (this.weather == "light rain"){
			weatherClassObj.rain("light rain");
		} else if (this.weather == "light intensity drizzle"){
			weatherClassObj.rain("light rain");
		} else if (this.weather == "light intensity rain"){
			weatherClassObj.rain("light rain");
		} else if (this.weather == "moderate rain"){
			weatherClassObj.rain("moderate rain");
		} else if (this.weather == "shower rain"){
			weatherClassObj.rain("shower rain");
		} else if (this.weather == "very heavy rain"){
			weatherClassObj.rain("heavy rain");
		}  else if (this.weather == "heavy rain"){
			weatherClassObj.rain("heavy intensity rain");
		}  else if (this.weather == "haze"){
			weatherClassObj.haze();
		} else if (this.weather == "mist"){
			weatherClassObj.haze();
		} else if (this.weather == "smoke"){
			weatherClassObj.haze();
		} else if (this.weather == "snow"){
			weatherClassObj.snow();
		} else if (this.weather == "light snow"){
			weatherClassObj.snow();
		} else if (this.weather == "thunderstorm with rain"){
			weatherClassObj.thunderstorm();
		} else {
			print(this.name + "'s weather is undefined");
		}
	}
}

// WEATHER CLASS //

class Weather {
	constructor() {
		this.hazeOpacity = 50; // opacity variable for haze/fog to change appearance
		this.hazeFogging = true;
		this.lightningOpacity = 0;
	}
	
	// methods for showing weather
	
	// weather shown for the different types of rain
	rain(rainType){
		if (rainType == "light rain"){
			for (i = 0; i < 25; i++){ // some raindrops shown
				fastDropArray[i].show();
				fastDropArray[i].fall();
			}
		} else if (rainType == "moderate rain"){
			for (i = 0; i < 75; i++){ // more raindrops shown
				fastDropArray[i].show();
				fastDropArray[i].fall();
			}
		} else if (rainType == "heavy rain"){
			for (i = 0; i < fastDropArray.length; i++){ // all raindrops shown
				fastDropArray[i].show();
				fastDropArray[i].fall();
			}
		} else {
			for (i = 0; i < 250; i++){ // default num of raindrops shown
				fastDropArray[i].show();
				fastDropArray[i].fall();
			}
		}
	}
	
	// weather shown for "clear sky" weather description
	clearSky() {
		// create and rotate sun graphic
		// code for rotation from https://editor.p5js.org/monicawen/sketches/HkU-BCJqm
		skyColor = color(148, 214, 255);
		fill(245, 212, 47);
		stroke(245, 187, 87);
		push();
		translate(75, 75);
		rotate(radians(frameCount / 2));
		ellipse(0, 0, 150, 150);
		strokeWeight(10)
		triangle(-10, 100, 0, 117, 10, 100);
		triangle(-10, -100, 0, -117, 10, -100);
		triangle(100, 0, 100, 20, 117, 10);
		triangle(-100, 0, -100, 20, -117, 10);
		triangle(70, 85, 87, 95, 87, 75);
		triangle(-70, 85, -87, 95, -87, 75);
		triangle(70, -85, 87, -95, 87, -75);
		triangle(-70, -85, -87, -95, -87, -75);
		pop();
		noFill();
	}
	
	// weather shown for different types of clouds
	clouds(cloudType){
		skyColor = color(148, 214, 255);
		if (cloudType == "scattered clouds"){
			for (i = 0; i < 5; i++){ // show several clouds
				cloudArray[i].show();
				cloudArray[i].move(true);
			}
			
		} else if (cloudType == "broken clouds"){
			for (i = 0; i < 10; i++){ // show some clouds
				cloudArray[i].show();
				cloudArray[i].move(true);
			}
		} else if (cloudType == "few clouds"){
			for (i = 0; i < 3; i++){ // show a few clouds
				cloudArray[i].show();
				cloudArray[i].move(true);
			}
		} else if (cloudType == "overcast clouds"){
			skyColor = color(151, 170, 186); // darken sky
			for (i = 0; i < cloudArray.length; i++){ // show all clouds, not moving (overcast)
				cloudArray[i].show();
				cloudArray[i].move(false);
			}
		} else {
			for (i = 0; i < 10; i++){ // default amount of clouds
				cloudArray[i].show();
				cloudArray[i].move();
			}
		}
	}	
	
	// weather shown for "haze" and "mist" weather descriptions
	haze(){
		// alpha value of gray rectangle bounces between 25-100 to create cool effect
		fill(194, 194, 194, this.hazeOpacity);
		rect(0, 0, windowWidth, windowHeight);
		if (this.hazeFogging){
			this.hazeOpacity += 0.5;
		} else {
			this.hazeOpacity -= 0.5;
		}
		
		if (this.hazeOpacity >= 100){
			this.hazeFogging = false;
		} else if (this.hazeOpacity <= 25){
			this.hazeFogging = true;
		}
	}
	
	// weather shown for "snow" weather descriptions. it never snowed anywhere while I created this program
	// so I'm not sure the even description, although it is probaly something similar
	// code is from: https://p5js.org/examples/simulate-snowflakes.html
	snow(){
			let t = frameCount / 60; // update time based on the current frame count

			// creates a random number (between 1-5) of Snowflake objects for each frame in range
			for (let i = 0; i < random(5); i++) {
				snowflakeArray.push(new Snowflake()); // add Snowflake objects to snowflakeArray
			}

			// loop through snowflakeArray, show them, then update them
			for (i = 0; i < snowflakeArray.length; i++) {
				fill(255);
				noStroke();
				snowflakeArray[i].update(t); // update Snowflake position
				snowflakeArray[i].display(); // show Snowflake
			}
	}
	
	// weather shown for "thunderstorm with rain" weather description
	thunderstorm(){
		// code for a lightning bolt
		// fill(color("yellow"));
		// let randomVal = random(wid);
		// height = 400
		// triangle(randomVal, randomVal - 200, randomVal + 75, randomVal - 200, randomVal, randomVal);
		// rect(randomVal, randomVal - 30, 100, 40);
		// triangle(randomVal + 25, randomVal - 30, randomVal + 125, randomVal - 30, randomVal + 25, randomVal + 200);
		
		// will create a 2 second timer, every two seconds there will be a quick "flash" of lightning where the alpha value is raised temporarily
		fill(194, 194, 194, this.lightningOpacity);
		this.lightningOpacity = 0;
		rect(0, 0, windowWidth, windowHeight);
		if (frameCount % 60 == 0 && lightningTimer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    	lightningTimer --;
  	}
  	if (lightningTimer == 0) {
    	this.lightningOpacity = 100;
			lightningTimer = 2;
  	}
		
		// code for making it rain at the same time
		for (i = 0; i < fastDropArray.length; i++){
				fastDropArray[i].show(); // show rain
				fastDropArray[i].fall(); // update rain
			}
	}
}
	
// CITY CLASS //

// city class inherits from Location class
class City extends Location {
	constructor(cityJSON, xCoord, yCoord){
		super(cityJSON, xCoord, yCoord);																									
	}
	
	display(){
		
		noStroke();
		
		// conditionals for basing city dot on current temperature there
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

// RAINDROP CLASS //

class Raindrop {
	constructor(){
		this.xCoord = random(width);
		this.yCoord = random(0, -100);
		this.speed = random(4,10);
	}
	
	// draws the Raindrop
	show(){
		stroke(23, 87, 156);
		strokeWeight(10)
		line(this.xCoord, this.yCoord, this.xCoord, this.yCoord + 10);
	}
	
	// updates the Raindrop's position
	fall(){
		this.yCoord += this.speed;
		if (this.yCoord > height){
			this.yCoord = random(0, -100);
		}
	}
}

// CLOUD CLASS //

class Cloud {
	constructor(){
		this.x = random(width);
		this.y = random(height/5);
		this.speed = random(1,3);
	}
	
	// draws the Cloud
	show(){
		noStroke();
		fill(255);
		ellipse(this.x, this.y, 60, 50);
		ellipse(this.x + 30, this.y - 10, 60, 50);
		ellipse(this.x + 80, this.y, 60, 50);
		ellipse(this.x + 20, this.y + 20, 60, 50);
		ellipse(this.x + 60, this.y + 15, 60, 50);
	}
	
	// updates the Cloud's position if it is meant to move (only overcast does not move)
	move(boolVal){
		if (boolVal == true){
			this.x += this.speed;
			if (this.x > width + 50){
				this.x = -75;
				this.y = random(height/2);
			}
		}
	}
}

// SNOWFLAKE CLASS //
class Snowflake {
  constructor(){
		this.posX = 0;
		this.posY = random(-50, 0);
		this.initialangle = random(0, 2 * PI); // intial angle that snowflake moves relative to ground
		this.size = random(2, 5); // creates random radius size for Snowflake objects
		this.radius = sqrt(random(pow(width / 2, 2))); // determines path of snowflake with respect ot the side of the screen
	}

	// updates position of the Snowflake object
  update(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);
    this.posY += pow(this.size, 0.5); // different size snowflakes fall at slightly different y speeds
		// delete Snowflake objects if it foes past the end of window with
		if (this.posY > height) {
      let index = snowflakeArray.indexOf(this);
      snowflakeArray.splice(index, 1);
    }
  }
	// draw snowflake (as circle)
  display() {
    ellipse(this.posX, this.posY, this.size);
  }
}

// BUTTON CLASS //

class Button {
	constructor(x, y, text, num){
		this.xCoord = x;
		this.yCoord = y;
		this.label = text + " --> " + num;
		this.weatherDescription = text;
		this.numOccurances = num;
		this.isActive = false;
	}
	
	// draws buttons
	display(){
		noStroke();
		// if button is inactive it is black, if it is active is it white
		if (this.isActive == false){
			fill(255);
		} else {
			fill(0);
		}
				
		circle(this.xCoord, this.yCoord, 25);
		text(this.label, this.xCoord + 20, this.yCoord + 5);
		skyColor = color(125);
	}
	
	// conditionals for showing the weather based on what button was pressed
	displayWeather(){
		if (this.weatherDescription == "clear sky"){
			weatherClassObj.clearSky();
		} else if (this.weatherDescription == "few clouds"){
			weatherClassObj.clouds("few clouds");
		} else if (this.weatherDescription == "scattered clouds"){
			weatherClassObj.clouds("scattered cloud");
		} else if (this.weatherDescription == "broken clouds"){
			weatherClassObj.clouds("broken clouds");
		} else if (this.weatherDescription == "overcast clouds"){
			weatherClassObj.clouds("overcast clouds");
		}  else if (this.weatherDescription == "light rain"){
			weatherClassObj.rain("light rain");
		} else if (this.weatherDescription == "light intensity drizzle"){
			weatherClassObj.rain("light rain");
		} else if (this.weatherDescription == "light intensity rain"){
			weatherClassObj.rain("light rain");
		} else if (this.weatherDescription == "moderate rain"){
			weatherClassObj.rain("moderate rain");
		} else if (this.weatherDescription == "shower rain"){
			weatherClassObj.rain("shower rain");
		} else if (this.weatherDescription == "very heavy rain"){
			weatherClassObj.rain("heavy rain");
		}  else if (this.weatherDescription == "heavy intensity rain"){
			weatherClassObj.rain("heavy rain");
		}  else if (this.weatherDescription == "haze"){
			weatherClassObj.haze();
		} else if (this.weatherDescription == "mist"){
			weatherClassObj.haze();
		} else if (this.weatherDescription == "smoke"){
			weatherClassObj.haze();
		} else if (this.weatherDescription == "snow"){
			weatherClassObj.snow();
		} else if (this.weatherDescription == "light snow"){
			weatherClassObj.snow();
		} else if (this.weatherDescription == "thunderstorm with rain"){
			weatherClassObj.thunderstorm();
		} else {
			print(this.name + "'s weather is undefined");
		}
	}
	
	// check if button was pressed, update isActive status accordingly
	mouseClick(){
		if (dist(this.xCoord, this.yCoord, mouseX, mouseY) < 12) {
			if (this.isActive == false) {
				this.isActive = true;
			}
		} else {
			this.isActive = false;
		}
	}
}