// For loops //  // for... of loops //  // while loops //   // do... while lopps //

// Whale Project // 

// whales only speak with "a, e, i, o, u";

// whales only speak with "a, e, i, o, u";

const input = "Jesus is Lord";
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];


for (let i = 0; i < input.length; i++) {
  if (input[i] === 'e' || input[i] === 'u') {
    resultArray.push(input[i]);
  }
  for ( let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[j]);
      }
    }
  }

const resultString = resultArray.join("").toUpperCase();

console.log(resultString);

// Whale Project //