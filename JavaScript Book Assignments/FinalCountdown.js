function FinalCountDown(param1, param2, param3, param4) {
    while (param2 < param3) {
        if (param2 % param1 === 0) {
            if (param2 == param4) {
                param2++;
            } else if (param2 != param4) {
                console.log(param2);
            }
        }
        param2++;
    }

}
FinalCountDown(3, 5, 17, 9);