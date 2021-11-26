/* assertEqual code:
const assertEqual = function(actual, expected) {
  let valueA = actual;
  let valueB = expected;

  if (valueA === valueB) {
    console.log(`\uD83D\uDE00 \uD83D\uDE00 \uD83D\uDE4F Assertion Passed: ${valueA} === ${valueB}`);
  } else {
    console.log(`Assertion Failed: ${valueA} !=== ${valueB}`);
  }
}
// test code for asserEqual:
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("zim", "zim");
assertEqual("zim", "zimmer");
assertEqual(613, 613); */
//let emoji = String.fromCodePoint(0x1F621) this is angry emoji code I don't know how to use

/* eqArrays code
const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) { //if the arrays are not equal in length return false immediately
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
}
*/

///////////////
/* Step 1: Function Definition
Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.
Don't attempt to implement the function yet, just the definition, as shown below. */

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  console.log("array test-> ", arr1, arr2);

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (const i in object1) {
    for (const j in object2) {
      if (Array.isArray(arr1[i]) && Array.isArray(arr2[j])) {
        if (eqArrays(arr1[i], arr2[j]) === false) {
          return false;
        } else {
          return true;
        }
      }
    }
    //console.log("test1-> ", arr1, arr2);

  }
  return true;
};

// Step 2: Primitives As Values (Tests)
// Start with a couple basic tests. One for true and one for false, as shown below.

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log("test2-> ", eqObjects(ab, ba)); // => true
assertEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
console.log("test3-> ", eqObjects(ab, abc)); // => false
assertEqual(ab, abc);
/*
Here is one possible way of structuring our function's logic:
        Inside our loop, compare both objects' values for that key. Use === to ensure that the types are the same!
        As soon as there is not a match, we can return false
    Our control flow will therefore only get to the end of the loop if all the keys matched. We can and should thus return true at the end (after the loop)
*/

/* one solution:
const eqObjects = function (object1, object2) {
  for (let i in object1) {
    for (let j in object2) {
      if(Array.isArray(i) && Array.isArray(j)){
        if (!eqArrays(object1.i, object2.j)) 
      {
          return false; 
        }
      } else {
        if (Object.keys(object1).length !== Object.keys(object2).length) {
          return false;
        } else if (object1.i === object2.j) {
          return true;
        }
      }      
    }
  }
  return true;
};*/