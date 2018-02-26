var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";
if (PERIOD === "AM") {
    if (HOUR === 8 && MINUTE === 5) {
        console.log("5 after", HOUR, "in the morning.");
    }
    if (HOUR === 8 && MINUTE === 30) {
        console.log("half past", HOUR, "in the morning.");
    }
    if (HOUR === 8 && MINUTE === 45) {
        console.log("quarter after", HOUR, "in the morning");
    }
    if (HOUR === 8 && MINUTE >= 50) {
        console.log("it's almost", (HOUR + 1), "in the morning");
    }
    if (HOUR === 12) {
        if (MINUTE === 5) {
            console.log("5 after", HOUR, "midnight");
        }
        if (MINUTE === 30) {
            console.log("half past", HOUR, "midnight");
        }
        if (MINUTE === 45) {
            console.log("Quarter after", HOUR, "midnight")
        }
    }

} else if (PERIOD === "PM") {
    if (HOUR === 12) {
        if (MINUTE === 5) {
            console.log("5 after", HOUR, "in the noon time");
        }
        if (MINUTE === 30) {
            console.log("half past", HOUR, "in the noon time");
        }
        if (MINUTE === 45) {
            console.log("Quarter after", HOUR, "in the noon time")
        }
    }
    if (HOUR > 12 && HOUR < 7) {
        if (MINUTE === 5) {
            console.log("5 after", HOUR, "in the afternoon");
        }
        if (MINUTE === 30) {
            console.log("half past", HOUR, "in the afternoon");
        }
        if (MINUTE === 45) {
            console.log("Quarter after", HOUR, "in the afternoon")
        }
    }
    if (HOUR > 6 && HOUR < 11) {
        if (MINUTE === 5) {
            console.log("5 after", HOUR, "in the evening");
        }
        if (MINUTE === 30) {
            console.log("half past", HOUR, "in the evening");
        }
        if (MINUTE === 45) {
            console.log("Quarter after", HOUR, "in the evening")
        }
    }
}