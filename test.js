'use strict';

function includes(array, value) {
  // Change code below this line
  for (let number of array) {
    if (number === value) {
      return true;
    }
  }

  return false;
  // Change code above this line
}

console.log(includes([1, 2, 3, 4, 5], 12));
