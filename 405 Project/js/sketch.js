//https://p5js.org
let x1 = 250;
let y1 = 250;

let r = 0;
let b = 0;
let g = 0;

let diameter = 100;

function setup()
{
  createCanvas(594, 841);

}

function draw()
{


  var xSize = [50,100,150,200];
  var ySize = [50,100,150,200];

  var Rectangle =
  {
    width:100,
    height:100,
    x:200,
    y:200,
  };

  x1 += random(-10, 10);
  y1 += random(-10,10);
  x1 = constrain(x1,0,500);
  y1 = constrain(y1, 0, 500);
  if (mouseIsPressed)
  {
    r = random(255);
    b = random(255);
    g = random(255);

  }
  noStroke();
  fill(r,g,b,100);
  ellipse(x1,y1, diameter, diameter);


}
