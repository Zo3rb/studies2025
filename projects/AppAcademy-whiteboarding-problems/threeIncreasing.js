#!/usr/bin/env node

/**
 * Module: threeIncreasing
 * -----------------------
 * This module defines the `threeIncreasing` function which checks whether an
 * array contains three consecutive numbers in strictly increasing order,
 * where each number is exactly one greater than the previous.
 *
 * Example usage:
 *   threeIncreasing([3, 2, 11, 12, 13, 2, 4]);  // => true
 *   threeIncreasing([7, 2, 4, 5, 2, 1, 6]);     // => false
 */

/**
 * Returns true if the array contains three consecutive numbers
 * that are in increasing order by 1 each; otherwise, false.
 *
 * @param {number[]} arr - The array of numbers to check
 * @returns {boolean} - Whether the array has three increasing numbers
 */
function threeIncreasing(arr) {
  // Your implementation here
  if (arr.length < 3) return false;
  let occurs = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1] + 1) {
      occurs++;
      if (occurs === 3) return true;
    } else {
      occurs = 1;
    }
  }

  return false;
}

// Example usage:
console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4])); // => true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6])); // => false
