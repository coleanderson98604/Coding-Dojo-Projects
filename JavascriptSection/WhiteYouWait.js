var daysUntilMyBirthday = 60;
while (daysUntilMyBirthday >= 0) {
    if (daysUntilMyBirthday <= 60 && daysUntilMyBirthday > 30) {
        console.log(daysUntilMyBirthday, "days until my birthday. not there yet!");
    }
    if (daysUntilMyBirthday <= 30 && daysUntilMyBirthday > 5) {
        console.log(daysUntilMyBirthday, "days until my birthday, better start planning!");
    }
    if (daysUntilMyBirthday <= 5 && daysUntilMyBirthday > 0) {
        console.log(daysUntilMyBirthday, "days until my birthday, oh boy oh boy");
    }
    if (daysUntilMyBirthday === 0) {
        console.log("happy birthday!!!!");
    }
    daysUntilMyBirthday--;
}