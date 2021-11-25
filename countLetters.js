// asserEqual code:
function assertEqual(actual, expected) {
  let valueA = actual;
  let valueB = expected;

  if (valueA === valueB) {
    console.log(`\uD83D\uDE00 \uD83D\uDE00 \uD83D\uDE4F Assertion Passed: ${valueA} === ${valueB}`);
  } else {
    console.log(`:octagonal_sign: Assertion Failed: ${valueA} !=== ${valueB}`);
  }
}
// test code:
/*
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("zim", "zim");
assertEqual("zim", "zimmer");
assertEqual(613, 613);
*/

/* Create a function called countLetters. The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

Before implementing this function, we need to think about how it will report back these counts. It's not that we want to know how many H's are in this sentence?, because that would just be a number. We need it report back multiple numbers.

Process steps:
declare function countLetters to accept a string
loop through the string, adding each individual letter to an object as a key, and add 1 to the value of that key for each letter (key) of that type
return the object list with keys (letter type) and value (number of times that letter was included)

*/

const countLetters = function(sentence) {
  let workingOb = {};

  for (const sent of sentence) {
    if (workingOb[sent]) {
      workingOb[sent] += 1;
    } else {
      workingOb[sent] = 1;
    }
  } console.log("for comment -> ", workingOb);
  
  return workingOb;
}
// test conditions:
console.log(countLetters("lighthouse in the house"));


/* Gary's code for comparison which I don't fully understand yet
const countLetters = function(arr) {
  let count = 0;
  let characters = new Map();
  for (const key of arr) {
    if (key !== ' ')
      characters.set(key, count);     //initialized each character in the string  console.log(characters) works
  }

  for (const key of arr) {           //count the # of times that the character occurs
    let count = characters.get(key);
    if (key !== ' ')                        //gets rid of the space character
      characters.set(key, count + 1);

    for (const [key, value] of characters) {    //output
      console.log([key, value]);
    }
  }
};
countLetters("lighthouse in the house");
*/