module.exports = {
	home: (req, res, next) => {
		res.render("home", {});
	},
	gallery: (req, res, next) => {
		res.render("gallery", {});
	}
}