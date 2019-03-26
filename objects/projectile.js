export default class Projectile {
	constructor(game) {
		this.game = game;
		this.gameWidth = game.gameWidth;
		this.gameHeight = game.gameHeight;
		this.diameter = 5;

		this.position = {
			x: 50, //game.gameWidth / 2 - this.diameter / 2,
			y: 30
		};

		this.speed = {
			x: 5,
			y: 0
		};
		this.gravity = 0.2;
		this.gravitySpeed = 0.8;
		this.bounce = 0.9;
	}

	showLog() {
		console.log(this);
	}

	gravityPush(force) {
		this.gravity = force;
		this.position.x += force;
		this.speed.x -= -1.5;
	}

	gravityHorizontal(force) {
		this.position.x += force;
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.arc(this.position.x, this.position.y, this.diameter, 0, 2 * Math.PI);
		ctx.fillStyle = "black";
		ctx.fill();
	}

	update(deltaTime) {
		this.gravitySpeed += this.gravity;

		this.position.x += this.speed.x;

		this.position.y += this.speed.y + this.gravitySpeed;
		this.hitBottom();

		if (this.speed.x > 0) {
			this.speed.x -= (this.bounce - this.gravity) / 95;
		}
		if (
			this.position.x + this.diameter > this.gameWidth ||
			this.position.x < 0
		) {
			this.speed.x = -this.speed.x;
		}
	}

	hitBottom() {
		if (this.position.y > this.gameHeight - this.diameter) {
			this.position.y = this.gameHeight - this.diameter;
			this.gravitySpeed = -(this.gravitySpeed * this.bounce);
		}
	}
}
