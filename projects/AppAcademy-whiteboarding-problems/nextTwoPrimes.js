#!/usr/bin/env node

/**
 * Module: nextTwoPrimes
 * ---------------------
 * This module exports a function `nextTwoPrimes` that takes a number `num`
 * and returns an array of the next two prime numbers greater than `num`.
 *
 * A prime number is a number greater than 1 that has no positive divisors
 * other than 1 and itself.
 *
 * Examples:
 *   nextTwoPrimes(2);    // => [3, 5]
 *   nextTwoPrimes(7);    // => [11, 13]
 *   nextTwoPrimes(97);   // => [101, 103]
 */

/**
 * Returns the next two prime numbers greater than the given number.
 *
 * @param {number} num - A positive integer
 * @returns {number[]} An array of the next two primes after `num`
 */
function nextTwoPrimes(num) {
  // Your implementation here
  let nextPrimes = 0;
  const primes = [];

  for (let i = num + 1; i < Infinity; i++) {
    if (nextPrimes === 2) {
      return primes;
    }
    if (isPrime(i)) {
      nextPrimes += 1;
      primes.push(i);
    } else {
      continue;
    }
  }
}

/**
 * Determines whether a number is a prime number.
 *
 * @param {number} number - The number to check for primality.
 * @returns {boolean} True if the number is prime, otherwise false.
 */
function isPrime(number) {
  if (number < 2) return false;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }

  return true;
}

module.exports = nextTwoPrimes;

// Example usage:
if (require.main === module) {
  console.log(nextTwoPrimes(2)); // => [3, 5]
  console.log(nextTwoPrimes(3)); // => [5, 7]
  console.log(nextTwoPrimes(7)); // => [11, 13]
  console.log(nextTwoPrimes(8)); // => [11, 13]
  console.log(nextTwoPrimes(20)); // => [23, 29]
  console.log(nextTwoPrimes(97)); // => [101, 103]
}
