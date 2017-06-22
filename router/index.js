const controllers = require("../controllers");

module.exports = (app, express) => {
    app.get("/", controllers.main.home);

    app.get("*", function (req, res) {
        res.redirect("/");
    });
}