function LeapYear(year) {
    if (year % 4 === 0 && year % 100 != 0) {
        console.log("it's a leap year!");
    } else if (year % 400 === 0) {
        console.log("it's a leap year!");
    } else if (year % 400 != 0 || year % 4 != 0) {
        console.log("just another year");
    }
}
LeapYear(1994);