// eqArrays code
function eqArrays(array1, array2) {
  //if the arrays are not equal in length return false
  if (array1.length != array2.length) {
    return false;
  }
  //standard for loop for looping through an array
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {    // if the index element is the same at both points in both arrays return true
      return true;
    } else {
      return false;
    }
  }
}

/* Function Definition
Our map function will take in two arguments:
    An array to map
    A callback function
The map function will return a new array based on the results of the callback function. */

const words = ["ground", "control", "to", "major", "tom"];   // a variable, words, which has an array of values

const map = function (array, callback) {    // map function, which accepts two arguements (array/callback)
  const results = [];   // creating an empty working array
  for (let item of array) {   // for of loop for an array
    results.push(callback(item));   // for each item in the array, add(push) it to the callback function as the argument item
  }
  return results;
};
const whatever = function (value) {   // declaring 'whatever' function which accepts one argument (value)
  return `I have: ${value}`;   // returns a string literal, 'I have' whatver is the value
};

console.log(map(words, whatever));    // to check at this point what the vlaue assigned to 'value' is

console.log(
  eqArrays(map(words, whatever), [
    "I have ground",
    "I have control",
    "I have to",
    "I have major",
    "I have tom",
  ])
);

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};
// test code:
assertArraysEqual(map(["Lighthouse", "Lab", "Bootcamp"], item => item[0]), ['L', 'L', 'B']);
assertArraysEqual(map(["Canada", "Bangladesh", "India", "Greece", "Spain"], item => item[0]), ["C", "B", "I", "G", "S"]);