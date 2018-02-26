for (var i = 1; i <= 100; i++) {
    if (i % 10 === 0 && i % 5 === 0) {
        console.log("Coding" + " Dojo");

    } else if (i % 5 === 0) {
        console.log("Coding");
    } else if (i % 5 != 0 && i % 10 != 0) {
        console.log(i);
    }
}