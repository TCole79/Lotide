const eqArrays = require('./eqArrays');

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

module.exports = assertArraysEqual;