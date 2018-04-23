var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost/Dashboard');
var AnimalSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    species: {type: String, required: true, minlength: 1},
    color: {type: String, required: true, minlength: 1}
});
mongoose.model('Animal', AnimalSchema);
var Animal = mongoose.model('Animal');
mongoose.Promise = global.Promise;

app.get('/', function(req,res){
    Animal.find({}, function(err,animal){
        if(err){
            console.log('there seems to be a problem');
        }
        else {
            console.log(animal);
            res.render('index', {animals: animal});
        }
    })
});
app.get('/NewAnimal',function(req,res){
    res.render('new')
})
app.get('/show/:id',function(req,res){
    console.log(req.params.id)
    id = req.params.id
    Animal.find({_id: id}, function(err,animal){
        if(err){
            console.log('there seems to be a problem');
        }
        else {
            console.log(animal);
            res.render('show', {animals: animal});
        }
    })
})
app.get('/edit/:id',function(req,res){
    id = req.params.id;
    Animal.find({_id: id}, function(err,animal){
        if(err){
            console.log('there seems to be a problem');
        }
        else {
            console.log(animal);
            res.render('edit', {animals: animal});
        }
    });
})
app.get('/delete/:id', function(req,res){
    id = req.params.id;
    Animal.findByIdAndRemove({_id: id},function(err){
        if(err){
            console.log(err)
        }
        else {
            res.redirect('/')
        }
    });
})
app.post('/edit/:id',function(req,res){
    id = req.params.id
    Animal.findById({_id: id}, function(err, animal){
        console.log('here is the animal')
        console.log(animal)
        console.log('here is the err')
        console.log(err)
        animal.name = req.body.name;
        animal.species = req.body.species;
        animal.color = req.body.color;
        animal.save(function(err){
            if(err){
                console.log('there seems to be a problem');
                Animal.find({_id: id},function(errs, animal){
                    res.render('edit', {errors: err, animals: animal})
                })
            }
            else{
                console.log('success');
                res.redirect(`/show/${id}`)
            }
        })
    })
})
app.post('/NewAnimal',function(req,res){
    var animal = new Animal(req.body);
    animal.save(function(err){
        if(err){
            console.log('something went wrong');
            res.render('new',{errors: animal.errors});
        }
        else {
            console.log('succesfully added a new user');
            res.redirect('/')
        }
    })
})

app.listen(8000, function(){
    console.log("listening on port 8000");
});