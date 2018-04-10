var express = require("express");
var path = require("path");
var session = require("express-session");
var app = express();
app.use(session({secret: 'codingdefined', resave: false, saveUninitialized: true}));
var sharesession = require("express-socket.io-session");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
var messages = [];
app.get('/',function(req,res){
    res.render('index');
})
// app.post('/process', function(req,res){
//     messages.push(req.body.message);
//     res.redirect('/')
// })
var server = app.listen(8000, function(){
    console.log("listening on port 8000");
})
var users = [];
var io = require('socket.io').listen(server);
io.sockets.on('connect', function(socket){
    console.log('Client/socket is connected!');
    console.log('Client/socket id is', socket.id);
    socket.on('new_user',function(data){
        console.log(data.NewUser);
        users.push(data.NewUser);
        console.log(users);
        socket.handshake.session = data.NewUser;
        var user = socket.handshake.session;
        console.log(socket.handshake.session);
        socket.broadcast.emit('alert_user', {person: user});
        socket.emit('messages', {message: messages});
    });
    socket.on('newmessage',function(data){
        var message = `${socket.handshake.session}: ${data.messages}`
        messages.push(message);
        io.emit('messages', {message: messages})
    })
});