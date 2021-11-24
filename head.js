 function assertEqual(actual, expected) {
  let valueA = actual;
  let valueB = expected;

  if (valueA === valueB) {
    console.log(`\uD83D\uDE00 \uD83D\uDE00 \uD83D\uDE4F Assertion Passed: ${valueA} === ${valueB}`);
  } else {
    console.log(`Assertion Failed: ${valueA} !=== ${valueB}`);
  }
}

function head(array) {
  return array[0];
}

// test code:
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
