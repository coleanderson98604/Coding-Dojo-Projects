var express = require("express");
var path = require("path");
var bcrypt = require('bcryptjs');
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var session = require('express-session');
var Schema = mongoose.Schema
var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
var pwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/;
var nameRegex = /^[a-z ..'-]+$/i;
app.use(session({secret: "Kidswithguns", resave: false, saveUninitialized: true}));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost/LoginAndReg');

var UserSchema = new Schema({
    email: {type: String, required: [true, "Must input email"], unique: true, validate:{
        validator: function(email) {
            return emailRegex.test(email);
        },
        message: "{ email } is not a valid email"
    }},
    name: {
        first: {
            type: String, required: [true, "First name can't be empty"], trim: true, minlength: 2, validate: {
                validator: function(first){
                    return nameRegex.test(first);
                },
                message: "first name can't contain special characters"
            }
        },
        last: {
            type: String, required: [true, "Last name can't be empty"], trim: true, minlength: 2, validate: {
                validator: function(last){
                    return nameRegex.test(last);
                },
                message: "last name can't contain special characters"
            }
        }
    },
    password: {
        type: String, required: [true,"password can't be empty"], minlength: 8, maxlength: 32, validate: {
            validator: function(pw) {
                return pwRegex.test(pw);
            },
            message: "Password failed validation, you must have at least 1 number, uppercase and special character"
        }
    },
    birthday : {
        type: Date, required: [true, "date field can't be empty"], validate: {
            validator: function(bday){
                return bday.getTime() < new Date().getTime();
            },
            message: "Invalid Birthday!"
        }
    }
},{timestamps: true});

UserSchema.virtual('name.full').get( function(){
    return this.name.first + " " + this.name.last;
})


UserSchema.pre('save', function(next) {
    var user = this;

    if(!user.isModified('password')) return next();

    bcrypt.genSalt(10, function(err, salt){
        if(err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash){
            if(err) return next(err);

            user.password = hash;
            next();
        })
    })
});

mongoose.model('User', UserSchema);
var User = mongoose.model('User');

app.get('/', function(req,res){
    error = req.session.error;
    console.log('get route error',error)
    res.render('index',{errors: error});
});

app.get('/user', function(req,res){
    console.log(req.session.user)
    if(!req.session.user){
        res.redirect('/')
    }
    User.findOne({email: req.session.user}, function(err,user){
        if(err){
            console.log('invalid',err);
            res.redirect('/')
        }
        else {
            console.log('rendering user')
            console.log()
            res.render('user',{users: user});
        }
    })
})

app.post('/create', function(req,res){
    // console.log(req.body);
    if(req.body.password != req.body.Cpassword){
        res.redirect('/')
    }
    var user = new User({
        email: req.body.email,
        name: {
            first: req.body.name.first,
            last: req.body.name.last
        },
        password: req.body.password,
        birthday: req.body.bday
    });
    user.save(function(err){
        if(err){
            req.session.error = user.errors;
            console.log('session error stored', req.session.error)
            res.redirect('/')
        }
        else {
            console.log('made it to creation');
            res.redirect('/')
        }
    })
})
app.post('/login', function(req,res){
    User.findOne({email: req.body.email}, function(err, user){
        if(err){
            console.log('login error',err);
            res.redirect('/');
        }
        else {
            bcrypt.compare(req.body.password, user.password, function(err,Res){
                if(Res){
                    console.log('sucessful login');
                    req.session.user = user.email;
                    res.redirect('/user');
                }
                else{
                    console.log("there's a problem",err);
                    res.redirect('/');
                }
            })
        }
    })
})
app.post('/logout', function(req,res){
    req.session.destroy();
    res.redirect('/');
})


app.listen(8000, function(){
    console.log("listening on port 8000")
})