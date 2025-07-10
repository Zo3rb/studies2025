#!/usr/bin/env node

/**
 * Module: reverse2D
 * -----------------
 * This module exports a function `reverse2D` that takes a 2D array of strings and returns a
 * single string composed of all elements in reverse order.
 *
 * A 2D array is an array of arrays. This function flattens all the inner elements, starting from
 * the last row and going backwards, and then from the last element in each row backwards to the
 * first, appending each element to a result string.
 *
 * Example:
 * reverse2D([['a', 'b'], ['c']]) returns 'cba'
 */

/**
 * Returns a string of elements from a 2D array in reverse order.
 *
 * @param {string[][]} array - A 2D array (array of arrays) of strings
 * @returns {string} - A single string composed of all elements in reverse order
 */
function reverse2D(array) {
  // Your implementation here
  let resStr = "";

  while (array.length) {
    let lastArray = array[array.length - 1];
    if (!lastArray.length) array.pop();
    else {
      resStr += lastArray.pop();
    }
  }

  return resStr;
}

// Example usage:
const arr1 = [
  ["a", "b", "c", "d"],
  ["e", "f"],
  ["g", "h", "i"],
];

const arr2 = [
  ["Julian", "Matt", "Mike"],
  ["Oscar", "Patrick"],
];

console.log(reverse2D(arr1)); // => 'ihgfedcba'
console.log(reverse2D(arr2)); // => 'PatrickOscarMikeMattJulian'
