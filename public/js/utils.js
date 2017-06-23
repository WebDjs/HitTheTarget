const utils = (() => {
	return {
		randomBetween: (min, max) => {
			if (!max) {
				max = min;
				min = 0;
			}
			return (Math.random() * (max - min) + min) | 0;
		}
	}
})();
