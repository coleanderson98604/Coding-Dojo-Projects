function FancyArray(arr, symbol, reverse) {
    if (reverse == false) {
        for (var i = 0; i < arr.length; i++) {
            console.log(i, symbol, arr[i]);
        }
    }
    if (reverse == true) {
        for (var i = arr.length - 1; 0 <= i; i--) {
            console.log(i, symbol, arr[i]);
        }
    }
}
FancyArray(["James", "Jill", "Jane", "Jack"], "=>", false)