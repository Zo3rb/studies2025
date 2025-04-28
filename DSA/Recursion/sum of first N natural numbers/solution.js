#!/usr/bin/env node
/**
 * @file sumFirstNNumbers.js
 * @description This script contains a recursive function to calculate the sum of the first N natural numbers.
 */

/**
 * Recursively calculates the sum of the first N natural numbers.
 * @param {number} n - Number up to which the sum is to be calculated
 * @returns {number} - Sum of the first N natural numbers
 */
function sumFirstN(n) {
  if (n <= 0) return 0;

  return n + sumFirstN(n - 1);
}

// Test cases
console.log(sumFirstN(5)); // Expected output: 15
console.log(sumFirstN(10)); // Expected output: 55
