#!/usr/bin/env node

/**
 * Module: collapseString
 * -----------------------
 * This module defines the `collapseString` function, which removes consecutive
 * repeated characters (streaks) in a string, keeping only the first character in each streak.
 *
 * Example usage:
 *   collapseString('apple'); // => 'aple'
 *   collapseString('AAAaalviiiiin!!!'); // => 'Aalvin!'
 *   collapseString('hello   app academy'); // => 'helo ap academy'
 */

/**
 * Removes consecutive duplicate characters in a string.
 *
 * @param {string} str - The input string
 * @returns {string} - A new string with collapsed character streaks
 */
function collapseString(str) {
  // Your implementation here
  let resStr = "";
  const strFreqCount = {};

  for (let i of str) {
    strFreqCount[i] = true;
  }

  for (let key of Object.keys(strFreqCount)) {
    resStr += String(key);
  }

  return resStr;
}

// Example usage:
console.log(collapseString("apple")); // => 'aple'
console.log(collapseString("AAAaalviiiiin!!!")); // => 'Aalvin!'
console.log(collapseString("hello   app academy")); // => 'helo ap academy'
