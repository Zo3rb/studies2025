#!/usr/bin/env node

/**
 * Module: countRepeats
 * ---------------------
 * This module defines the `countRepeats` function which returns the number of
 * distinct letters that appear more than once in the given string.
 * The function assumes the input string only contains lowercase letters.
 *
 * Example usage:
 *   countRepeats('calvin');           // => 0
 *   countRepeats('caaaalvin');        // => 1
 *   countRepeats('pops');             // => 1
 *   countRepeats('mississippi');      // => 3
 *   countRepeats('hellobootcampprep'); // => 4
 */

/**
 * Returns the number of letters that appear more than once in the string.
 *
 * @param {string} string - A string of lowercase letters
 * @returns {number} - Count of characters that repeat
 */
function countRepeats(string) {
  // Your implementation here
  let res = 0;
  const letterMap = {};

  for (let letter of string) {
    letterMap[letter] = (letterMap[letter] || 0) + 1;
  }

  for (letter in letterMap) {
    if (letterMap[letter] > 1) res++;
  }

  return res;
}

// Example usage:
console.log(countRepeats("calvin")); // => 0
console.log(countRepeats("caaaalvin")); // => 1
console.log(countRepeats("pops")); // => 1
console.log(countRepeats("mississippi")); // => 3
console.log(countRepeats("hellobootcampprep")); // => 4
