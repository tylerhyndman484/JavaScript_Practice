// Temperature Convereter //
// Convert Celsuis to Farenhight
// Convert Celsuis to Kelvin 
// Convert Farenhight to Celsius

const celsiusToFarenhight = (number) => {
   const Farenhight =  number * 1.8 + 32
   return Farenhight;
}

const farenhightToCelsius = (number) => {
    const step1 = number - 32;
    const step2 = step1 * 5;
    const celsius = step2 / 9;
    return celsius;
}

const celsiusToKelvin = (number) => {
    const kelvin = number + 273;
    return kelvin;
}

console.log(celsiusToKelvin(45));