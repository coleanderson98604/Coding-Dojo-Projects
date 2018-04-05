function starString(n){
    let star = "";
    while(n > 0){
        star += '*';
        n--;
    }
    return star
}
let star = starString(100)
console.log(star)
// Prints out stars

function drawStars(array){
    for(var i = 0; i < array.length; i++){
        let string = "";
        if(typeof(array[i]) === 'string'){
            let number = array[i].length;
            let letter = array[i][0]
            while(number > 0){
                string += letter.toLowerCase()
                number--;
            }
        }
        let number = array[i];
        while(number > 0){
            string += '*';
            number--;
        }
        console.log(string)
    }
}
drawStars([1,2,3,'Steve',5,6,7,'Tom'])
// Prints out coloumns of  stars

