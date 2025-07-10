#!/usr/bin/env node

/**
 * Module: divisibleByThreePairSum
 * --------------------------------
 * This module defines the `divisibleByThreePairSum` function which returns
 * all index pairs in an array whose elements sum to a multiple of three.
 *
 * Example usage:
 *   divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
 *    => [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]
 *
 *   divisibleByThreePairSum([8, 3, 5, 9, 2]);
 *    => [[1, 3]]
 */

/**
 * Returns pairs of indices whose elements sum to a multiple of three.
 *
 * @param {number[]} array - An array of numbers
 * @returns {number[][]} - Array of index pairs
 */
function divisibleByThreePairSum(array) {
  // Your implementation here
  const result = [];

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let sumNum = array[i] + array[j];
      if (sumNum % 3 === 0) {
        result.push([i, j]);
      }
    }
  }

  return result;
}

// Example usage:
const arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
console.log(arr1); // => [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

const arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
console.log(arr2); // => [[1, 3]]
