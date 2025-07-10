#!/usr/bin/env node

/**
 * Module: threeUniqueVowels
 * --------------------------
 * This module defines the `threeUniqueVowels` function, which checks if a string
 * contains at least three different vowels (a, e, i, o, u).
 *
 * Example usage:
 *   threeUniqueVowels('delicious');      // => true
 *   threeUniqueVowels('the bootcamp');   // => true
 *   threeUniqueVowels('bootcamp');       // => false
 *   threeUniqueVowels('dog');            // => false
 *   threeUniqueVowels('go home');        // => false
 */

/**
 * Checks if a string contains at least three unique vowels.
 *
 * @param {string} str - The input string to check
 * @returns {boolean} - True if at least three unique vowels exist, false otherwise
 */
function threeUniqueVowels(str) {
  // Your implementation here
  const vowelsMap = {};

  for (let letter of str) {
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      vowelsMap[letter] = (vowelsMap[letter] || 0) + 1;
    }
  }

  return Object.keys(vowelsMap).length >= 3;
}

// Example usage:
console.log(threeUniqueVowels("delicious")); // => true
console.log(threeUniqueVowels("the bootcamp")); // => true
console.log(threeUniqueVowels("bootcamp")); // => false
console.log(threeUniqueVowels("dog")); // => false
console.log(threeUniqueVowels("go home")); // => false
