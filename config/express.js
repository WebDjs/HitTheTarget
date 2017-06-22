const express = require("express"),
	bodyParser = require("body-parser"),
	cookieParser = require("cookie-parser"),
	session = require("express-session"),
	passport = require("passport");

module.exports = (app, envParams) => {

	// View Engine
	app.set("view engine", "pug");
	app.set("views", envParams.rootPath + "/views");

	// Parsers
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(cookieParser());

	const sessionParams = {
		secret: envParams.sessionSecret,
		resave: true,
		saveUninitialized: true,
		cookie: {
			secure: true
		}
	};
	app.use(session(sessionParams));

	// Passport init
	app.use(passport.initialize());
	app.use(passport.session());

	// Static Resources
	app.use(express.static(envParams.rootPath + "/public"));
};
