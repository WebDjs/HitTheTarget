const express = require("express");
const app = express();
const env = process.env.NODE_ENV || "development";
const envParams = require("./config")[env];

require("./config/express")(app, envParams);
require("./config/mongoose")(envParams);
require("./config/passport")();
require("./router")(app);

const port = envParams.port;

app.listen(port);
console.log(`Server running on port: ${port}`);

if (env === "development") {
	require("openurl").open(`http://localhost:${port}`);
}
