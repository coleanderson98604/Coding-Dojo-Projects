function SevenToMost(array) {
    var NewArray = [];
    for (var i = 1; i < array.length; i++) {
        NewArray.push(array[i] + 7);
    }
    console.log(NewArray);
    return (NewArray);
}
SevenToMost([1, 3, 4, 5, 6, 7])