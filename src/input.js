export default class InputHandler {
	constructor(game) {
		document.addEventListener("keydown", event => {
			switch (event.keyCode) {
				// DOWN: LEFT ARROW
				case 37:
					game.projectile.gravityHorizontal(-2);
					break;

				// DOWN: RIGHT ARROW
				case 39:
					game.projectile.gravityHorizontal(2);
					break;

				//DOWN: DOWN ARROW
				case 40:
					game.projectile.showLog();
					break;

				//DOWN: SPACE BAR
				case 32:
					game.projectile.gravityPush(-0.2);
			}
		});

		document.addEventListener("keyup", event => {
			switch (event.keyCode) {
				//UP: SPACE BAR
				case 32:
					game.projectile.gravityPush(0.1);
					break;

				// UP: LEFT ARROW
				case 37:
					game.projectile.gravityHorizontal(-2);
					break;

				//UP: RIGHT ARROW
				case 39:
					game.projectile.gravityHorizontal(0.1);
					break;
			}
		});
	}
}
