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

        var JSON_len = data_subsets.features.length;
        for(i = 0; i < JSON_len; i++) {
            socket.emit('join', "HJANDREWS: " +  data_subsets.features[i].properties.Field1);
            socket.emit('join2', "IDTAG: " +  data_subsets.features[i].properties.Field2);
            socket.emit('join3', "TIMESTAMP: " +  data_subsets.features[i].properties.Field3);
            socket.emit('join4', "TEMPC: " +  data_subsets.features[i].properties.Field4);
            socket.emit('join5', "HUMID: " +  data_subsets.features[i].properties.Field5);
            socket.emit('join6', "LOADCELL: " +  data_subsets.features[i].properties.Field6);
            socket.emit('join7', "IRLIGHT: " +  data_subsets.features[i].properties.Field7);
            socket.emit('join8', "FULLLIGHT: " +  data_subsets.features[i].properties.Field8);
            socket.emit('join9', "BATVOLT: " +  data_subsets.features[i].properties.Field9);


        }
    });




