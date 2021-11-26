/* assertEqual function code
const assertEqual = function(actual, expected) {
  let valueA = actual;
  let valueB = expected;

  if (valueA === valueB) {
    console.log(`\uD83D\uDE00 \uD83D\uDE00 \uD83D\uDE4F Assertion Passed: ${valueA} === ${valueB}`);    // first use of code to make emojis etc
  } else {
    console.log(`:octagonal_sign: Assertion Failed: ${valueA} !=== ${valueB}`);    // first use of code with octagonal
  }
}
// test code for assertEqual:
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("zim", "zim");
assertEqual("zim", "zimmer");
assertEqual(613, 613);
*/

/*
// Implement a function eqArrays which takes in two arrays and returns true or false, based on match
const eqArrays = function(array1, array2) {
  if (array1.length !==  array2.length) { //if the arrays are not equal in length return false immediately
    return false;
  }
    for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
}
// test code for eqArrays:
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
console.log(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
*/

/* Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
The message will be similar to that of assertEqual. In fact, you could refer to the code for assertEqual to help you implement this. Instead of doing a simple === check though, this assertion function will make use of your eqArrays function for array comparison. */

const assertArraysEqual = function(array1, array2) {

  if (array1.length !== array2.length) {
    console.log(`Assertion Failed: ${array1} !== ${array2}`);
    return false;
  }
  for (let i = 0; i <= array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`Assertion Failed: ${array1} !== ${array2}`);
      return false;
    }
  }
  console.log(`\uD83D\uDE00 Assertion Passed: ${array1} === ${array2}`);
  return true;
};
console.log(assertArraysEqual([1, 2, 3, 4] , [1, 2, 3, 4]), true);