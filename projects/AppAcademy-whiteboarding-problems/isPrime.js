#!/usr/bin/env node

/**
 * Module: isPrime
 * --------------
 * This module defines a function `isPrime(number)` that returns true if the input number is a prime number,
 * and false otherwise. Assumes the input is a positive integer.
 *
 * Example usages:
 *   isPrime(2);     // => true
 *   isPrime(10);    // => false
 *   isPrime(11);    // => true
 *   isPrime(9);     // => false
 *   isPrime(2017);  // => true
 */

/**
 * Determines whether a number is a prime number.
 *
 * @param {number} number - The number to check for primality.
 * @returns {boolean} True if the number is prime, otherwise false.
 */
function isPrime(number) {
  //   let factors = 0;
  //   let iterator = number;

  //   while (iterator) {
  //     if (number % iterator === 0) {
  //       factors += 1;
  //     }
  //     iterator--;
  //   }

  //   return factors > 2 ? false : true;

  // Optimal Solution:
  if (number < 2) return false;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }

  return true;
}

// Example usages
console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true
