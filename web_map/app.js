var express = require('express');
var app = express();
var http = require("http");
var server = http.createServer(app);
var io = require('socket.io')(server);


server.listen(80)


socket.emit("connected");