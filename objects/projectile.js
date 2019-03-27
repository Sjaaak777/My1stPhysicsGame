export default class Projectile {
	constructor(game) {
		this.game = game;
		//this.markForBounce = false;

		this.gameWidth = game.gameWidth;
		this.gameHeight = game.gameHeight;
		this.radius = 15;
		this.color = "blue";

		this.position = {
			x: 50, //game.gameWidth / 2 - this.diameter / 2,
			y: 30
		};

		this.speed = {
			x: 3,
			y: 0
		};
		this.gravity = 0.12;
		this.gravitySpeed = 0.02;
		this.bounce = 0.9;
		this.rollResistance = 0.5;
	}

	showLog() {
		console.log(this);
		//console.log(this.position.x);
		this.showDistance();
		// console.log(Math.sqrt(25));
		// console.log(Math.pow(5,2));
	}

	showDistance() {
		let distanceX = this.position.x - this.game.bumper.position.x;
		let distanceY = this.position.y - this.game.bumper.position.y;
		let distanceC = Math.sqrt(
			Math.pow(distanceX, 2) + Math.pow(distanceY, 2)
		);

		if (distanceC <= this.radius + this.game.bumper.radius) {
			//console.log("Hit", this.position.x, this.position.y);
			//console.log(distanceC);
			//this.gravityPush(2);
			//this.position.x = 50;
			//this.position.y = 30;

			this.position = this.game.bumper.position = this.position; // HAHA Cool!

			//this.speed.x = this.game.bumper.position.x + this.position.x * 0.05;
			//this.speed.y = this.game.bumper.position.y * 0.05;

			//this.speed.x = -this.speed.x * .95 ;
			//this.speed.y = -this.speed.y *.55;
		}
		// console.log(distanceX, distanceY);
		// console.log(distanceC);
	}

	gravityPush(force) {
		//this.gravity = force;
		//this.position.x += force;
		this.speed.x -= -1.5;
	}

	gravityHorizontal(force) {
		this.position.x += force;
	}

	draw(ctx) {
		//ctx.globalCompositeOperation='destination-over';
		ctx.beginPath();
		ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
		ctx.fillStyle = this.color;
		ctx.fill();
	}

	update(deltaTime) {
		this.gravitySpeed += this.gravity;

		this.position.x += this.speed.x;

		this.position.y += this.speed.y + this.gravitySpeed;
		this.hitBottom();
		this.showDistance();

		if (this.speed.x > 0) {
			this.speed.x -= (this.bounce - this.gravity) / 95;
		}
		if (
			this.position.x + this.radius > this.gameWidth ||
			this.position.x - this.radius < 0
		) {
			//console.log(this.position.x);
			this.speed.x = -this.speed.x;
		}

		// if(this.position.y + this.radius > this.game.bumper.position.y + this.game.bumper.radius //&&
		// 	//this.position.x + this.radius > this.game.bumper.position.x //&&
		// 	//&& this.position.x + this.radius < this.game.bumper.position.x
		// 	){
		// this.speed.x = -this.speed.x;
		// }
	}

	hitBottom() {
		let distance = this.x + this.game.bumper.x;
		//	console.log(distance);
		if (this.position.y > this.gameHeight - this.radius) {
			this.position.y = this.gameHeight - this.radius;
			this.gravitySpeed = -(this.gravitySpeed * this.bounce);
			//console.log(this.position.y);
		}
	}
}
