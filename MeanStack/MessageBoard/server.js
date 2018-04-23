var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost/MessageBoard');
var PostSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 4},
    text: {type: String, required: true, minlength: 1},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true});

var CommentSchema = new mongoose.Schema({
    _post: {type: Schema.Types.ObjectId, ref: 'Post'},
    text: {type: String, required: true, minlength: 1},
    name: {type: String, required: true, minlength: 4}
}, {timestamps: true});

mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema);

var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

app.get('/', function(req,res){
    Post.find({}).populate('comments').exec(function(err,post){
        if(err){
            console.log('there seems to be a problem');
        }
        else {
            console.log(post);
            res.render('index', {posts: post});
        }
    })
});
app.post('/process', function(req,res){
    if(req.body.name < 0 || )
    var post = new Post(req.body);
    post.save(function(err){
        if(err){
            console.log('something went wrong');
        }
        else {
            console.log('sucessfully added a new user');
            res.redirect('/')
        };
    });
});
app.post('/comments/:id', function(req,res){
    id = req.params.id;
    Post.findById({_id: id}, function(err, post){
        var comment = new Comment(req.body);
        comment._post = post._id;
        post.comments.push(comment);
        comment.save(function(err){
            post.save(function(err){
                if(err){
                    console.log('error');
                }
                else {
                    res.redirect('/');
                }
            })
        })
    })
});

app.listen(8000, function(){
    console.log("listening on port 8000");
});