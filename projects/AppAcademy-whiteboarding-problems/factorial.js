#!/usr/bin/env node

/**
 * Module: factorial
 * -----------------
 * This module exports a function `factorial` that takes a non-negative integer `n`
 * and returns the factorial of `n`. The factorial of a number n is defined as:
 * n! = n × (n-1) × (n-2) × ... × 1
 *
 * Examples:
 *   factorial(1);   // => 1
 *   factorial(4);   // => 24
 *   factorial(5);   // => 120
 *   factorial(10);  // => 3628800
 */

/**
 * Returns the factorial of the given number `n`.
 *
 * @param {number} n - A non-negative integer
 * @returns {number} The factorial of `n`
 */
function factorial(n) {
  // Your implementation here
  if (n === 0 || n === 1) return 1;

  return n * factorial(n - 1);
}

module.exports = factorial;

// Example usage:
if (require.main === module) {
  console.log(factorial(1)); // => 1
  console.log(factorial(4)); // => 24
  console.log(factorial(5)); // => 120
  console.log(factorial(10)); // => 3628800
}
