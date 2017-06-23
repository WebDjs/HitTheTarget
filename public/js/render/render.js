const render = {
	tank: (ctx, tank) => {
		Canvas.drawRectangle(ctx, tank.X, tank.Y, tank.W, tank.H, "green", "black");
	},
	gun: (ctx, gun) => {
		const len = gun.W;
		const ang = utils.radians(gun.H);
		const w = gun.X + utils.delta(len, ang).X;
		const h = gun.Y - utils.delta(len, ang).Y;

		Canvas.strokeLine(ctx, gun.X, gun.Y, w, h, "black");
	},
	target: (ctx, target) => {
		Canvas.drawCircle(ctx, target.X, target.Y, target.W, "red", "yellow")
	},
	bullet: (ctx, bullet) => {
		Canvas.drawCircle(ctx, bullet.X, bullet.Y, bullet.W, "magenta", "orange")
	},
	contextClear: (ctx, w, h) => {
		ctx.clearRect(0, 0, w, h);
	}
}
