#!/usr/bin/env node
/**
 * Module: Check Number is an Armstrong Number
 *
 * Exports:
 *   - isArmstrong(n): returns true if integer n is an Armstrong number.
 */

/**
 * Check if the integer n is an Armstrong number.
 *
 * @param {number} n - integer to check
 * @returns {boolean} true if n is an Armstrong number
 */
function isArmstrong(n) {
  // Counting the Digits.
  let copyNumber = n;
  let power = 0;
  while (copyNumber > 0) {
    power += 1;
    copyNumber = Math.floor(copyNumber / 10);
  }

  // Getting The Summary of the Digits ** Power.
  let copyNumber2 = n;
  let summary = 0;
  while (copyNumber2 > 0) {
    let digit = copyNumber2 % 10;
    summary += digit ** power;
    copyNumber2 = Math.floor(copyNumber2 / 10);
  }

  return summary === n;
}

if (require.main === module) {
  // Simple test cases
  const testValues = [0, 1, 153, 9474, 123];
  testValues.forEach((val) => {
    console.log(`isArmstrong(${val}) -> ${isArmstrong(val)}`);
  });
}
