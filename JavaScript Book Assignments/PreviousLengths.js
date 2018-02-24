function PreviousLengths(array) {
    var str = "";
    var number = 0;
    var temp = 0;
    var arrayTemp = [];
    for (var i = 0; i < array.length; i++) {
        str = array[i];
        number = str.length;
        array[i] = number;
    }
    for (var y = 0; y < array.length; y++) {
        arrayTemp[y] = array[y];
    }
    array[0] = 0;
    temp = array.length;
    for (var x = 1; x < temp; x++) {
        array.pop()
    }
    for (var z = 0; z < (temp - 1); z++) {
        array.push(arrayTemp[z]);
    }
    console.log(array);
}
PreviousLengths(["Wow what's up", "Hey Hey Hey", "They are Billions", "yoyoyoyo", "howdy ho"])