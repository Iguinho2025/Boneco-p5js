function setup() {
  createCanvas(400, 400);
}

let olhoX;
let olhoY;

function draw() {
  background("rgb(17,15,15)");
  //rosto
  fill("#FFEB3B");
  stroke("#8BC34A");
  strokeWeight(4);
  circle(200, 200, 300);

  //olhos
  fill("rgb(0,0,0)");
  stroke("#00BCD4");
  strokeWeight(4);
  circle(150, 150, 60);
  circle(250, 150, 60);

  //boca
  fill("rgb(0,0,177)");
  stroke("#9C27B0");
  strokeWeight(4);
  line(134, 265, 255, 265);
  line(256, 204, 230, 100);

  //nariz
  fill("#00BCD4");
  stroke("#E91E63");
  strokeWeight(4);
  triangle(202, 183, 150, 224, 242, 223);

  //pupila2
  fill("rgb(241,255,15)");
  stroke("#2196F3");
  strokeWeight(4);
  //circle(150, 151, 25);
  //circle(250, 151, 25);

 

  //pupilas
  fill("#03A9F4");
  stroke("#9E9E9E");
  strokeWeight(4);
  //circle(150, 150, 10)//olho esquerdo
  // circle(250, 150, 10)//olho direito

  olhoX = map(mouseX, 0, 400, 138, 164);
  olhoY = map(mouseY, 0, 400,138, 164);

  circle(olhoX, olhoY, 10);
  circle(olhoX+100, olhoY, 10);

  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
}
