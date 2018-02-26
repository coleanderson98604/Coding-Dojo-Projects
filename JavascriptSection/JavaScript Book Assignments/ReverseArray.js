function ReverseArray(array) {
    var temp = 0;
    var temp2 = 0;
    var x = 1;
    for (var i = 0; i < array.length / 2; i++) {
        temp = array[i];
        array[i] = array[array.length - x];
        array[array.length - x] = temp;
        x++;
    }
    console.log(array);
    return (array);
}
ReverseArray([3, 1, 6, 4, 2])