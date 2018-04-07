var express = require("express");
var session = require("express-session");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({secret: 'codingdojorocks'}));
app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

app.listen(8000, function(){
    console.log("listening on port 8000")
})