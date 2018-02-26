function ScaleArray(array, num) {
    for (var i = 0; i < array.length; i++) {;
        array[i] *= num;
    }
    console.log(array);
    return (array)
}
ScaleArray([1, 2, 3, 4, 5, 6, 7], 8)