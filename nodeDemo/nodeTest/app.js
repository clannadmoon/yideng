//express_demo.js 文件
var express = require("express");
var app = express();

app.use("/public", express.static("public"));

app.get("/index.html", function(req, res) {
  console.log(req.query);
  //res.send(`Hello World11${req.query.name}`);
  res.sendFile(__dirname + "/views/" + "index.html");
});

var server = app.listen(8081, function() {
  console.log("接口已启动");
  //   var host = server.address().address;
  //   var port = server.address().port;
  //   console.log("应用实例，访问地址为 http://%s:%s", host, port);
});

//1,安装并引入express 启动一个express的事例
//2,app listen 一个端口 启动一个服务
//3，app.get 设置基本路由
