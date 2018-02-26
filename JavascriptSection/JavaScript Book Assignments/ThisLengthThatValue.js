function ThisLengthThatValue(num1, num2) {
    var array = [];
    if (num2 == num1) {
        console.log("Jinx!");
    }
    while (num1 > array.length) {
        array.push(num2);

    }
    //console.log(array);
    return (array);
}
ThisLengthThatValue(7, 7)