function EvensAndOdds(array) {
    var oddCounter = 0;
    var evenCounter = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenCounter++;
            oddCounter = 0;
            if (evenCounter == 3 && oddCounter == 0) {
                evenCounter = 0;
                console.log("Even more so!");
            }
        }
        if (array[i] % 2 !== 0) {
            oddCounter++;
            evenCounter = 0;
            if (oddCounter == 3 && evenCounter == 0) {
                oddCounter = 0;
                console.log("That's odd!");
            }
        }
    }
}
EvensAndOdds([1, 1, 1, 2, 2, 2, 1, 2, 3, 1, 4])