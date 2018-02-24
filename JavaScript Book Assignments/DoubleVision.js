function double(array) {
    var arrayDouble = [];
    for (var i = 0; i < array.length; i++) {
        arrayDouble.push(array[i] * 2);
    }
    //console.log(arrayDouble);
    return (arrayDouble);
}
double([2, 4, 6])