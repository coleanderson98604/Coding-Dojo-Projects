var express = require("express");
var path = require("path");
var app = express();
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.get('/', function(req,res){
    res.render('index');
});
var server = app.listen(8000, function(){
    console.log("listening on port 8000");
})
var io = require('socket.io').listen(server);
let counter = 0;
io.sockets.on('connect', function(socket){
    io.emit('current_counter', {current: counter});
    console.log('Client/socket is connected!');
    console.log('Client/socket id is', socket.id);
    socket.on('button_plus', function(data){
        counter += 1;
        console.log(counter);
        io.emit('count_up1',{number: counter});
    })
    socket.on('button_reset',function(data){
        counter = 0;
        io.emit('reset_counter', {reset: counter})
    })
})