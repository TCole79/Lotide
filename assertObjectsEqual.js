// Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console. 
/*
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
  }
  return true;
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log("test2-> ", eqObjects(ab, ba)); // => true
// assertEqual(ab, ba);
*/
/*
const assertObjectsEqual = function(actual, expected) {
  // 
  const inspect = require('util').inspect; // <= add this line


};

// Let's make use of the inspect function. Here is an example use of it to help you apply it in our function:
// console.log(`Example label: ${inspect(actual)}`);
*/
const eqObjects = function (object1, object2) {
  let arr1 = Object.entries(object1);
  let arr2 = Object.entries(object2);
  // [a, b] => Object.keys
  //[1, 2] => Object.value
  // [[a: 1, [b, 2]] => Object.entries

  if (arr1.length !== arr2.length) {
    return false;
  }

  //for (let key in arr1) {
  //  arr1[key] !== arr2[key]
  //}

  for (let value of arr1) {
    console.log(object1[value[0]] !== object2[value[0]]);
    // if (arr1[i] === arr2[i]) {
    //   return false;
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const result = eqObjects(actual, expected);
  
  if (result) {
    //const inspect = require('util').inspect; // <= add this line
    console.log(`\uD83D\uDE00 \uD83D\uDE00 \uD83D\uDE4F Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`octagonal_sign: Assertion Failed: ${actual} !== ${expected}`);
  }
};


//console.log(assertObjectsEqual(`Example label: ${inspect(actual)}`));
// assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });

// Let's make use of the inspect function. Here is an example use of it to help you apply it in our function:

//With this problem resolved, you should see more detailed object output to the console:
// ✅✅✅ Assertion Passed: { a: '1', b: 2 } === { b: 2, a: '1' }
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '2' });