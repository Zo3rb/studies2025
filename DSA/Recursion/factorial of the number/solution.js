#!/usr/bin/env node
/**
 * This module contains a function to calculate the factorial of a given number using recursion.
 *
 * The factorial of a number N is the product of all positive integers less than or equal to N.
 */

/**
 * Recursively calculates the factorial of a number.
 *
 * @param {number} n - The number to calculate the factorial of
 * @returns {number} Factorial of n
 */
function factorial(n) {
  // Base case
  if (n === 0) {
    return 1;
  }

  // Recursive case
  return n * factorial(n - 1);
}

// Test cases
if (require.main === module) {
  // Test with some values
  console.log(factorial(5)); // Expected: 120
  console.log(factorial(0)); // Expected: 1
  console.log(factorial(3)); // Expected: 6
}
