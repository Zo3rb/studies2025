#!/usr/bin/env node

/**
 * twoDimensionalTotal.js
 *
 * This module exports a function `twoDimensionalTotal` that takes in a 2D array of numbers
 * and returns the total sum of all elements.
 *
 * Examples:
 *
 * const arr1 = [
 *   [5, 2, 5, 3],
 *   [12, 13],
 * ];
 * twoDimensionalTotal(arr1);  // => 40
 *
 * const arr2 = [
 *   [2],
 *   [1, 9],
 *   [1, 1, 1]
 * ];
 * twoDimensionalTotal(arr2);  // => 15
 */

/**
 * Returns the sum of all elements in a 2D array.
 *
 * @param {number[][]} array - A two-dimensional array of numbers
 * @returns {number} - Total sum of all elements
 */
function twoDimensionalTotal(array) {
  // Your implementation here
  let sum = 0;

  while (array.length) {
    if (array[array.length - 1].length === 0) {
      array.pop();
    } else {
      sum += array[array.length - 1].pop();
    }
  }

  return sum;
}

module.exports = twoDimensionalTotal;

// Example usage
if (require.main === module) {
  const arr1 = [
    [5, 2, 5, 3],
    [12, 13],
  ];
  const arr2 = [[2], [1, 9], [1, 1, 1]];
  console.log(twoDimensionalTotal(arr1)); // => 40
  console.log(twoDimensionalTotal(arr2)); // => 15
}
