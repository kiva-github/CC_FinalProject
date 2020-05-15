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
	
	
	fill("#FC582A");
	rect(30, 450, 90, 30);
	fill(255);
	text("100+", 63, 470);
	
	fill("#FF9627");
	rect(30, 480, 90, 30);
	fill(255);
	text("90-99", 61, 500);
	
	fill("#FDC130");
	rect(30, 510, 90, 30);
	fill(255);
	text("80-89", 61, 530);
	
	fill("#8CC051");
	rect(30, 540, 90, 30);
	fill(255);
	text("70-79", 61, 560);
	
	fill("#319928");
	rect(30, 570, 90, 30);
	fill(255);
	text("60-69", 61, 590);
	
	fill("#139588");
	rect(30, 600, 91, 30);
	fill(255);
	text("50-59", 61, 620);
	
	fill("#23BBCD");
	rect(30, 630, 90, 30);
	fill(255);
	text("40-49", 61, 650);
	
	fill("#1DA9F0");
	rect(30, 660, 90, 30);
	fill(255);
	text("30-39", 61, 680);
	
	fill("#557EF8");
	rect(30, 690, 90, 30);
	fill(255);
	text("20-29", 61, 710);
	
	fill("#3E57AF");
	rect(30, 720, 90, 30);
	fill(255);
	text("10-19", 61, 740);

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


