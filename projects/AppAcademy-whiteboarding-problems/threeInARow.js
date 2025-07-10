#!/usr/bin/env node

/**
 * Module: threeInARow
 * --------------------
 * This module defines the `threeInARow` function which checks if an array
 * of numbers contains three identical numbers appearing consecutively.
 *
 * Example usage:
 *   threeInARow([4, 3, 7, 7, 7, 13, 8]);  // => true
 *   threeInARow([10, 9, 20, 33, 3, 3]);   // => false
 */

/**
 * Checks if an array has three identical consecutive numbers.
 *
 * @param {number[]} arr - Array of numbers to check
 * @returns {boolean} - True if three of the same number are consecutive, false otherwise
 */
function threeInARow(arr) {
  // Your implementation here
  if (arr.length < 3) return false;
  let occurs = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      occurs++;
      if (occurs === 3) return true;
    } else {
      occurs = 1;
    }
  }

  return false;
}

// Example usage:
console.log(threeInARow([4, 3, 7, 7, 7, 13, 8])); // => true
console.log(threeInARow([10, 9, 20, 33, 3, 3])); // => false
