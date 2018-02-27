function NumbersOnly(arr) {
    var newarray = [];
    for (var i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) === "number") {
            newarray.push(arr[i]);
        }
    }
    return newarray;
}

function RemoveNonNumbers(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) !== "number") {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}