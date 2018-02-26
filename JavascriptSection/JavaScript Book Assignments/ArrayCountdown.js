function CountDown(x) {
    var array = [];
    for (var i = x; i >= 0; i--) {
        array.push(i);
    }
    console.log(array.length);
    //console.log(array);
    return (array);
}
CountDown(5);