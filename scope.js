
// SCOPE PROJECT IN CODECADEMY - FIXED SCOPING ISSUES. THIS IS THE FINAL FIXED CODE //
const name = "Nala";

const getRandEvent = () => { // function generates a random number that will return 3 different options
  const random = Math.floor(Math.random() * 3); // THIS CODE WAS GLOBALY SCOPED //
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = event => { // this function takes in a paramater of event and depending upon the outcome of the function getRandEvent, will dispay corresponding number of days //
  let days;
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }

  return days;
};

// The scope of `name` is too tight 
const logEvent = (name, event) => { // this function takes in 2 parameters, one with the variable of name that is globably scoped and the event variable that is declared in the below lines //
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => { // same as above but takes in the days variable that is declared below. //
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent(); //
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(name2, event2);
logTime(name2, days2);
// SCOPE PROJECT IN CODECADEMY - FIXED SCOPING ISSUES. THIS IS THE FINAL FIXED CODE //