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
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("zim", "zim");
assertEqual("zim", "zimmer");
assertEqual(613, 613);

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
/* test code for eqArrays:
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
console.log(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

// See this link: https://www.w3docs.com/snippets/javascript/how-to-compare-two-javascrpt-arrays.html for more ideas on how to compare
*/