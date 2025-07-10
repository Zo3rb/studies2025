#!/usr/bin/env node

/**
 * Module: firstNPrimes
 * --------------------
 * This module exports a function `firstNPrimes` that uses a helper function `isPrime`
 * to generate an array of the first `n` prime numbers.
 *
 * Example:
 * firstNPrimes(0);  // => []
 * firstNPrimes(1);  // => [2]
 * firstNPrimes(4);  // => [2, 3, 5, 7]
 */

/**
 * Checks whether a number is prime.
 *
 * @param {number} number - A positive integer
 * @returns {boolean} True if the number is prime, otherwise false
 */
function isPrime(number) {
  // Your isPrime logic here
  if (number < 2) return false;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }

  return true;
}

/**
 * Returns the first `n` prime numbers in an array.
 *
 * @param {number} n - The number of prime numbers to return
 * @returns {number[]} Array containing the first `n` prime numbers
 */
function firstNPrimes(n) {
  // Your implementation goes here
  const primes = [];
  let num = 2;

  while (primes.length < n) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }

  return primes;
}

module.exports = firstNPrimes;

// Example usage:
if (require.main === module) {
  console.log(firstNPrimes(0)); // => []
  console.log(firstNPrimes(1)); // => [2]
  console.log(firstNPrimes(4)); // => [2, 3, 5, 7]
}
