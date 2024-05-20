let value = 0;
let a = 0.0;
let s = 0.0;

function setup() {
  var cnv = createCanvas(700,500);
  var x = (windowWidth - width) / 2; // center canvas
  var y = (windowHeight - height) / 0; // center canvas
  cnv.position(x, y);
  noStroke();
}

function draw() {
  let x = mouseX;
  let y = mouseY;
  let ix = width - mouseX;  
  let iy = height - mouseY; 
  background(value);
  fill(243,131,162);
  noStroke()
  ellipse(x, height/2, y, y);
  fill(0, 150);
  noStroke()
  ellipse(ix, height/2, iy, iy);

  a = a + 0.015;
  s = cos(a) * 2;
  scale(s);  
  textSize(60);
  strokeWeight(4)
  fill(value)
  textFont("Courier New");
  textAlign(CENTER);
  text('hidden gems',300,250);
}
