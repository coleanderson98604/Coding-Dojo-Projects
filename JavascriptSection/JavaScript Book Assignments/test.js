function PreviousLengths(array) {
    var str = "";
    var number = 0;
    var i = 1;
    str = array[0];
    while (i < array.length) {
        number = str.length;
        array[i] = number;
        i++;
    }
    console.log(array);
    return (array);
}
PreviousLengths(["Wow what's up", "Hey Hey Hey", "They are Billions"])