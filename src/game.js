export default class Game {
	constructor(gameWidth, gameHeight) {
		this.gameWidth = gameWidth;
		this.gameHeight = gameHeight;
	}

	start() {
		console.log("test from start");
	}

	draw(ctx) {
		// [...this.gameObjects, ...this.bullets, ...this.invaders].forEach(
		// 	object => object.draw(ctx)
		// );
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

	update() {}
}
