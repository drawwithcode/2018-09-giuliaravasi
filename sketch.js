// var myLoc;
var myMap;
var canvas;
var mappa = new Mappa('MapboxGL', 'pk.eyJ1IjoiZ2l1bGlhcmF2YXNpIiwiYSI6ImNqb3F4bHg3ZjA5djYzdXB0cWJlM3YwOWsifQ.XdvASWdDlrCulPlGUTx6fA');

var centroMappaLat = 43.7796159;
var centroMappaLon = 11.1709281;

var touristLat = 45.4640976;
var touristLon = 9.187378;

var swimmerLat = 44.463540;
var swimmerLon = 12.903218;

var hikerLat = 46.5007282;
var hikerLon = 11.8202253;

var chefLat = 41.2236392;
var chefLon = 15.3373339;

var musicianLat = 41.9056987;
var musicianLon = 12.4673659;

var imagePope;
var imageTourist;
var imageSwimmer;
var imageHiker;

var options = {
  lat: centroMappaLat,
  lng: centroMappaLon,
  zoom: 5,
  style: 'mapbox://styles/giuliaravasi/cjoyvsdla9ot82so7hpkzykm2'
}

function preload(){
  myLoc = getCurrentPosition();
  imageTourist = loadImage('./assets/tourist.svg');
  imageSwimmer = loadImage('./assets/swimmer.svg');
  imageHiker = loadImage('./assets/hiker.svg');
  imageChef = loadImage('./assets/chef.svg');
  imageMusician = loadImage('./assets/musician.svg')
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
}

function draw() {
  clear();

var point2 = myMap.latLngToPixel(touristLat, touristLon);
image(imageTourist, point2.x, point2.y, imageTourist.width/11, imageTourist.height/11);

var point3 = myMap.latLngToPixel(swimmerLat, swimmerLon);
image(imageSwimmer, point3.x, point3.y, imageSwimmer.width/3, imageSwimmer.height/3);

var point4 = myMap.latLngToPixel(hikerLat, hikerLon);
image(imageHiker, point4.x - 20, point4.y - 20, imageHiker.width/11, imageHiker.height/11);

var point5 = myMap.latLngToPixel(chefLat, chefLon);
image(imageChef, point5.x - 20, point5.y - 20, imageChef.width/11, imageChef.height/11);

var point6 = myMap.latLngToPixel(musicianLat, musicianLon);
image(imageMusician, point6.x - 20, point6.y - 20, imageMusician.width/3, imageMusician.height/3);

if (mouseIsPressed) {
  fill('#cbd2d3');
  noStroke();
  // rect(point4.x + 50, point4.y - 15, 120, 50);
  // rect(point2.x - 130, point2.y - 15, 120, 70);

  fill(0);
  textSize(11);
  textAlign(CENTER);
  textStyle(BOLD);

  text('This is Joanne,', point2.x - 80, point2.y + 15);
  text('she has just landed in Milan', point2.x - 80, point2.y + 30);
  text('and is ready to travel', point2.x - 80, point2.y + 45);
  text('all around Italy.', point2.x - 80, point2.y + 60);

  text('This is Roberto,', point3.x + 130, point3.y + 15);
  text('he is taking a vacation', point3.x + 130, point3.y + 30);
  text('and taking a relaxing swim', point3.x + 130, point3.y + 45);

  text('This is Alberto,', point4.x + 100, point4.y);
  text('he enjoys hiking', point4.x + 100, point4.y + 15);
  text('to free his mind.', point4.x + 100, point4.y + 30);

  text('This is Tommaso,', point5.x + 95, point5.y);
  text('he is a chef and owns', point5.x + 95, point5.y + 15);
  text('a really popular restaurant.', point5.x + 95, point5.y + 30);

  text('This is Veronica,', point6.x - 115, point6.y - 5);
  text('she loves music, plays the guitar', point6.x - 115, point6.y + 10);
  text('and she often plays in plazas.', point6.x - 115, point6.y + 25);
}
push();
fill(0);
noStroke();
textSize(16);
textAlign(CENTER);
textStyle(BOLD);
text('Press the mouse to find out more about these people!', width/2, height - 50);
pop();
}
