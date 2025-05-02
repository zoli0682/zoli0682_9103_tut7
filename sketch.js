function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(100);

  circle(50, 50, 25);

  rect(100, 200, 50, 50);

  line(20, 20, 40, 40);

  for (let d = 100; d > 0; d -= 10) {
    circle(50, 50, d);
  }
}
