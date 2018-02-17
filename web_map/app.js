var express = require('express');
var app = express();
var http = require("http");
var server = http.createServer(app);
var io = require('socket.io')(server);
var fs = require('fs');
var data = fs.readFileSync('HJ-Andrews-Forest-Data-Log.geojson', 'utf8');
var data_subsets = JSON.parse(data);




server.listen(80)

app.use(express.static(__dirname ));


    io.sockets.on('connection', function (socket) {


            socket.emit('join',  data_subsets);



    });




