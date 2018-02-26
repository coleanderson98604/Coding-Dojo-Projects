function IncrementSeconds(array) {
    for (var i = 0; i < array.length; i++) {
        if (i % 2 !== 0) {
            array[i] += 1;
        }
    }
    console.log(array);
    return (array)
}
IncrementSeconds([1, 2, 3, 4, 5, 6, 7, 8, 9])