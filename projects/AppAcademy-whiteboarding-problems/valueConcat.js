#!/usr/bin/env node

/**
 * Module: valueConcat
 * --------------------
 * This module defines the `valueConcat` function which takes an array and an object,
 * and returns a new array where each element from the array is concatenated with its
 * corresponding value from the object (if any).
 *
 * Example usage:
 *   const arr = ['alex', 'maurice', 'meagan', 'ali'];
 *   const obj = { alex: 'bronca', ali: 'harris' };
 *   valueConcat(arr, obj);  // => [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]
 *
 *   valueConcat(['a', 'b', 'c'], { b: 2, c: 3 });  // => [ 'a', 'b2', 'c3' ]
 */

/**
 * Concatenates each element in the array with its corresponding value in the object, if any.
 *
 * @param {string[]} array - An array of strings
 * @param {Object} obj - An object with values to concatenate
 * @returns {string[]} - New array with concatenated values
 */
function valueConcat(array, obj) {
  // Your implementation here
  const res = [];

  for (let val of array) {
    if (obj[val]) {
      res.push(val + obj[val]);
    } else {
      res.push(val);
    }
  }

  return res;
}

// Example usage:
const arr = ["alex", "maurice", "meagan", "ali"];
const obj = { alex: "bronca", ali: "harris" };
console.log(valueConcat(arr, obj)); // => [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

console.log(valueConcat(["a", "b", "c"], { b: 2, c: 3 })); // => [ 'a', 'b2', 'c3' ]
