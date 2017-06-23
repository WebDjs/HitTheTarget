const canvasBg = document.getElementById("background-canvas");
const canvasMain = document.getElementById("main-canvas");

const ctxBg = canvasBg.getContext("2d");
const ctxMain = canvasMain.getContext("2d");

const MagicNumber = 42;
const CanvasWidth = canvasBg.width;
const CanvasHeight = canvasBg.height;

// Game
let tank = new Tank();
tank.X = 0;
tank.Y = CanvasHeight - MagicNumber / 2;
tank.W = MagicNumber;
tank.H = MagicNumber / 2;

let gun = new Gun();
gun.X = tank.X + MagicNumber / 2;
gun.Y = tank.Y;
gun.W = 2 * MagicNumber / 3;
// angle
gun.H = 45;

let target = new Target();
target.W = MagicNumber / 10;
target.X = utils.randomBetween(CanvasWidth / 2 + target.W / 2, CanvasWidth - target.W / 2);
target.Y = utils.randomBetween(MagicNumber / 20, CanvasHeight - target.W / 2);

let bullet = new Bullet();
bullet.W = MagicNumber / 10;
bullet.X = gun.X + utils.delta(gun.W, utils.radians(gun.H)).X;
bullet.Y = gun.Y - utils.delta(gun.W, utils.radians(gun.H)).Y;

(function gameLoop() {
	render.tank(ctxMain, tank);
	render.gun(ctxMain, gun);
	render.target(ctxMain, target);
	render.bullet(ctxMain, bullet);

	window.requestAnimationFrame(gameLoop);
})();


document.addEventListener("keydown", function (e) {
	// space and arrow keys free
	if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
		e.preventDefault();
		render.contextClear(ctxMain, CanvasWidth, CanvasHeight);
	}

	if (!e) {
		e = window.event;
	}

	switch (e.keyCode) {
		case 38: // up arrow - angle
			gun.H += 5;
			bullet.X = gun.X + utils.delta(gun.W, utils.radians(gun.H)).X;
			bullet.Y = gun.Y - utils.delta(gun.W, utils.radians(gun.H)).Y;
			break;
		case 40: // down arrow - angle
			gun.H -= 5;
			bullet.X = gun.X + utils.delta(gun.W, utils.radians(gun.H)).X;
			bullet.Y = gun.Y - utils.delta(gun.W, utils.radians(gun.H)).Y;
			break;
		case 37: // left arrow - move L
			let temp = tank.X - 1;
			if (temp >= 0) {
				tank.X--;
				gun.X--;
				bullet.X--;
			}
			break;
		case 39: // right arrow - move R
			let tempN = tank.X + 1;
			if (tempN < CanvasWidth / 3) {
				tank.X++;
				gun.X++;
				bullet.X++;
			}
			break;
		case 32: // space - fire
			alert("Fire");
			break;
	}
}, false);
