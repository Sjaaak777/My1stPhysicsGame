export default class Bumper {
	constructor(game) {
		this.game = game;
		this.gameWidth = game.gameWidth;
		this.gameHeight = game.gameHeight;
		this.color = "orange";
		this.radius = 30;

		this.position = {
			x: 190,
			y: 250
		};
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
		ctx.fillStyle = this.color;
		ctx.fill();
	}

	update(deltaTime) {}
}
