#!/usr/bin/env node

/**
 * Module: maxValue
 * ---------------
 * This module defines a function `maxValue(array)` that returns the largest value in an array of numbers.
 * If the array is empty, it returns null.
 *
 * Example usages:
 *   maxValue([12, 6, 43, 2]);       // => 43
 *   maxValue([]);                  // => null
 *   maxValue([-4, -10, 0.43]);     // => 0.43
 */

/**
 * Returns the largest number in an array.
 *
 * @param {number[]} array - An array of numbers.
 * @returns {number|null} The maximum number in the array, or null if the array is empty.
 */
function maxValue(array) {
  if (array.length <= 0) return null;

  let maxNumber = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxNumber) maxNumber = array[i];
  }

  return maxNumber;
}

// Example usages
console.log(maxValue([12, 6, 43, 2])); // => 43
console.log(maxValue([])); // => null
console.log(maxValue([-4, -10, 0.43])); // => 0.43
