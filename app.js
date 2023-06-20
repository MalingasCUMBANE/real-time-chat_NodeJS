var express =  require('express')
, app = express()
, load = require('express-load')
, error = require('./middleware/error')
, server = require('http').createServer(app)
, io = require('socket.io').listen(server)


io.sockets.on('connection', function (client) {
    client.on('send-server', function (data) {
    var msg = "<b>"+data.nome+":</b> "+data.msg+"<br>";
    client.emit('send-client', msg);
    client.broadcast.emit('send-client', msg);
});
});


server.listen(3000, function(){
        console.log("Ntalk no ar.");
    });