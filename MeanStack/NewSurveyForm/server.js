var express = require("express");
var path = require("path");
var querystring = require('querystring');
var app = express();
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.get('/', function(req,res){
    res.render('index');
})
var server = app.listen(8000, function(){
    console.log("listening on port 8000");
})
var io = require('socket.io').listen(server);
io.sockets.on('connect', function(socket){
    console.log('Client/socket is connected!');
    console.log('Client/socket id is', socket.id);
    socket.on('posting_form', function(data){
        var result = querystring.parse(data.post);
        console.log(result)
        var random = Math.floor(Math.random() * 1000) + 1;
        result.random = random;
        io.emit('response_form', {response: result});
    });
})