function setup() {
	createCanvas(600, 450);
	unicorn = new Unicorn();
}

function keyPressed() {
	if (key == ' ') {
		unicorn.jump();
	}
}

function draw() {
	background(220);
	unicorn.show();
	unicorn.move();
}
