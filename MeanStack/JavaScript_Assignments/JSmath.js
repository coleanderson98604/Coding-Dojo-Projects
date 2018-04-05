function zero_negativity(array){
    for(var i = 0; i < array.length; i++){
        if(array[i] < 0){
            return false
        }
    }
    return true
}
// console.log(zero_negativity([1,2,3,4,5]))
function is_even(x){
    if(x % 2 == 0){
        return true
    }
    else{
        return false
    }
}
// console.log(is_even(6))
function how_many_even(array){
    let count = 0
    for(var i = 0; i < array.length ; i++){
        if(is_even(array[i])){
            count++;
        }
    }
    return count
}
// console.log(how_many_even([1,2,3,4,5,6,7,8]));
function create_dummy_array(n){
    let dummy = [];
    for(var i = 0; i < n; i++){
        dummy[i] = Math.floor((Math.random()*10))
    }
    return dummy
}
// console.log(create_dummy_array(10))
function random_choice(array){
    let length = array.length
    let random = Math.floor((Math.random()*length))
    if(random > length){
        while(random > length){
            random = Math.floor(Math.random()*length)
        }
    }
    if(array[random] === 'undefined'){
        random_choice(array);
    }
    return array[random]
}
console.log(random_choice([1,2,3,4,5,6,7,1,1,1,1,1,1,1,1,1,1,1]))