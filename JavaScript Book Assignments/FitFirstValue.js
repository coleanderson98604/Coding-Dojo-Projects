function FitValue(array) {
    if (array[0] > array.length) {
        console.log("Too big!");
    } else if (array[0] < array.length) {
        console.log("Too small!");
    } else(console.log("Just right!"))
    return;
}
FitValue([3, 7, 7])