#!/usr/bin/env node

/**
 * Module: commonPrimeFactors
 * ---------------------------
 * This module defines a function `commonPrimeFactors(num1, num2)` that returns an array
 * of all **prime** factors shared by both input numbers.
 * A prime factor is a number that:
 *   - is a factor of both numbers
 *   - is also a prime number (greater than 1 and divisible only by 1 and itself)
 *
 * Examples:
 * commonPrimeFactors(12, 50);   // => [2]
 * commonPrimeFactors(6, 24);    // => [2, 3]
 * commonPrimeFactors(11, 22);   // => [11]
 * commonPrimeFactors(45, 60);   // => [3, 5]
 */

/**
 * Returns an array of prime numbers that are common factors of both inputs.
 *
 * @param {number} num1 - First positive integer
 * @param {number} num2 - Second positive integer
 * @returns {number[]} - Array of common prime factors
 */
function commonPrimeFactors(num1, num2) {
  // Your implementation here

  // Helper function to find all factors of a number
  function findFactors(num) {
    const res = [];
    for (let i = 2; i <= num; i++) {
      if (num % i === 0) res.push(i);
    }
    return res;
  }

  // Helper function to check for prime
  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  const factors1 = findFactors(num1);
  const factors2 = new Set(findFactors(num2));

  // Filter only common and prime factors
  return factors1.filter((factor) => factors2.has(factor) && isPrime(factor));
}

// Example usage:
console.log(commonPrimeFactors(12, 50)); // => [2]
console.log(commonPrimeFactors(6, 24)); // => [2, 3]
console.log(commonPrimeFactors(11, 22)); // => [11]
console.log(commonPrimeFactors(45, 60)); // => [3, 5]
