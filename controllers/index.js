const main = require("./main.controller");
const user = require("./user.controller");

module.exports = (data) => {
    return {
        main: main,
        user: user(data.userData)
    }
};
