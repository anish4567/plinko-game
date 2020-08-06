const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var ground, engine, world
var divisions=[]
var plinkos=[]
var particles=[]
function setup() {
  createCanvas(800,800);
engine=Engine.create()
world=engine.world
ground=new Ground(400,780,800,20)
for(var k=0;k<width;k=k+80){
divisions.push(new Division(k,650,10,300))
}
for(var j=75;j<width;j=j+50){
plinkos.push(new Plinko(j,75))

}
for(var j=50;j<width;j=j+50){
  plinkos.push(new Plinko(j,175))
  
  }
  for(var j=75;j<width;j=j+50){
    plinkos.push(new Plinko(j,275))
    
    }
}



function draw() {
  background(255,255,255);  
  drawSprites();
  Engine.update(engine)
  ground.display();
  for(var i=0;i<plinkos.length;i++){
plinkos[i].display()

  }
  if(frameCount%60===0){
particles.push(new Particles(random(370,430),10))

  }
  for(var j=0;j<particles.length;j++){
    particles[j].display()
  }
  for(var k=0;k<divisions.length;k++){
    divisions[k].display()
  }
}