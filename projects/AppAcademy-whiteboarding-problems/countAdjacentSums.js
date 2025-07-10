#!/usr/bin/env node

/**
 * Module: countAdjacentSums
 * --------------------------
 * This module defines the `countAdjacentSums` function, which counts how many times
 * two adjacent numbers in an array add up to a given target value.
 *
 * Example usage:
 *   countAdjacentSums([1, 5, 1], 6);             // => 2
 *   countAdjacentSums([7, 2, 4, 6], 7);          // => 0
 *   countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13); // => 3
 */

/**
 * Counts how many pairs of adjacent elements in the array sum to n.
 *
 * @param {number[]} arr - Array of numbers to check
 * @param {number} n - Target sum
 * @returns {number} - Number of adjacent pairs that sum to n
 */
function countAdjacentSums(arr, n) {
  // Your implementation here
  let count = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    let sum = arr[i] + arr[i + 1];
    if (sum === n) {
      count++;
    }
  }

  return count;
}

// Example usage:
console.log(countAdjacentSums([1, 5, 1], 6)); // => 2
console.log(countAdjacentSums([7, 2, 4, 6], 7)); // => 0
console.log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13)); // => 3
