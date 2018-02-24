function FlexibleCountdown(lowNum, highNum, mult) {
    for (var i = highNum; i >= lowNum; i--) {
        if (i % mult === 0) {
            console.log(i);
        }

    }

}
FlexibleCountdown(2, 9, 3);