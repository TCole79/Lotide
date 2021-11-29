//function assertEqual(actual, expected) { // this is other way to declare a function
const assertEqual = function(actual, expected) {
  let valueA = actual;
  let valueB = expected;

  if (valueA === valueB) {
    console.log(`\uD83D\uDE00 \uD83D\uDE00 Assertion Passed: ${valueA} === ${valueB}`);
  } else {
    console.log(`Assertion Failed: ${valueA} !=== ${valueB}`);
  }
};

//let emoji = String.fromCodePoint(0x1F621) this is angry emoji code I don't know how to use

module.exports = assertEqual;