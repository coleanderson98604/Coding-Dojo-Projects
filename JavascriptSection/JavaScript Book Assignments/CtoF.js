function celsiusToFahrenheit(cDegrees) {
    var Fahrenheit = 0;
    for (var i = 200; i >= -100; i--) {
        cDegrees = i;
        Fahrenheit = ((9 / 5) * cDegrees) + 32;
        if (Fahrenheit === cDegrees) {
            console.log(Fahrenheit, cDegrees);
        }
        //return (Fahrenheit);
    }
}
celsiusToFahrenheit(32)