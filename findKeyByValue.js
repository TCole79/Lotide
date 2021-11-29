// assertEqual code
const assertEqual = function(actual, expected) {
  let valueA = actual;
  let valueB = expected;

  if (valueA === valueB) {
    console.log(`\uD83D\uDE00 \uD83D\uDE00 \uD83D\uDE4F Assertion Passed: ${valueA} === ${valueB}`);
  } else {
    console.log(`Assertion Failed: ${valueA} !=== ${valueB}`);
  }
}
// test code:
/*
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("zim", "zim");
assertEqual("zim", "zimmer");
assertEqual(613, 613); */

//let emoji = String.fromCodePoint(0x1F621) this is angry emoji code I don't know how to use


//////////// Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

const findKeyByValue = function(inputObject, inputValue) {
  let workingArr = Object.keys(inputObject);  // this use of Object.keys will return an array of a given object's own enumerable property names, iterated in the same order that a normal loop would. 

  // for of loop for an array
  for (const key of workingArr) {   
    if (inputObject[key] === inputValue) {  // [key] is used here instead of .key as I don't know the key value I'm looking for
      console.log(key);
      return key;
    } 
  }
  //return undefined;
};
//console.log(Object.keys(inputObject));

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");

/* alternate solution:
const findKeyByValue = function (object, value) {
  let output = "";
  for (let key in object) {
    if (object[value] === object.key)
      output = key;
  }
  return output;
} */