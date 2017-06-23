const utils = (() => {
	return {
		randomBetween: (min, max) => {
			if (!max) {
				max = min;
				min = 0;
			}
			return (Math.random() * (max - min) + min) | 0;
		},

		radians: (angleInt) => {

			let radians = (angleInt * Math.PI) / 180;

			return radians;
		},

		delta: (len, ang) => {
			return {
				X: len * Math.cos(ang),
				Y: len * Math.sin(ang)
			};
		},
	}
})();
