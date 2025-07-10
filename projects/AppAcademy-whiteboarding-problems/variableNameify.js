#!/usr/bin/env node

/**
 * Module: variableNameify
 * ------------------------
 * This module defines the `variableNameify` function, which takes an array of words
 * and returns a variable name in mixCase (camelCase) style.
 * All words are lowercased, and every word after the first starts with an uppercase letter.
 *
 * Example usage:
 *   variableNameify(['is', 'prime']);  // => 'isPrime'
 *   variableNameify(['remove', 'last', 'vowel']);  // => 'removeLastVowel'
 *   variableNameify(['MaX', 'VALUE']);  // => 'maxValue'
 */

/**
 * Converts an array of words into camelCase variable name.
 *
 * @param {string[]} words - Array of words to convert
 * @returns {string} - The camelCase variable name
 */
function variableNameify(words) {
  // Your implementation here
  let resStr = words[0].toLowerCase();

  for (let i = 1; i < words.length; i++) {
    let word = words[i].toLowerCase();
    resStr += word[0].toUpperCase() + word.slice(1);
  }

  return resStr;
}

// Example usage:
console.log(variableNameify(["is", "prime"])); // => 'isPrime'
console.log(variableNameify(["remove", "last", "vowel"])); // => 'removeLastVowel'
console.log(variableNameify(["MaX", "VALUE"])); // => 'maxValue'
