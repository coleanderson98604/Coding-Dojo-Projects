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