function GreaterValues(array) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > array[1]) {
            console.log(array[i]);
            count++;
        }
    }
    return (count);
}
GreaterValues([1, 3, 5, 7, 9, 13]);