const controller = require("../controllers");

module.exports = (app) => {
    app.get("/home", controller.main.home);
    app.get("/gallery", controller.main.gallery);

    app.get("*", (req, res) => {
        res.redirect("/home");
    });
}