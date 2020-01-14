var position; //not call "location" because is a name already taken, it's the location in the web browser.
var distance;
let myMap;
let canvas;
const mappa = new Mappa('MapboxGL', "pk.eyJ1Ijoia2Fyb3Rha2lkIiwiYSI6ImNrMm1oZzl2djBnbzYzY29mcHI1aHJ1b2oifQ.1XOszSMpdhXzJh2c6Y_45g");
var latit = 45.4642959;
var longit = 9.1568899;

//Museo Novecento Lat & Lon
var museonoveLat = 45.4643014;
var museonoveLon = 9.1867783;
//Mudec Lat & Lon
var mudecLat = 45.4516914;
var mudecLon = 9.159253;
//Fondazione Prada Lat & Lon
var fondazionepradaLat = 45.4537958;
var fondazionepradaLon = 9.1805395;

const options = {
  lat: latit,
  lng: longit,
  zoom: 12,
  style: "mapbox://styles/mapbox/traffic-night-v2"
}

//function to get my position
function preload() {
  position = getCurrentPosition();
  console.log(position);
}

function setup() {
  createCanvas(windowWidth, windowHeight / 8)

  var museonovecento = createButton("Museo del Novecento");
  museonovecento.position(windowWidth*2/7, windowHeight*8/9);
  museonovecento.mousePressed(museonovecentodistance);

  var mudec = createButton("Mudec");
  mudec.position(windowWidth*3.5/7, windowHeight*8/9);
  mudec.mousePressed(mudecdistance);

  var fondazioneprada = createButton("Fondazione Prada");
  fondazioneprada.position(windowWidth*4.5/7, windowHeight*8/9);
  fondazioneprada.mousePressed(fondazionedistance);

  canvas = createCanvas(windowWidth, windowHeight * 7 / 8);

  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);



  var howfar = "How far are you from...?"; //text
  textFont("RALEWAY");
  textAlign(CENTER);
  textSize(70);
  fill(color("#ff00ff"));
  text(howfar, windowWidth / 2, windowHeight / 5);

  var museums = "click on the buttons to discover how far are you from these museums :)"; //text
  textFont("RALEWAY");
  textAlign(CENTER);
  textSize(30);
  fill(color("#ff00ff"));
  text(museums, windowWidth / 2, windowHeight / 4);
}

function museonovecentodistance() {
  var distance = calcGeoDistance(position.latitude, position.longitude, museonoveLat, museonoveLon, "km");
  pmuseum = createElement("p", "You're " + Math.round(distance) + " km far away");
  pmuseum.position(windowWidth * 2 / 7, windowHeight * 9/10);
}

  function mudecdistance() {
    var distance = calcGeoDistance(position.latitude, position.longitude, mudecLat, mudecLon, "km");
    pmudec = createElement("p", "You're " + Math.round(distance) + "km far away");
    pmudec.position(windowWidth * 3.3 / 7, windowHeight * 9/10);

  }

  function fondazionedistance() {
    var distance = calcGeoDistance(position.latitude, position.longitude, fondazionepradaLat, fondazionepradaLon, "km");
    pfondazione = createElement("p", "You're " + Math.round(distance) + " km far away ");
    pfondazione.position(windowWidth * 4.5 / 7, windowHeight * 9/10);

  }




function draw() {
clear()

var mudec = myMap.latLngToPixel(mudecLat, mudecLon);
rectMode(CENTER)
fill('black')
rect(mudec.x, mudec.y, 20, 10)
fill('fuchsia');
textStyle(BOLD)
textAlign(CENTER, CENTER)
textSize(15)
noStroke();
text('Mudec', mudec.x, mudec.y)

var prada = myMap.latLngToPixel(fondazionepradaLat, fondazionepradaLon);
rectMode(CENTER)
fill('black')
rect(prada.x, prada.y, 20, 10)
fill('fuchsia');
textStyle(BOLD)
textAlign(CENTER, CENTER)
textSize(15)
noStroke();
text('Fondazione Prada', prada.x, prada.y)

var nove = myMap.latLngToPixel(museonoveLat, museonoveLon);
rectMode(CENTER)
fill('black')
rect(nove.x, nove.y, 20, 10)
fill('fuchsia');
textStyle(BOLD)
textAlign(CENTER, CENTER)
textSize(15)
noStroke();
text('Museo del Novecento', nove.x, nove.y)
}
