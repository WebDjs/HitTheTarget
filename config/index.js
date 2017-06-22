const consts = require("./constants.json");
const path = require("path");
const rootPath = path.normalize(__dirname + "/../");

module.exports = {
	development: {
		rootPath: rootPath,
		db: consts.conectionString || "mongodb://localhost:27017/appdb",
		sessionSecret: "session-secret",
		webTokenSecret: "web-token-secret",
		cookieName: "cookie-name",
		port: 3333
	},
	production: {
		rootPath: rootPath,
		db: consts.conectionString,
		sessionSecret: process.env.SESSION_SECRET,
		webTokenSecret: process.env.WEB_TOKEN_SECRET,
		cookieName: process.env.COOKIE_NAME,
		port: process.env.PORT
	}
}
