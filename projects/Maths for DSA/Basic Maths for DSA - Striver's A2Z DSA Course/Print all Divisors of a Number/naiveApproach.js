#!/bin/env node
/**
 * Print all divisors from a given Number:
 *
 *  Problem Statement:
 *  Given an integer n, print all divisors of n in increasing order.
 *  A divisor of n is any integer d such that n % d == 0.
 */

/**
 *
 * @param {*} number - Target to found all Divisors of
 * @returns [int] - Divisors
 */
function printDivisors(number) {
  let res = [1];
  let iterator = 2;

  while (iterator <= number) {
    if (number % iterator === 0) {
      res.push(iterator);
    }
    iterator++;
  }

  return res;
}

// Test Cases.
console.log("Test Case 36");
console.log(printDivisors(36));

console.log();
console.log("Test Case 80");
console.log(printDivisors(80));
