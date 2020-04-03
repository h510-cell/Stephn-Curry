var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;

var form, player, game;

var cars, car1;

var track, car1_img;

function preload(){
car1 = createSprite(100,200);
car1.addImage("car1",car1_img);
cars = [car1];
track = loadImage("../images/track.jpg");
car1_img = loadImage("../images/car1.png");
ground = loadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(750,565);
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 1){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
