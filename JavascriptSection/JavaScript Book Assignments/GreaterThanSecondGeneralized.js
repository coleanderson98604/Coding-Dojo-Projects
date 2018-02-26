function Generalized(array) {
    var arrayDos = [];
    if (array.length == 1) {
        console.log("input array length greater than 1 please");
        return;
    }
    for (var i = 0; i < array.length; i++) {
        if (array[i] > array[1]) {
            arrayDos.push(array[i]);
        }
    }
    console.log(arrayDos.length);
    //console.log(arrayDos);
}
Generalized([1, 3, 5, 7, 8, 9, 10]);