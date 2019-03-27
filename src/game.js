import InputHandler from "./input";
import Projectile from "../objects/projectile";
import Bumper from "../objects/bumper";

export default class Game {
	constructor(gameWidth, gameHeight) {
		this.gameWidth = gameWidth;
		this.gameHeight = gameHeight;
		// this.gameObjects
	}

	start() {
		new InputHandler(this);
		this.projectile = new Projectile(this);
		this.bumper = new Bumper(this);

		this.gameObjects = [this.projectile, this.bumper];
	}

	draw(ctx) {
		this.gameObjects.forEach(object => object.draw(ctx));
		let lines = 0;
		for (lines = 0; lines < this.gameWidth; lines++) {
			ctx.beginPath();
			ctx.moveTo(0, lines);
			ctx.lineTo(this.gameWidth, lines);
			ctx.stroke();
			lines++;
			lines++;
		}
	}

	update(deltaTime) {
		this.gameObjects.forEach(object => object.update(deltaTime));
	}
}
