var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
app.use(bodyParser.json());
app.use(express.static(__dirname + '/Product/dist'));
mongoose.connect('mongodb://localhost/ProductManager');

var ProductSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Product must have title"], minlength: [4, "title must be longer than 4"], maxlength: [15, "title can't be longer than 10"]},
    price: {type: Number, required: [true, "Product must have a price"]},
    imageUrl: {type: String, default: "",required: [true, "Product must have an image url"]}
}, {timestamps: true});

mongoose.model('Product', ProductSchema);
var Product = mongoose.model("Product");

app.get('/api/product', function(req,res){
    Product.find({}, function(err,product){
        if(err){
            console.log('problem',err);
        }
        else {
            console.log(product)
            res.json({message: "Succesful", data: product});  
        }
    })
});
app.get('/api/product/:id', function(req,res){
    id = req.params.id;
    Product.findById(id,function(err,product){
        if(err){
            console.log('problem', err);
        }
        else{
            res.json({message: "success", data: product});
        }
    })
});

app.put('/api/product/:id', function(req,res){
    id = req.params.id;
    console.log(req.body);
    Product.findByIdAndUpdate(id, req.body, function(err,product){
        if(err){
            console.log('problem', err);
        }
        else {
            console.log("we've updated the product", product)
            res.json({data: product});
        }
    })
})

app.post('/api/product/', function(req,res){
    var product = new Product(req.body);
    console.log('here is the new product', req.body);
    product.save(function(err){
        if(err){
            console.log('problem at post', err);
        }
        else{
            console.log("succesfful creation");
            res.json({message: "success post"})
        }
    })
})

app.delete('/api/product/:id', function(req,res){
    id = req.params.id;
    Product.findByIdAndRemove(id, function(err,product){
        if(err){
            console.log('problem', err);
        }
        else{
            res.json({message: "success"})
        }
    })
})

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./Product/dist/index.html"))
  });

app.listen(8000, function(){
    console.log("listening on port 8000");
});