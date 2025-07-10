#!/usr/bin/env node

/**
 * twoDimensionalSize.js
 *
 * This module exports a function `twoDimensionalSize` that takes in a 2D-array and returns
 * the total number of elements in the array.
 *
 * Examples:
 *
 * const arr1 = [
 *   [1, 2, 3],
 *   [4, 5],
 *   [6, 7, 8, 9]
 * ];
 * twoDimensionalSize(arr1);  // => 9
 *
 * const arr2 = [
 *   ['a'],
 *   ['b', 'c', 'd', 'e']
 * ];
 * twoDimensionalSize(arr2);  // => 5
 */

/**
 * Returns the total number of elements in a 2D array.
 *
 * @param {Array<Array<any>>} array - A two-dimensional array
 * @returns {number} - Total number of elements
 */
function twoDimensionalSize(array) {
  // Your implementation here
  let sum = 0;

  while (array.length) {
    const lastArrLength = array.pop().length;
    sum += lastArrLength;
  }

  return sum;
}

module.exports = twoDimensionalSize;

// Example usage
if (require.main === module) {
  const arr1 = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9],
  ];
  const arr2 = [["a"], ["b", "c", "d", "e"]];

  console.log(twoDimensionalSize(arr1)); // => 9
  console.log(twoDimensionalSize(arr2)); // => 5
}
