#!/usr/bin/env node

/**
 * Module: lcm
 * This module exports a function that computes the Least Common Multiple (LCM)
 * of two integers using the Euclidean algorithm for GCD.
 */

/**
 * Calculates the Greatest Common Divisor (GCD) of two numbers using
 * the Euclidean algorithm.
 *
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} - The GCD of a and b
 */
function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

/**
 * Returns the Least Common Multiple (LCM) of two numbers.
 *
 * @param {number} num1 - First number
 * @param {number} num2 - Second number
 * @returns {number} - The LCM of num1 and num2
 */
function lcm(num1, num2) {
  if (num1 === 0 || num2 === 0) return 0;

  const greatestCommonDivisor = gcd(num1, num2);
  return (num1 * num2) / greatestCommonDivisor;
}

// Example usage:
console.log(lcm(2, 3)); // => 6
console.log(lcm(6, 10)); // => 30
console.log(lcm(24, 26)); // => 312
