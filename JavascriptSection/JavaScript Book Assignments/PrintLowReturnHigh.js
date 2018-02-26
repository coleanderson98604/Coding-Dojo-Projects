function PrintLowReturnHigh(array) {
    var small = array[0];
    var big = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < small) {
            small = array[i];
        }
        if (array[i] > big) {
            big = array[i];
        }
    }
    console.log(small);
    //console.log(big);
    return (big);
}
PrintLowReturnHigh([1, 3, 5, 6, 0, 2, 5])