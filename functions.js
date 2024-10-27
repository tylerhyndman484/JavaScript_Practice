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


// Temperature Convertor //


// Sleep Debt Caluclator //



const getSleepHours = (day) => { // function that uses a switch statement to pass in each day of the week to associate with the number of hours that is slept per night
    switch (day) {
      case 'monday':
        return 6;
      case 'tuesday':
        return 6;
      case 'wednesday':
        return 6;
      case 'thursday':
        return 6;
      case 'friday':
        return 6;
      case 'saturday':
        return 7;
      case 'sunday':
        return 7;
    }
  }
  
  const getActualSleepHours = () => { // function that adds all the hours of sleep you get per night to get the weekly total
    const sleepHours = getSleepHours('monday') 
     + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
    return sleepHours;
  }
  
  const getIdealSleepHours = () => { // getting the amount of hours you would like to sleep per week
    const idealHours = 8;
    return idealHours * 7;
  }
  
  
  const calculateSleepDebt = () => { // this function  uses the past 2 functions to calculate if the number of hours you actually slept are the same, more, or less the your ideal sleep number; then returns a statement //
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log("User got the perfect amount of sleep");
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`User got more sleep than needed. User is over ${actualSleepHours - idealSleepHours} hours.`);
    } else if (actualSleepHours < idealSleepHours) {
      console.log(`User should get some rest. User is under their ideal sleep goal by ${idealSleepHours - actualSleepHours} hours.`);
    } else {
      return;
    }
  }
  
  calculateSleepDebt();
  
// Sleep Debt Calculator //  

// Practiced Code Challenges on Codecademy for functions //