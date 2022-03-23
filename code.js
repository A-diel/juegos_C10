var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["393115b4-dc4b-4e0b-9bf4-68f9ab876267","8279b042-3b57-4538-aaaa-c5814fd787dd"],"propsByKey":{"393115b4-dc4b-4e0b-9bf4-68f9ab876267":{"name":"nabe","sourceUrl":"assets/api/v1/animation-library/gamelab/7gpLosu_M5qaSpkH46t.FFebtLz8CSQ1/category_vehicles/enemyBlack2.png","frameSize":{"x":104,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"7gpLosu_M5qaSpkH46t.FFebtLz8CSQ1","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7gpLosu_M5qaSpkH46t.FFebtLz8CSQ1/category_vehicles/enemyBlack2.png"},"8279b042-3b57-4538-aaaa-c5814fd787dd":{"name":"niño","sourceUrl":"assets/api/v1/animation-library/gamelab/DK8.stYcZlziAImCg36Fa7yHu1S4LUhW/category_faces/kidportrait_07.png","frameSize":{"x":264,"y":370},"frameCount":1,"looping":true,"frameDelay":2,"version":"DK8.stYcZlziAImCg36Fa7yHu1S4LUhW","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":370},"rootRelativePath":"assets/api/v1/animation-library/gamelab/DK8.stYcZlziAImCg36Fa7yHu1S4LUhW/category_faces/kidportrait_07.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  sam.setAnimation("niño") ;
  sam.scale=0.1;
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car1.setAnimation("nabe") ;
  car1.scale=0.3;
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car2.setAnimation("nabe") ;
  car2.scale=0.3;
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car3.setAnimation("nabe") ;
  car3.scale=0.3;
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  car4.setAnimation("nabe") ;
  car4.scale=0.3;
  
  
  car1.velocityY = 6;
  car2.velocityY = 6;
  car3.velocityY = -8;
  car4.velocityY = -8;
 

function draw() {
  background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
  
 
  if(keyDown("right")){
    sam.x = sam.x + 2;
  }
  if(keyDown("left")){
    sam.x = sam.x - 2;
  }
  
  if(
     sam.isTouching(car1)||
     sam.isTouching(car2)||
     sam.isTouching(car3)||
     sam.isTouching(car4))
  {
     sam.x = 20;
     sam.y = 190;
     life = life + 1;
  }
  
 drawSprites();
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
