function fahrenheitToCelsius(fDegrees) {
    var Celsius = 0;
    Celsius = (fDegrees - 32) * (5 / 9);
    console.log(Celsius);
    return (Celsius);
}
fahrenheitToCelsius(100)