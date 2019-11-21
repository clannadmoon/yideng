function route(pathname, response) {
  if (pathname == "/") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Home");
    response.end();
  } else if (pathname == "/index/home") {
    response.end("index");
  } else {
    response.end("404");
  }
}

exports.route = route;
