#!/usr/bin/env node

/**
 * Module: numsToWords
 * ---------------------
 * This module defines the `numsToWords` function, which converts each digit
 * in a numeric string into its corresponding English word, with each word
 * capitalized and concatenated.
 *
 * Example usage:
 *   numsToWords('42');        // => 'FourTwo'
 *   numsToWords('123');       // => 'OneTwoThree'
 *   numsToWords('159598');    // => 'OneFiveNineFiveNineEight'
 */

/**
 * Converts a string of numeric digits into a string of their word representations.
 *
 * @param {string} numString - A string containing numeric characters only
 * @returns {string} - The word representation of the digits
 */
function numsToWords(numString) {
  // Your implementation here
  const digitToWord = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
  };

  let resStr = "";

  for (let i of numString) {
    resStr += digitToWord[i];
  }

  return resStr;
}

// Example usage:
console.log(numsToWords("42")); // => 'FourTwo'
console.log(numsToWords("123")); // => 'OneTwoThree'
console.log(numsToWords("159598")); // => 'OneFiveNineFiveNineEight'
