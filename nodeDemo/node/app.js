var server = require("./http");
var route = require("./route");
server.start(route.route);
