var solo, player, porta;
var fase = 0;
var idle,run, jump;
var seta, setaImg;

function preload(){
  idle = loadAnimation("assets/Idle__000.png", "assets/Idle__008.png")
  run = loadAnimation("assets/Run__000.png", "assets/Run__009.png")
  jump = loadAnimation("assets/Jump__000.png", "assets/Jump__009.png")
  setaImg = loadImage("assets/seta.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight)

  solo = createSprite(width/2,height, width*6,width/40)
  solo.shapeColor = 'magenta';

  player = createSprite(width/10, height/1.1, width/30, height/7)
  player.addAnimation('parada', idle);
  player.addAnimation('correndo', run);
  player.addAnimation('pulando', jump);
  player.scale = width/5000
  

  seta = createSprite(width/1.1, height/1.1, width/30, height/7)
  seta.addImage(setaImg)
  seta.scale = width/70000
}

function draw() {
  background(0);
  
  player.frameDelay = 3

  if(frameCount % 10 === 0){
    if(seta.x === width/1.1){
      seta.x = width/1.11 
    }else{
      seta.x = width/1.1
    }
  }

  if(keyDown('right')){
    player.x += 5
    player.changeAnimation('correndo')
    player.mirrorX(1)
  }else if(keyDown('left')){
    player.x -= 5
    player.changeAnimation('correndo')
    player.mirrorX(-1)
  }else if(player.collide(solo)) {
    player.changeAnimation('parada')
  }
  
  if(keyDown('space')){
    player.changeAnimation('pulando')
    player.velocityY = -12
  }

  //gravidade
  player.velocityY += 0.5;
  drawSprites()
  
  player.collide(solo)

  if(player.x > width){
    fase++
    player.x = 0
  }

  if(player.x < 0){
    fase--
    player.x = width
  }

  switch(fase){
    case 0: iniciar();
    break;
    case 1: habilidades();
    break;
  }
  console.log(fase)
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)

}

function iniciar(){
  textAlign(CENTER)
  textSize(20)
  stroke("magenta")
  text("Bem vindos! \n Site em construção", width/2, height/2)
}

function habilidades(){
  textAlign(CENTER)
  textSize(20)
  stroke("magenta")
  text("Em breve contarei um pouquinho sobre tudo que aprendi nesta jornada de programação", width/2, height/2)
}
