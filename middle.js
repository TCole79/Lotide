//const eqArrays = require("./eqArrays"); // is this code enabling me to pull eqArrays without adding in all the code?
//const assertArraysEqual = require("./assertArraysEqual");   // as above question?

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
// test code for assertEqual:
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("zim", "zim");
assertEqual("zim", "zimmer");
assertEqual(613, 613); */

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

/*
Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
The message will be similar to that of assertEqual. In fact, you could refer to the code for assertEqual to help you implement this. Instead of doing a simple === check though, this assertion function will make use of your eqArrays function for array comparison.
*/
/*
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
*/

/*
Implement middle which will take in an array and return the middle-most element(s) of the given array.
The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.
Write test assertions for the various scenarios with middle
We can and should use the assertArraysEqual function for testing our new function. That's why we brought it in here to begin with.
*/

//process steps
// define middle function
// create working array to hold the values
// use for of loop to go through working array
// if array length is 1 or 2 return empty array
// if array length is more than 2 and an odd number, return the middle element
// if array length is more than 2 and an even number, return middle two elements

const middle = function(array) {
  let workingArr = [];
  //console.log(workingArr);
  const middle = Math.floor(array.length / 2);
  //console.log(midIndex);
  
//For arrays with one or two elements, there is no middle. Return an empty array.
  if (array.length <= 2) {
    return workingArr;
  } //console.log(workingArr);
  
//For arrays with an even number of elements, an array containing the two elements in the middle should be returned
  if (array.length % 2 === 0) {
    workingArr = array.slice(middle - 1, middle + 1);
    return workingArr;
  } //console.log(workingArr);

//For arrays with odd number of elements, an array containing a single middle element should be returned.
  if (array.length % 2 !== 0) {
    workingArr = array.slice(middle, middle + 1);
    return workingArr;
  } //console.log(workingArr);
}

//test code:
//For arrays with one or two elements, there is no middle. Return an empty array.
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

//For arrays with odd number of elements, an array containing a single middle element should be returned.
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 5, 3, 4, 2])); // => [3]

//For arrays with an even number of elements, an array containing the two elements in the middle should be returned
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([2, 1, 3, 4, 5, 6])); // => [3, 4]
