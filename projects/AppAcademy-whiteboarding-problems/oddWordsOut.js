#!/usr/bin/env node

/**
 * Module: oddWordsOut
 * ---------------------
 * This module defines the `oddWordsOut` function, which removes all words
 * with an odd number of characters from a sentence.
 *
 * Example usage:
 *   oddWordsOut('go to the store and buy milk');  // => 'go to milk'
 *   oddWordsOut('what is the answer');            // => 'what is answer'
 */

/**
 * Removes words with an odd number of characters from the sentence.
 *
 * @param {string} sentence - The input sentence
 * @returns {string} - The sentence with odd-length words removed
 */
function oddWordsOut(sentence) {
  // Your implementation here
  let wordsArr = sentence.split(" ");
  let filteredWordsArr = wordsArr.filter((word) => word.length % 2 === 0);

  return filteredWordsArr.join(" ");
}

// Example usage:
console.log(oddWordsOut("go to the store and buy milk")); // => 'go to milk'
console.log(oddWordsOut("what is the answer")); // => 'what is answer'
