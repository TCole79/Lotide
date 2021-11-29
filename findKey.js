// assertEqual code
const assertEqual = function(actual, expected) {
  let valueA = actual;
  let valueB = expected;

  if (valueA === valueB) {
    console.log(`\uD83D\uDE00 \uD83D\uDE00 \uD83D\uDE4F Assertion Passed: ${valueA} === ${valueB}`);
  } else {
    console.log(`Assertion Failed: ${valueA} !== ${valueB}`);
  }
};

// Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

const findKey = function(object, callback) {
  for (let key in object) {
    if(callback(object[key]));
    //sending the object key to the callback function which is in this case x => x.stars === 2
    return key;
  }
}; 

// here is my other example code I could not get to work
// const findKey = function(inputObject, callback) {
//   let output = "";
//   for (let key in inputObject) {
//     if (inputObject.key === callback([key])) {
//       return inputObject.key;
//     } else {
//       return undefined;
//     }
//   } //return output;
// };

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma")  // => "noma"