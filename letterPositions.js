/* assertEqual function code
function assertEqual(actual, expected) {
  let valueA = actual;
  let valueB = expected;

  if (valueA === valueB) {
    console.log(`\uD83D\uDE00 \uD83D\uDE00 \uD83D\uDE4F Assertion Passed: ${valueA} === ${valueB}`);    // first use of code to make emojis etc
  } else {
    console.log(`:octagonal_sign: Assertion Failed: ${valueA} !=== ${valueB}`);    // first use of code with octagonal
  }
}
*/
/* test code for assertEqual:
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("zim", "zim");
assertEqual("zim", "zimmer");
assertEqual(613, 613); */

/////////////////
/*
// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
function eqArrays(array1, array2) {
  if (array1.length !==  array2.length) { //if the arrays are not equal in length return false immediately
    return false;
  }
    for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
}
*/
/* test code for eqArrays:
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
console.log(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// See this link: https://www.w3docs.com/snippets/javascript/how-to-compare-two-javascrpt-arrays.html for more ideas on how to compare.
*/

//////////////////
/*
Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
The message will be similar to that of assertEqual. In fact, you could refer to the code for assertEqual to help you implement this. Instead of doing a simple === check though, this assertion function will make use of your eqArrays function for array comparison.
*/

// lint did not like this next section when I used: function assertEqualArrays(array1, array2) - it wanted me to change the function expression
const assertArraysEqual = function(array1, array2) {

  if (array1.length !== array2.length) {
    console.log(`:octagonal_sign: Assertion Failed: ${array1} !== ${array2}`);
    return false;
  }
  for (let i = 0; i <= array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`:octagonal_sign: Assertion Failed: ${array1} !== ${array2}`);
      return false;
    }
  }
  console.log(`:white_check_mark: Assertion Passed: ${array1} === ${array2}`);
  return true;
};
console.log(assertArraysEqual([1, 2, 3] , [1, 2, 3]), true);


///////////////////// Implement a function called letterPositions.
/*
This challenge is similar to countLetters and allows us to spend some more time solving problems with objects.

We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.

For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.
*/
// process steps
// define function and set argument
// create empty working object
// loop through object, returning the indices count of each string element found
// if a string letter is encountered more than once, add this to the key instead of incrementing the key value total

const letterPositions = function (sentence) {
  // my working object
  let results = {};   

  for (let i = 0; i < sentence.length; i++) {   // standard for loop
    let position = i;
    let letter = sentence[i];

    if (letter !== ' ') {

      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
};
console.log(letterPositions("lighthouse in the house"));
console.log(letterPositions("Hello there"));
console.log(letterPositions("Hello"));

