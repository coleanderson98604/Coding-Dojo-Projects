var money = 1;
var money2 = 1;
var money3 = 1;
var days = 0;
var days2 = 0;
var days3 = 0;
for (var i = 1; i <= 30; i++) {
    money = money * 2;
    //console.log(money / 100);
}
money = money / 100;
console.log(money);
while (money2 < 10000000) {
    money2 *= 2;
    days++;
    //console.log(days);
}
console.log(days);
while (money3 < 100000000000) {
    money3 *= 2;
    days2++;
}
console.log(days2);
while (money3 < Infinity) {
    money3 *= 2;
    days3++;
}
console.log(days3);