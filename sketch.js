var position; //not call "location" because is a name already taken, it's the location in the web browser.
var distance;

//Museo Novecento Lat & Lon
var museonoveLat = 45.5801095;
var museonoveLon = 9.0922707;
//Mudec Lat & Lon
var mudecLat = 45.5642616;
var mudecLon = 9.0595558;
//Fondazione Prada Lat & Lon
var fondazionepradaLat = 45.5642616;
var fondazionepradaLon = 9.0595558;

//function to get my position
function preload(){
  position = getCurrentPosition();
  console.log(position);
}

function setup() {
createCanvas(windowWidth,windowHeight);
background("lightblue");

var museonovecento = createButton("Museo del Novecento");
museonovecento.position(windowWidth*2/7, windowHeight/2);
museonovecento.mousePressed(museonovecentodistance);

var mudec = createButton("Mudec");
mudec.position(windowWidth*3.5/7, windowHeight/2);
mudec.mousePressed(mudecdistance);

var fondazioneprada = createButton("Fondazione Prada");
fondazioneprada.position(windowWidth*4.5/7, windowHeight/2);
fondazioneprada.mousePressed(fondazionedistance);

}
 function museonovecentodistance() {
   var distance = calcGeoDistance(position.latitude, position.longitude, museonoveLat, museonoveLon, "km");
   pmuseum = createElement("p", "You're " + Math.round(distance) + " km far away");
   pmuseum.position(windowWidth*2/7, windowHeight*3/5);
   console.log("ciao");
 }

 function mudecdistance() {

   var distance = calcGeoDistance(position.latitude, position.longitude, mudecLat, mudecLon, "km");
   pmudec = createElement("p", "You're " + Math.round(distance) + "km far away");
   pmudec.position(windowWidth*3.3/7, windowHeight*3/5);
   console.log("ciao");
 }

 function fondazionedistance() {

   var distance = calcGeoDistance(position.latitude, position.longitude, fondazionepradaLat, fondazionepradaLon, "km");
   pfondazione = createElement("p", "You're " + Math.round(distance) + " km far away ");
   pfondazione.position(windowWidth*4.5/7, windowHeight*3/5);
   console.log("ciao");
 }

function draw() {
  var howfar = "How far are you from...?"; //text
  textFont("RALEWAY");
  textAlign(CENTER);
  textSize(70);
  fill(color("#ff00ff"));
  text(howfar, windowWidth/2, windowHeight / 2 - 100);

  var museums = "click on the buttons to discover how far are you from these museums :)"; //text
  textFont("RALEWAY");
  textAlign(CENTER);
  textSize(30);
  fill(color("#ff00ff"));
  text(museums, windowWidth/2, windowHeight / 2 - 50);
}
