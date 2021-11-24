// assertEqual function code

function assertEqual(actual, expected) {
  let valueA = actual;
  let valueB = expected;

  if (valueA === valueB) {
    console.log(`\uD83D\uDE00 \uD83D\uDE00 \uD83D\uDE4F Assertion Passed: ${valueA} === ${valueB}`);    // first use of code to make emojis etc
  } else {
    console.log(`:octagonal_sign: Assertion Failed: ${valueA} !=== ${valueB}`);    // first use of code with octagonal
  }
}


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


/* Implement without function which will return a subset of a given array, removing unwanted elements.
This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.
*/

const without = function(sourceArr, itemsToRemove) {
  const workingArr = [];

  for (let i = 0; i <= sourceArr.length; i++) {
    if (sourceArr[i] !== itemsToRemove[i]) {
      workingArr.push(sourceArr[i])
    }
  } return workingArr;
}

// test code:
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without([1, 2, 3, 4], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

/* process steps
define array and inputs
create working array so original is not changed
compare working array to itemsToRemove array
if elements are different, add the different element to new output array
console.log or return the new output array
*/