#!/usr/bin/env node

/**
 * Module: logBetween
 * -------------------
 * This module defines a function `logBetween(lowNum, highNum)` that returns
 * an array of numbers from lowNum to highNum, inclusive.
 * If lowNum is greater than highNum, it returns an empty array.
 *
 * Example usages:
 *   logBetween(-1, 2);    // => [-1, 0, 1, 2]
 *   logBetween(14, 6);    // => []
 *   logBetween(4, 6);     // => [4, 5, 6]
 */

/**
 * Returns an array of numbers from lowNum to highNum, inclusive.
 *
 * @param {number} lowNum - The starting number of the range.
 * @param {number} highNum - The ending number of the range.
 * @returns {number[]} An array of numbers from lowNum to highNum inclusive.
 */
function logBetween(lowNum, highNum) {
  // Creating a placeholder Array to be returned once the algorithm finished
  const result = [];

  // If lowNum is greater than highNum, it returns an empty array.
  if (lowNum >= highNum) return result;
  else {
    for (let i = lowNum; i <= highNum; i++) {
      result.push(i);
    }
  }

  return result;
}

// Example usages
console.log(logBetween(-1, 2)); // => [-1, 0, 1, 2]
console.log(logBetween(14, 6)); // => []
console.log(logBetween(4, 6)); // => [4, 5, 6]
