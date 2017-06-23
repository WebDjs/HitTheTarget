const render = {
	tank: (ctx, tank) => {
		Canvas.drawRectangle(ctx, tank.X, tank.Y, tank.W, tank.H, "green", "black");
	},
	gun: (ctx, gun) => {
		Canvas.strokeLine(ctx, gun.X, gun.Y, gun.W, gun.H, "black");
	},
	target: (ctx, target) => {
		Canvas.drawCircle(ctx, target.X, target.Y, target.W, "red", "yellow")
	}
}