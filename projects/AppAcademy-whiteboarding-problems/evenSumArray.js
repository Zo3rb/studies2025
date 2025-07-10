#!/usr/bin/env node

/**
 * Module: evenSumArray
 * ---------------------
 * This module defines the `evenSumArray` function, which takes an array of numbers
 * and returns a new array where each number is replaced with the sum of all even
 * numbers less than or equal to that number.
 *
 * Example usage:
 *   evenSumArray([6, 7, 5]);       // => [12, 12, 6]
 *   evenSumArray([2, 8, 3, 5]);    // => [2, 20, 2, 6]
 */

/**
 * Generates a new array where each element is replaced with the sum
 * of all even numbers less than or equal to it.
 *
 * @param {number[]} array - Array of numbers
 * @returns {number[]} - New transformed array with even sums
 */
function evenSumArray(array) {
  // Your implementation here
  let res = [];

  for (let i = 0; i < array.length; i++) {
    let sum = 0;

    for (let j = array[i]; j > 0; j--) {
      if (j % 2 === 0) {
        sum += j;
      }
    }

    res.push(sum);
  }

  return res;
}

// Example usage:
console.log(evenSumArray([6, 7, 5])); // => [12, 12, 6]
console.log(evenSumArray([2, 8, 3, 5])); // => [2, 20, 2, 6]
