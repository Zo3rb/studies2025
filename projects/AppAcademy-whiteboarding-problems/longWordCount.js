#!/usr/bin/env node

/**
 * Module: longWordCount
 * ---------------------
 * This module defines the `longWordCount` function which counts the number
 * of words in a string that are longer than 7 characters.
 *
 * Example usage:
 *   longWordCount("short words only");         // => 0
 *   longWordCount("one reallylong word");      // => 1
 *   longWordCount("allwordword longwordword"); // => 2
 */

/**
 * Returns the number of words longer than 7 characters in the input string.
 *
 * @param {string} string - The input string
 * @returns {number} - Count of long words (length > 7)
 */
function longWordCount(string) {
  // Your implementation here
  let res = 0;
  const wordsArr = string.split(" ");

  for (let word of wordsArr) {
    if (word.length > 7) res++;
  }

  return res;
}

// Example usage:
console.log(longWordCount("")); // => 0
console.log(longWordCount("short words only")); // => 0
console.log(longWordCount("one reallylong word")); // => 1
console.log(longWordCount("two reallylong words inthisstring")); // => 2
console.log(longWordCount("allwordword longwordword wordswordword")); // => 3
console.log(longWordCount("seventy schfifty five")); // => 1
