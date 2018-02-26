function CountPositives(array) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            count++;
        }
    }
    array[array.length - 1] = count;
    //console.log(array);
    return (array);
}
CountPositives([-1, 1, 1, 1]);