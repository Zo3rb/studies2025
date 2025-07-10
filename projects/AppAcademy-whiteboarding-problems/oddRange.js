#!/usr/bin/env node

/**
 * Module: oddRange
 * ---------------
 * This module defines a function `oddRange(end)` that returns an array of all
 * positive odd numbers from 1 up to and including the given `end` value.
 *
 * Example usages:
 *   oddRange(13); // => [1, 3, 5, 7, 9, 11, 13]
 *   oddRange(6);  // => [1, 3, 5]
 */

/**
 * Returns an array of all positive odd numbers up to the specified end value.
 *
 * @param {number} end - The maximum value in the returned range.
 * @returns {number[]} An array of odd numbers from 1 to end.
 */
function oddRange(end) {
  const result = [1];

  for (let i = 2; i <= end; i++) {
    if (i % 2 !== 0) {
      result.push(i);
    }
  }

  return result;
}

// Example usages
console.log(oddRange(13)); // => [1, 3, 5, 7, 9, 11, 13]
console.log(oddRange(6)); // => [1, 3, 5]
