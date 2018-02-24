function BiggieSize(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            array[i] = "Big";
        }
    }
    console.log(array);
}
BiggieSize([1, 5, 3, -3, -1, -10, 7])