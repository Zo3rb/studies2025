#!/usr/bin/env node

/**
 * Module: commonFactors
 * ----------------------
 * This module exports a function `commonFactors(num1, num2)` that returns an array
 * of all common factors shared by both `num1` and `num2`. A common factor is a number
 * that divides both inputs with no remainder.
 *
 * Examples:
 * commonFactors(12, 50);   // => [1, 2]
 * commonFactors(6, 24);    // => [1, 2, 3, 6]
 * commonFactors(11, 22);   // => [1, 11]
 * commonFactors(45, 60);   // => [1, 3, 5, 15]
 */

/**
 * Returns an array of all common factors of the two input numbers.
 *
 * @param {number} num1 - First positive integer
 * @param {number} num2 - Second positive integer
 * @returns {number[]} - Array of common factors
 */
function commonFactors(num1, num2) {
  // Your implementation here
  function findFactors(num) {
    let res = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) res.push(i);
    }

    return res;
  }

  let num1Factors = new Set(findFactors(num1));
  let num2Factors = new Set(findFactors(num2));

  return [...num1Factors.intersection(num2Factors)];
}

// Example usage:
console.log(commonFactors(12, 50)); // => [1, 2]
console.log(commonFactors(6, 24)); // => [1, 2, 3, 6]
console.log(commonFactors(11, 22)); // => [1, 11]
console.log(commonFactors(45, 60)); // => [1, 3, 5, 15]
