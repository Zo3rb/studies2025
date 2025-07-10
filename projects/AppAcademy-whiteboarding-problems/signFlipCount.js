#!/usr/bin/env node

/**
 * Module: signFlipCount
 * ---------------------
 * This module defines the `signFlipCount` function that calculates how many times
 * adjacent numbers in the array flip signs — from positive to negative or vice versa.
 * Zeros are ignored, as they are neither positive nor negative.
 *
 * Example usage:
 *   signFlipCount([5, 6, 10, 3]); // => 0
 *   signFlipCount([-12, 10, -3, -5]); // => 2
 *   signFlipCount([-1, 11.3, -3, 100]); // => 3
 */

/**
 * Returns the number of sign flips between adjacent numbers in an array.
 *
 * @param {number[]} nums - Array of numbers
 * @returns {number} - Count of adjacent sign flips (excluding 0)
 */
function signFlipCount(nums) {
  // Your implementation here
  let signs = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if ((nums[i] > 0 && nums[i + 1] < 0) || (nums[i] < 0 && nums[i + 1] > 0)) {
      signs++;
    }
  }

  return signs;
}

// Example usage:
console.log(signFlipCount([5, 6, 10, 3])); // => 0
console.log(signFlipCount([-12, 0, -3, -5])); // => 0
console.log(signFlipCount([-12, 10, -3, -5])); // => 2
console.log(signFlipCount([1, -2, -3, -4])); // => 1
console.log(signFlipCount([-1, 11.3, -3, 100])); // => 3
