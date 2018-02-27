function RandomChance(quarters) {
    while (quarters > 0) {
        quarters--;
        var WinningNumber = Math.trunc(Math.random() * 100);
        var UserNumber = Math.trunc(Math.random() * 100);
        var payout = 0;
        if (WinningNumber === UserNumber) {
            payout = Math.floor(Math.random() * 51) + 50 + quarters;
            console.log("Congrats you've won", payout);
            return payout;
        }
    }
    if (quarters == 0) {
        return 0;
    }
}
//RandomChance(200)