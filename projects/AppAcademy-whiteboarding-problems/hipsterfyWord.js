#!/usr/bin/env node

/**
 * hipsterfyWord.js
 *
 * This module exports a function `hipsterfyWord` that takes in a string and returns the string
 * with the **last vowel removed**. Vowels are: 'a', 'e', 'i', 'o', 'u' (case-insensitive). The letter 'y' is **not** considered a vowel.
 *
 * Examples:
 *
 * hipsterfyWord('proper');     // => 'propr'
 * hipsterfyWord('tonic');      // => 'tonc'
 * hipsterfyWord('PANTHER');    // => 'PANTHR'
 * hipsterfyWord('BACKWARDS');  // => 'BACKWRDS'
 */

/**
 * Removes the last vowel (a, e, i, o, u) from the given word.
 *
 * @param {string} word - The word to process
 * @returns {string} - The word with the last vowel removed
 */
function hipsterfyWord(word) {
  // Your implementation here
  const vowels = "aeiouAEIOU";

  // Loop from end to start
  for (let i = word.length - 1; i >= 0; i--) {
    if (vowels.includes(word[i])) {
      // Found the last vowel, remove it and return
      return word.slice(0, i) + word.slice(i + 1);
    }
  }

  // No vowel found, return the original word
  return word;
}

module.exports = hipsterfyWord;

// Example usage
if (require.main === module) {
  console.log(hipsterfyWord("proper")); // => 'propr'
  console.log(hipsterfyWord("tonic")); // => 'tonc'
  console.log(hipsterfyWord("PANTHER")); // => 'PANTHR'
  console.log(hipsterfyWord("BACKWARDS")); // => 'BACKWRDS'
}
