#!/usr/bin/env node

/**
 * Module: fizzBuzz
 * ----------------
 * This module defines a function `fizzBuzz(max)` that returns an array of numbers
 * from 0 up to max (exclusive) that are divisible by either 3 or 5, but not both.
 *
 * Example usages:
 *   fizzBuzz(20);   // => [3, 5, 6, 9, 10, 12, 18]
 */

/**
 * Returns an array of numbers from 0 to max that are divisible by 3 or 5, but not both.
 *
 * @param {number} max - The upper bound (exclusive) of the range.
 * @returns {number[]} An array of numbers satisfying the fizzBuzz condition.
 */
function fizzBuzz(max) {
  const result = [];

  for (let i = 3; i < max; i++) {
    if (i % 3 === 0 && i % 5 === 0) continue;
    else if (i % 3 === 0 || i % 5 === 0) {
      result.push(i);
    }
  }

  return result;
}

// Example usages
console.log(fizzBuzz(20)); // => [3, 5, 6, 9, 10, 12, 18]
