#!/usr/bin/env node

/**
 * Module: myIndexOf
 * -----------------
 * This module defines a function `myIndexOf(array, target)` that returns the index of the target number
 * in the given array. If the target does not exist in the array, it returns -1.
 *
 * CONSTRAINT: Do not use built-in `indexOf` or `includes` methods.
 *
 * Example usages:
 *   myIndexOf([1, 2, 3, 4], 4);   // => 3
 *   myIndexOf([5, 6, 7, 8], 2);   // => -1
 */

/**
 * Returns the index of the target in the array or -1 if not found.
 *
 * @param {number[]} array - An array of numbers.
 * @param {number} target - The number to find in the array.
 * @returns {number} The index of the target if found, otherwise -1.
 */
function myIndexOf(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }

  return -1;
}

// Example usages
console.log(myIndexOf([1, 2, 3, 4], 4)); // => 3
console.log(myIndexOf([5, 6, 7, 8], 2)); // => -1
