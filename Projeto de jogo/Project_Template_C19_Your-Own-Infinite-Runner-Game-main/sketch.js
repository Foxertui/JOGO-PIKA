var life = 3

function preload(){
 heroi = loadImage("mago 2.png")
 vilão = loadImage("Mago monstro.png")
 bola_vermelha = loadImage("Bola vermelha.png")
 bola_azul = loadImage ("bola azul 2.png")
 Cenario = loadImage ("cenario.png")
 Rosto = loadImage("Cabeça.png")
 Vida = loadImage("Barra de vida.png")
}


function setup() {
 createCanvas(1400,700)
 evil = createSprite(700,450)
 evil.addImage(vilão)
 evil.scale = 1.3

 good = createSprite(400,630)
 good.addImage(heroi)
 good.scale = 0.3

 teto = createSprite(700,675,1400,2)
 cabeça = createSprite(1250,675)
 cabeça.addImage(Rosto)
 cabeça.scale = 0.2
 cabeça.mirrorX(-1)
 
 parede = createSprite(700,630,120,120)
 parede.visible = false
 
 xao = createSprite(0,500,1,700)
 xao2 = createSprite(1401,500,1,700)

 mao_esquerda= new Group()
 mao_direita = new Group()
 deus = new Group()



 cabeça2 = createSprite(1300,675)
 cabeça2.addImage(Rosto)
 cabeça2.scale = 0.2
 cabeça2.mirrorX(-1)

 cabeça3 = createSprite(1350,675)
 cabeça3.addImage(Rosto)
 cabeça3.scale = 0.2
 cabeça3.mirrorX(-1)
 
 
 chapeu = createSprite(1100,100)
 chapeu.addImage(Vida)
 chapeu.scale = 0.6
 
 teto.visible = false

}



function kill(){
   if(frameCount%80===0){
      K = createSprite(580,350)
      K.velocityY = 10
      K.lifetime = 700/12
      K.addImage(bola_azul)
      K.scale = 0.2
      mao_esquerda.add(K)
   }
     if(frameCount%80===0){
      K2 = createSprite(820,350)
      K2.velocityY = 10
      K2.lifetime = 700/12
      K2.addImage(bola_azul)
      K2.scale = 0.2
      mao_direita.add(K2)
   }



}



function fire(){
 if(frameCount%120===0){
 evil_fire = createSprite(200,0)
 evil_fire.x = Math.round(random(0,1400))
 evil_fire.velocityY = 10
 evil_fire.lifetime = 700/12
 evil_fire.addImage(bola_azul)
 evil_fire.scale = 0.5
 deus.add(evil_fire)
}



}

function draw() {
 image(Cenario,0,0,1400,700)
 drawSprites()
 
 fill("red")
 rect(1005,93,230,20)
 
 fire()
 kill()
 
 if(mao_esquerda.isTouching(good)){
   life = life-1
}
 if(mao_direita.isTouching(good)){
   life = life -1
 }
 if(deus.isTouching(good)){
   life = life -1
 }
 
 if(keyIsDown(LEFT_ARROW)){
    good.x = good.x - 10
    good.mirrorX(+1)

}
 if(keyIsDown(RIGHT_ARROW)){
    good.x = good.x + 10
    good.mirrorX(-1)
}
if(keyIsDown(UP_ARROW)&&good.y>600){
   good.velocityY = -12
    
}
good.velocityY = good.velocityY + 0.5
good.collide(teto)
good.collide(parede)
good.collide(xao)
good.collide(xao2)

if(good.x>width/2+1){
evil.mirrorX(+1)
}
if(good.x<width/2+1){
   evil.mirrorX(-1)
}

if(keyIsDown(LEFT_ARROW)){
   
   if (keyWentDown("space")){
      shoot = createSprite(200,200)
   
      shoot.x = shoot.x - 20
      shoot.mirrorX(-1)
      shoot.velocityX = -20
      
      shoot.lifetime = 700/12
      shoot.addImage(bola_vermelha)
      shoot.x = good.x 
      shoot.y = good.y + 15
      shoot.scale = 0.08}
}
if(keyIsDown(RIGHT_ARROW)){
   
   
   if (keyWentDown("space")){
      shoot = createSprite(200,200)
      
      shoot.x = shoot.x + 20
      shoot.mirrorX(+1)
      shoot.velocityX = +20


      shoot.lifetime = 700/12
      shoot.addImage(bola_vermelha)
      shoot.x = good.x 
      shoot.y = good.y + 15
      shoot.scale = 0.08}
}




}



