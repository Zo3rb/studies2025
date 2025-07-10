#!/usr/bin/env node

/**
 * abbreviate.js
 *
 * This module defines a function `abbreviate` that takes a sentence and returns
 * a modified version where words longer than 4 characters have their vowels removed.
 * Words with 4 or fewer characters remain unchanged.
 *
 * Assumes the input sentence has only lowercase characters.
 *
 * Examples:
 * abbreviate('the bootcamp is fun');        // => 'the btcmp is fun'
 * abbreviate('programming is fantastic');   // => 'prgrmmng is fntstc'
 * abbreviate('hello world');                // => 'hll wrld'
 * abbreviate('how are you');                // => 'how are you'
 */

/**
 * Returns a new sentence where words longer than 4 characters have their vowels removed.
 *
 * @param {string} sentence - A lowercase sentence string.
 * @returns {string} The modified sentence with long words abbreviated.
 */
function abbreviate(sentence) {
  const vowelsRegex = /[aeiou]/g;
  const words = sentence.split(" ");

  const abbreviatedWords = words.map((word) => {
    if (word.length > 4) {
      return word.replaceAll(vowelsRegex, "");
    } else {
      return word;
    }
  });

  return abbreviatedWords.join(" ");
}

// Example usage:
console.log(abbreviate("the bootcamp is fun")); // => 'the btcmp is fun'
console.log(abbreviate("programming is fantastic")); // => 'prgrmmng is fntstc'
console.log(abbreviate("hello world")); // => 'hll wrld'
console.log(abbreviate("how are you")); // => 'how are you'
