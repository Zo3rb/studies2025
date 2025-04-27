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
  let res = [];
  let iterator = 1;

  while (iterator <= Math.sqrt(number)) {
    if (number % iterator === 0) {
      res.push(iterator);
      if (number / iterator !== iterator) {
        res.push(number / iterator);
      }
    }
    iterator++;
  }

  return res.sort((a, b) => a - b);
}

// Test Cases.
console.log("Test Case 36");
console.log(printDivisors(36));

console.log();
console.log("Test Case 80");
console.log(printDivisors(80));
