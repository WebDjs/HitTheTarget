const data = require("../data");
const controller = require("../controllers")(data);

module.exports = (app) => {
    app.get("/home", controller.main.home);
    app.get("/gallery", controller.main.gallery);
    app.get("/log-in", controller.user.signUp);

    app.get("*", (req, res) => {
        res.redirect("/home");
    });
}
