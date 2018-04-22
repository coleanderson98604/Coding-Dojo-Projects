var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
app.use(bodyParser.json());
app.use(express.static(__dirname + '/myFirstAngularApp/dist'));
mongoose.connect('mongodb://localhost/RestfulTaskAPI');

var TaskSchema = new mongoose.Schema({
    title: {type: String, required: true, minlength: 1},
    description: {type: String, required: true, default:"" },
    completed: {type: Boolean, required: true, default: false }
},{timestamps:true});

mongoose.model('Task', TaskSchema);

var Task = mongoose.model('Task');

app.get('/tasks', function(req,res){
    Task.find({}, function(err,task){
        if(err){
            console.log('problem',err);
        }
        else {
            console.log(task)
            res.json({message: "Succesful", data: task});  
        }
    })
});

app.put('/task/:id', function(req,res){
    id = req.params.id;
    console.log(req.body);
    Task.findByIdAndUpdate(id, req.body, function(err,task){
        if(err){
            console.log('problem', err);
        }
        else {
            console.log("we've updated the task", task)
            res.json({data: task});
        }
    })
})

app.get('/task/:id', function(req,res){
    id = req.params.id;
    Task.findById(id,function(err,task){
        if(err){
            console.log('problem', err);
        }
        else{
            res.json({message: "success", data: task});
        }
    })
});

app.post('/task', function(req,res){
    var task = new Task(req.body);
    console.log(req.body)
    task.save(function(err){
        if(err){
            console.log('problem', err);
        }
        else{
            res.redirect('/');
        }
    })
})


app.delete('/task/:id', function(req,res){
    id = req.params.id;
    Task.findByIdAndRemove(id, function(err,task){
        if(err){
            console.log('problem', err);
        }
        else{
            res.json({data: task})
        }
    })
})

app.listen(8000, function(){
    console.log("listening on port 8000");
});