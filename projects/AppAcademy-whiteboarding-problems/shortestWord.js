#!/usr/bin/env node

/**
 * Module: shortestWord
 * --------------------
 * This module exports a function `shortestWord` which receives a sentence string
 * and returns the shortest word from it. It assumes that all words in the sentence
 * have unique lengths.
 *
 * Example usage:
 *   shortestWord('app academy is cool');      // => 'is'
 *   shortestWord('programming bootcamp');     // => 'bootcamp'
 */

/**
 * Returns the shortest word in the given sentence.
 *
 * @param {string} sentence - The sentence containing multiple words
 * @returns {string} - The shortest word in the sentence
 */
function shortestWord(sentence) {
  // Your implementation here
  const wordArr = sentence.split(" ");
  let shortestWord = wordArr[0];

  for (let word of wordArr) {
    if (word.length < shortestWord.length) {
      shortestWord = word;
    }
  }

  return shortestWord;
}

// Example usage:
console.log(shortestWord("app academy is cool")); // => 'is'
console.log(shortestWord("programming bootcamp")); // => 'bootcamp'
