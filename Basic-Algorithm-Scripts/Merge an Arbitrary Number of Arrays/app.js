// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

function myFunction() {
  let newArr = [];
  for (let i = 0; i < arguments.length; i++) {
    newArr = newArr.concat(arguments[i]);
  }
  return newArr;
}

console.log(myFunction([true, true], [1, 2], ["a", "b"]));

/* OR */

function myFunction2(...arrays) {
  return arrays.flat();
}

console.log(myFunction2([true, true], [1, 2], ["a", "b"]));
