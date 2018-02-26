//SettingAndSwapping
var myNumber = 42;
var myName = 'cole';
var Temp = 0;
for (var i = 0; i < 2; i++) {
    Temp = myName;
    myName = myNumber;
    myNumber = Temp;
    console.log(myName);
    console.log(myNumber);
}

//Print-52to1066
for (var i = -52; i < 1067; i++) {
    console.log(i);
}

//DontWorryBeHappy
function beCheerful(x) {
    for (var i = 0; i <= x; i++) {
        console.log("good morning!");
    }
}
beCheerful(98);

//MultiplesOfThree
var x = 0;
for (var i = -300; i < 0; i++) {
    if (i % 3 === 0 && i != -3 && i != -6) {
        console.log(i);
    }
}

//IntegersWhile
var i = 2000;
while (i <= 5280) {
    console.log(i);
    i++;
}

//PrintAndCount
var count = 0;
for (var i = 512; i <= 4096; i++) {
    if (i % 5 === 0) {
        count++
    }
}
console.log(count);

//MultiplesOf6
var i = 6;
while (i <= 60000) {
    if (i % 6 === 0) {
        console.log(i);
    }
    i++;
}

//CountingTheDojoWay
for (var i = 1; i <= 100; i++) {
    if (i % 10 === 0 && i % 5 === 0) {
        console.log("Coding" + " Dojo");

    } else if (i % 5 === 0) {
        console.log("Coding");
    } else if (i % 5 != 0 && i % 10 != 0) {
        console.log(i);
    }
}

//WhatDoYouKnow
function SomethingRandom(incoming) {
    console.log(incoming)
}
SomethingRandom(5);

//SuckersHuge
var sum = 0;
for (var i = -300000; i <= 300000; i++) {
    if (i % 2 === 1) {
        sum += i;
    }
}
console.log(sum);

//Birthday
function Birthdate(x, y) {
    if (x == 4 && y == 25) {
        console.log("How did you know?");
    } else if (x != 4 || y != 25) {
        console.log("Just another day...")
    }

}
Birthdate(4, 25);

//CountDownBy4
var number = 2016;
while (number > 0) {
    console.log(number);
    number -= 4;
}

//LeapYear
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

//FlexibleCountdown
function FlexibleCountdown(lowNum, highNum, mult) {
    for (var i = highNum; i >= lowNum; i--) {
        if (i % mult === 0) {
            console.log(i);
        }

    }

}
FlexibleCountdown(2, 9, 3);

//FinalCountDown
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

//ArrayCountdown
function CountDown(x) {
    var array = [];
    for (var i = x; i >= 0; i--) {
        array.push(i);
    }
    console.log(array.length);
    //console.log(array);
    return (array);
}
CountDown(5);

//PrintAndReturnArray
function PrintAndReturn(array) {
    console.log(array[0]);
    return (array[1]);
}
PrintAndReturn([3, 2]);

//FirstPlusLength
function anotherArray(array) {
    var sum = 0;
    sum = array[0] + array.length;
    //console.log(sum);
    return (sum);
}
anotherArray(["what", "amazing"]);

//GreaterThanSecond
function GreaterValues(array) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > array[1]) {
            console.log(array[i]);
            count++;
        }
    }
    return (count);
}
GreaterValues([1, 3, 5, 7, 9, 13]);

//GreaterThanSecondGeneralized
function Generalized(array) {
    var arrayDos = [];
    if (array.length == 1) {
        console.log("input array length greater than 1 please");
        return;
    }
    for (var i = 0; i < array.length; i++) {
        if (array[i] > array[1]) {
            arrayDos.push(array[i]);
        }
    }
    console.log(arrayDos.length);
    //console.log(arrayDos);
}
Generalized([1, 3, 5, 7, 8, 9, 10]);

//ThisLengthThatValue
function ThisLengthThatValue(num1, num2) {
    var array = [];
    if (num2 == num1) {
        console.log("Jinx!");
    }
    while (num1 > array.length) {
        array.push(num2);

    }
    //console.log(array);
    return (array);
}
ThisLengthThatValue(7, 7)

//FitFirstValue
function FitValue(array) {
    if (array[0] > array.length) {
        console.log("Too big!");
    } else if (array[0] < array.length) {
        console.log("Too small!");
    } else(console.log("Just right!"))
    return;
}
FitValue([3, 7, 7])

//FtoC
function fahrenheitToCelsius(fDegrees) {
    var Celsius = 0;
    Celsius = (fDegrees - 32) * (5 / 9);
    console.log(Celsius);
    return (Celsius);
}
fahrenheitToCelsius(100)

//CtoF
function celsiusToFahrenheit(cDegrees) {
    var Fahrenheit = 0;
    for (var i = 200; i >= -100; i--) {
        cDegrees = i;
        Fahrenheit = ((9 / 5) * cDegrees) + 32;
        if (Fahrenheit === cDegrees) {
            console.log(Fahrenheit, cDegrees);
        }
        return (Fahrenheit);
    }
}
celsiusToFahrenheit(32)

//BiggieSize
function BiggieSize(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            array[i] = "Big";
        }
    }
    console.log(array);
}
BiggieSize([1, 5, 3, -3, -1, -10, 7])

//PrintLowReturnHigh
function PrintLowReturnHigh(array) {
    var small = array[0];
    var big = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < small) {
            small = array[i];
        }
        if (array[i] > big) {
            big = array[i];
        }
    }
    console.log(small);
    //console.log(big);
    return (big);
}
PrintLowReturnHigh([1, 3, 5, 6, 0, 2, 5])

//PrintOneReturnAnother
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

//DoubleVision
function double(array) {
    var arrayDouble = [];
    for (var i = 0; i < array.length; i++) {
        arrayDouble.push(array[i] * 2);
    }
    //console.log(arrayDouble);
    return (arrayDouble);
}
double([2, 4, 6])

//CountPositives
function CountPositives(array) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            count++;
        }
    }
    array[array.length - 1] = count;
    //console.log(array);
    return (array);
}
CountPositives([-1, 1, 1, 1]);

//EvensAndOdds
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

//IncrementSeconds
function IncrementSeconds(array) {
    for (var i = 0; i < array.length; i++) {
        if (i % 2 !== 0) {
            array[i] += 1;
        }
    }
    console.log(array);
    return (array)
}
IncrementSeconds([1, 2, 3, 4, 5, 6, 7, 8, 9])

//PreviousLengths
function PreviousLengths(array) {
    var str = "";
    var number = 0;
    var temp = 0;
    var arrayTemp = [];
    for (var i = 0; i < array.length; i++) {
        str = array[i];
        number = str.length;
        array[i] = number;
    }
    for (var y = 0; y < array.length; y++) {
        arrayTemp[y] = array[y];
    }
    array[0] = 0;
    temp = array.length;
    for (var x = 1; x < temp; x++) {
        array.pop()
    }
    for (var z = 0; z < (temp - 1); z++) {
        array.push(arrayTemp[z]);
    }
    console.log(array);
}
PreviousLengths(["Wow what's up", "Hey Hey Hey", "They are Billions", "yoyoyoyo", "howdy ho"])

//SevenToMost
function SevenToMost(array) {
    var NewArray = [];
    for (var i = 1; i < array.length; i++) {
        NewArray.push(array[i] + 7);
    }
    console.log(NewArray);
    return (NewArray);
}
SevenToMost([1, 3, 4, 5, 6, 7])

//ReverseArray
function ReverseArray(array) {
    var temp = 0;
    var temp2 = 0;
    var x = 1;
    for (var i = 0; i < array.length / 2; i++) {
        temp = array[i];
        array[i] = array[array.length - x];
        array[array.length - x] = temp;
        x++;
    }
    console.log(array);
    return (array);
}
ReverseArray([3, 1, 6, 4, 2])

//Negative
function Negative(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            array[i] = array[i] - (array[i] * 2);
        }
    }
    console.log(array);
    return (array);
}
Negative([1, -3, 5]);

//AlwaysHungry
function AlwaysHungry(array) {
    var check = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == "food") {
            console.log("yummy");
            check++;
        }
    }
    if (check == 0) {
        console.log("I'm hungry");
    }
    return (array)
}
AlwaysHungry([1, 2, 3])

//SwapTowardCenter
function SwapTowardCenter(array) {
    var temp = array[0];
    array[0] = array[array.length - 1];
    array[array.length - 1] = temp;
    if (array.length > 5) {
        for (var i = 2; i < array.length - 3; i++) {
            temp = array[i];
            array[i] = array[array.length - 3];
            array[array.length - 3] = temp;
        }
    }
    //console.log(array);
    return (array);
}
SwapTowardCenter([1, 2, 3, 4, 5, 6])
SwapTowardCenter([true, 42, "Ada", 2, "pizza"])

//ScaleArray
function ScaleArray(array, num) {
    for (var i = 0; i < array.length; i++) {;
        array[i] *= num;
    }
    console.log(array);
    return (array)
}
ScaleArray([1, 2, 3, 4, 5, 6, 7], 8)

//Cole Anderson