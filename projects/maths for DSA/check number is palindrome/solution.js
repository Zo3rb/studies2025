#!/usr/bin/env node
/**
 * Module: Check Number is a Palindrome
 *
 * Exports:
 *   - isPalindrome(n): returns true if integer n reads the same
 *     forward and backward.
 */

/**
 * Check if the integer n is a palindrome.
 *
 * @param {number} n - integer to check
 * @returns {boolean} true if n reads the same forward and backward
 */
function isPalindrome(n) {
  if (n < 0) return false;

  cpN = n;
  reversedNumber = 0;
  while (n > 0) {
    let digitNumber = n % 10;
    reversedNumber = reversedNumber * 10 + digitNumber;
    n = Math.floor(n / 10);
  }

  return cpN === reversedNumber;
}

if (require.main === module) {
  // Simple test cases
  const testValues = [121, -121, 10, 12321];
  testValues.forEach((val) => {
    console.log(`isPalindrome(${val}) -> ${isPalindrome(val)}`);
  });
}
