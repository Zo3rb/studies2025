#!/bin/env node
/**
 * Check if a Given Number is Prime or not:
 *
 * Problem Statement:
 * Given an integer n, determine whether n is a prime number.
 *  A prime number is a number greater than 1 that has no positive divisors other than 1 and itself.
 */

/**
 *
 * @param {*} number - Number to Check if is it Prime or Not.
 * @returns Boolean - true or false based on the Problem Statement.
 */
function isPrimeNumber(number) {
  if (number <= 1) return false;

  let iterator = 2;
  while (iterator <= Math.sqrt(number)) {
    if (number % iterator === 0) return false;
    iterator++;
  }

  return true;
}

// Test Cases.
console.log("Test Case for 29 ==> Should Return True.");
console.log(isPrimeNumber(29));
console.log();
console.log("Test Case for 10 ==> Should Return False.");
console.log(isPrimeNumber(10));
