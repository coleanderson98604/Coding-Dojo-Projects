function AlwaysHungry(array) {
    var check = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == "food") {
            console.log("yummy");
            check++;
        }
    }
    if (check == 0) {
        console.log("I'm hungry");
    }
    return (array)
}
AlwaysHungry([1, 2, 3])