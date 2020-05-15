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
		} else if ((this.weather == "thunderstorm with rain") || (this.weather == "thunderstorm")){
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
			skyColor = color(125); // darken sky
			for (i = 0; i < 25; i++){ // some raindrops shown
				fastDropArray[i].show();
				fastDropArray[i].fall();
			}
		} else if (rainType == "moderate rain" || rainType == "shower rain"){
			skyColor = color(100); // darken sky
			for (i = 0; i < 75; i++){ // more raindrops shown
				fastDropArray[i].show();
				fastDropArray[i].fall();
			}
		} else if (rainType == "heavy rain"){
			skyColor = color(75); // darken sky
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
		
		skyColor = color(50); // darken sky
		
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
			fill("#FC582A");
		} else if (this.temp > 90) {
			fill("#FF9627");
		} else if (this.temp > 80) {
			fill("#FDC130");
		} else if (this.temp > 70) {
			fill("#8CC051");
		} else if (this.temp > 60) {
			fill("#319928");
		} else if (this.temp > 50) {
			fill("#139588");
		} else if (this.temp > 40) {
			fill("#23BBCD");
		} else if (this.temp > 30) {
			fill("#1DA9F0");
		} else if (this.temp > 20) {
			fill("#557EF8");
		} else {
			fill("#3E57AF");
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
		} else if ((this.weatherDescription == "thunderstorm with rain") || (this.weatherDescription == "thunderstorm")){
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