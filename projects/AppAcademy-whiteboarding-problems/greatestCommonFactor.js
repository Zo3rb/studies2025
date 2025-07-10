#!/usr/bin/env node

/**
 * Module: greatestCommonFactor
 * ----------------------------
 * Returns the largest number that evenly divides both inputs.
 *
 * Example usage:
 *   greatestCommonFactor(15, 25);  // => 5
 *   greatestCommonFactor(16, 24);  // => 8
 */

/**
 * Calculates the greatest common factor of two numbers using Euclidean algorithm.
 * @param {number} num1 - First positive integer
 * @param {number} num2 - Second positive integer
 * @returns {number} - Greatest common factor
 */
function greatestCommonFactor(num1, num2) {
  while (num2 !== 0) {
    let temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
}

// Example usage:
console.log(greatestCommonFactor(15, 25)); // => 5
console.log(greatestCommonFactor(16, 24)); // => 8
console.log(greatestCommonFactor(7, 11)); // => 1
