class ObjectModel {
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}

	get X() {
		return this.x;
	}
	set X(x) {
		this.x = x;
	}

	get Y() {
		return this.y;
	}
	set Y(y) {
		this.y = y;
	}

	get W() {
		return this.w;
	}
	set W(w) {
		this.w = w;
	}

	get H() {
		return this.h;
	}
	set H(h) {
		this.h = h;
	}
}
