const canvasBg = document.getElementById("background-canvas");
const canvasMain = document.getElementById("main-canvas");

const ctxBg = canvasBg.getContext("2d");
const ctxMain = canvasMain.getContext("2d");

const MagicNumber = 60;
const CanvasWidth = canvasBg.width;
const CanvasHeight = canvasBg.height;

document.addEventListener("keydown", function (e) {
	// space and arrow keys free
	if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
		e.preventDefault();
	}

	if (!e) {
		e = window.event;
	}

	switch (e.keyCode) {
		case 38: // up arrow - angle
			alert("Up");
			break;
		case 40: // down arrow - angle
			alert("Down");
			break;
		case 37: // left arrow - move L
			alert("Left");
			break;
		case 39: // right arrow - move R
			alert("Right");
			break;
		case 32: // space - fire
			alert("Fire");
			break;
	}
}, false);


let tank = new Tank();
tank.X = 0;
tank.Y = CanvasHeight - MagicNumber / 2;
tank.W = MagicNumber;
tank.H = MagicNumber / 2;

render.tank(ctxMain, tank);

let gun = new Gun();
gun.X = tank.X + MagicNumber / 2;
gun.Y = tank.Y;
gun.W = tank.X + MagicNumber;
gun.H = tank.Y - MagicNumber / 2;

render.gun(ctxMain, gun);

let target = new Target();
target.X = utils.randomBetween(CanvasWidth / 2 + MagicNumber / 20, CanvasWidth - MagicNumber / 20);
target.Y = utils.randomBetween(MagicNumber / 20, CanvasHeight - MagicNumber / 20);
target.W = MagicNumber / 10;

render.target(ctxMain, target);
