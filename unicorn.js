class Unicorn {
	constructor() {
		this.r = 100;
		this.x = 50;
		this.y = height - this.r;
		this.vy = 0;
		this.gravity = 1.5;
	}

	jump() {
		if (this.y == height - this.r) {
			this.vy = -25;
		}
	}

	hits(train) {
		let x1 = this.x + this.r * 0.7;
		let y1 = this.y + this.r * 0.7;
		let x2 = train.x + train.r * 0.7;
		let y2 = train.y + train.r * 0.7;

		return collideCircleCircle(x1, y1, this.r, x2, y2, train.r);
	}

	move() {
		this.y += this.vy;
		this.vy += this.gravity;
		this.y = constrain(this.y, 0, height - this.r);
	}

	show() {
		image(uImg, this.x, this.y, this.r, this.r);
	}
}
