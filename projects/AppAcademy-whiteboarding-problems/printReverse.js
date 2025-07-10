#!/usr/bin/env node

/**
 * Module: printReverse
 * ---------------------
 * This module defines a function `printReverse(min, max)` that returns an array
 * of numbers in reverse order from max (exclusive) down to min (inclusive).
 *
 * Example usages:
 *   printReverse(13, 18);   // => [17, 16, 15, 14]
 *   printReverse(90, 94);   // => [93, 92, 91]
 */

/**
 * Returns an array of numbers in reverse order from max to min (exclusive).
 *
 * @param {number} min - The lower bound of the range (exclusive).
 * @param {number} max - The upper bound of the range (exclusive).
 * @returns {number[]} An array of numbers from max to min (exclusive), reversed.
 */
function printReverse(min, max) {
  const result = [];

  if (max <= min) return result;
  else {
    for (let i = max - 1; i > min; i--) {
      result.push(i);
    }
  }

  return result;
}

// Example usages
console.log(printReverse(13, 18)); // => [17, 16, 15, 14]
console.log(printReverse(90, 94)); // => [93, 92, 91]
