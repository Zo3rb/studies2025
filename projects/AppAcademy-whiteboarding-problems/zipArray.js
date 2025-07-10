#!/usr/bin/env node

/**
 * Module: zipArray
 * ----------------
 * This module exports a function `zipArray` that takes in two arrays and returns a new
 * 2D array where each element is a pair containing elements from the same index of the input arrays.
 *
 * It is assumed that both arrays are of the same length.
 *
 * Examples:
 * const a1 = ['a', 'b', 'c', 'd'];
 * const a2 = [10, 20, 30, 40];
 * zipArray(a1, a2); // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]
 */

/**
 * Combines two arrays into a single 2D array, pairing elements of the same index.
 *
 * @param {Array} arr1 - First input array
 * @param {Array} arr2 - Second input array
 * @returns {Array[]} - Zipped 2D array
 */
function zipArray(arr1, arr2) {
  // Your implementation here
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    result.push([arr1[i], arr2[i]]);
  }

  return result;
}

// Example usage:
const a1 = ["a", "b", "c", "d"];
const a2 = [10, 20, 30, 40];
console.log(zipArray(a1, a2));
// => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]
