const User = require("./models/user.model");
const userData = require("../data/user.data")(User);

module.exports = {
	userData
};
