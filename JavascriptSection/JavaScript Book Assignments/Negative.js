function Negative(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            array[i] = array[i] - (array[i] * 2);
        }
    }
    console.log(array);
    return (array);
}
Negative([1, -3, 5]);