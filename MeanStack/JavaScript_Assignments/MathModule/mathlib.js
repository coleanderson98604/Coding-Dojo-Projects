module.exports = {
    add: function(x,y){
        return x + y
    },
    multiply: function(x,y){
        return x * y
    },
    square: function(x){
        return x * x
    },
    random: function(x,y){
        return Math.floor((Math.random() * (y - x + 1) + x));
    }
}