var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost/basic_mongoose');
var UserSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 6},
    age: { type: Number, required: true, min: 1, max: 150}
},{timestamps: true});
mongoose.model('User', UserSchema);
var User = mongoose.model('User');
mongoose.Promise = global.Promise;

app.get('/', function(req,res){
    User.find({},function(err,users){
        if(err){
            console.log('there seems to be a problem');
        }
        else {
            console.log(users);
            res.render('index', {users: users});
        }
    })
})
app.post('/users',function(req,res){
    console.log(req.body);
    var user = new User({name: req.body.username, age: req.body.age});
    user.save(function(err){
        if(err){
            console.log('something went wrong');
            User.find({},function(err,users){
                res.render('index', {errors: user.errors, users: users})
            })
        }
        else {
            console.log('succesffuly added new user');
            res.redirect('/')
        }
    })
})

app.listen(8000, function(){
    console.log("listening on port 8000");
});