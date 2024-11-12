let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage.length);

secretMessage.pop();

console.log(secretMessage.length);

secretMessage.push('to', 'Program');

console.log(secretMessage.length);

secretMessage[7] = 'right';
console.log(secretMessage[7]);

secretMessage.shift();
console.log(secretMessage.length);

secretMessage.unshift('Programming');
console.log(secretMessage[0]);

secretMessage.splice(6, 5, 'know');
console.log(secretMessage[6]);

console.log(secretMessage.join(' '));

// iterating over arrays // 

let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

// story project //

let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';


// console.log(storyWords);

let count = 0;

storyWords.forEach(function (word) {
  for (let i = 0; i < storyWords.length; i++) {
    count++;
    return;
  }
})

// console.log(storyWords.length);

// console.log(storyWords.join(' '));
storyWords = storyWords.filter((word) => {
  for (let i = 0; i < storyWords.length; i++) {
    if (word != unnecessaryWord) {
      return word;
    }
  }
});

storyWords = storyWords.map((word) => {
  for (let i = 0; i < storyWords.length; i++) {
    if (word === misspelledWord) {
      return 'beautiful';
    } else {
      return word;
    }
  }
});

let badWordIndex = storyWords.findIndex((word) => {
  for (let i = 0; i < storyWords.length; i++) {
    if (word === badWord) {
      return storyWords[i];
    } else {
      return;
    }
  }
});

storyWords[badWordIndex] = 'really';

let lengthCheck = storyWords.every((word) => {
  for (let i = 0; i < storyWords.length; i++) {
    if (word.length <= 10) {
      return true;
    } else {
      return false;
    }
  }
});

let longWordIndex = storyWords.findIndex((word) => {
  for (let i = 0; i < storyWords.length; i++) {
    if (word.length > 10) {
      return storyWords[i];
    }
  }
});


storyWords[longWordIndex] = 'dazzling';

story = storyWords.join(' ');

console.log(story);


// story project //

// Challenge Question //

// Write your code here:

const sentence = ['sense.', 'make', 'all', 'will', 'This'];


function reverseArray(array) {
  array = sentence;
  for (let i = array.length - 1; i >= 0; i--) {
    return (array[i]);
  }
}


console.log(reverseArray(sentence));


// When you're ready to test your code, uncomment the below and run:
/* 
const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];
*/