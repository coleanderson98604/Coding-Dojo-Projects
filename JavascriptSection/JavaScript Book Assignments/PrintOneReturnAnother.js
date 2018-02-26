function PrintOneReturnAnother(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            console.log(array[array.length - 2]);
            //console.log(array[i]);
            return (array[i]);
        }
    }
}
PrintOneReturnAnother([2, 4, 6, 8, 10, 11]);