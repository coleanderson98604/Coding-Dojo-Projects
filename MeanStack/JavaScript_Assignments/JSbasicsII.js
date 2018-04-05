function magic_multiply(x,y){
    if(Array.isArray(x)){
        for(i = 0 ; i < x.length; i++){
            x[i] *= y;
        }
        return x;
    }
    if(typeof(x) || typeof(y) == 'string'){
        let string = "";
        if(typeof(x) == 'string'){
            while(y > 0){
                string += x;
                y--;
            }
        }
        if(typeof(y) == 'string'){
            while(x > 0){
                string += y;
                x--;
            };
        }
        return string;
    }
    return x * y;
}
console.log(magic_multiply('Brendo',4));