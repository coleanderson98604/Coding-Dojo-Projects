var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost/QuotingDojo');
var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 1},
    quote: {type: String, required: true, minlength:5},
    time: {type: Date, default: Date.now}
});
mongoose.model('Quote', QuoteSchema);
var User = mongoose.model('Quote');
mongoose.Promise = global.Promise;

app.get('/', function(req,res){
    res.render('index');
})
app.post('/process',function(req,res){
    console.log(req.body);
    var user = new User()
    user.name = req.body.name
    user.quote = req.body.quote
    user.save(function(err){
        if(err){
            console.log('something went wrong');
            res.render('index', {errors: user.errors})
        }
        else {
            console.log('successfully added new user');
            res.redirect('/quotes')
        }
    })
})
app.get('/quotes', function(req,res){
    User.find({},function(err,users){
        if(err){
            console.log('there seems to be problem');
        }
        else {
            console.log('success');
            res.render('quote', {quotes: users});
        }
    })
})

app.listen(8000, function(){
    console.log("listening on port 8000");
});