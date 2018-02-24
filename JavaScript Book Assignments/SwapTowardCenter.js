function SwapTowardCenter(array) {
    var temp = array[0];
    array[0] = array[array.length - 1];
    array[array.length - 1] = temp;
    if (array.length > 5) {
        for (var i = 2; i < array.length - 3; i++) {
            temp = array[i];
            array[i] = array[array.length - 3];
            array[array.length - 3] = temp;
        }
    }
    //console.log(array);
    return (array);
}
SwapTowardCenter([1, 2, 3, 4, 5, 6])
SwapTowardCenter([true, 42, "Ada", 2, "pizza"])