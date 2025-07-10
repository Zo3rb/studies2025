#!/usr/bin/env node

/**
 * Module: pairProduct
 * -------------------
 * This module exports a function `pairProduct` that finds all pairs of indices in an array
 * whose corresponding elements multiply to a given target number.
 *
 * CONSTRAINT: Use only while loops. No for loops.
 * Each valid pair of indices should be returned only once.
 *
 * Examples:
 * pairProduct([1, 2, 3, 4, 5], 4); // => [ [0, 3] ]
 * pairProduct([1, 2, 3, 4, 5], 8); // => [ [1, 3] ]
 * pairProduct([1, 2, 3, 12, 8], 24); // => [ [1, 3], [2, 4] ]
 */

/**
 * Returns an array of index pairs whose elements multiply to the given number.
 *
 * @param {number[]} arr - The array of numbers
 * @param {number} num - The target product
 * @returns {number[][]} - Array of index pairs
 */
function pairProduct(arr, num) {
  // Your implementation here
  const result = [];
  let i = 0;

  while (i < arr.length) {
    let j = i + 1;
    while (j < arr.length) {
      if (arr[i] * arr[j] === num) {
        result.push([i, j]);
      }
      j++;
    }
    i++;
  }

  return result;
}

// Example usage:
console.log(pairProduct([1, 2, 3, 4, 5], 4)); // => [ [0, 3] ]
console.log(pairProduct([1, 2, 3, 4, 5], 8)); // => [ [1, 3] ]
console.log(pairProduct([1, 2, 3, 12, 8], 24)); // => [ [1, 3], [2, 4] ]
