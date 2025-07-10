#!/usr/bin/env node

/**
 * Module: objectToString
 * -----------------------
 * This module defines the `objectToString` function, which converts a character count
 * object into a string that represents each character repeated according to its count.
 *
 * Example usage:
 *   objectToString({ a: 2, b: 4, c: 1 }); // => 'aabbbbc'
 *   objectToString({ b: 1, o: 2, t: 1 }); // => 'boot'
 */

/**
 * Converts a character count object into a string.
 *
 * @param {Object} count - An object where keys are characters and values are their counts
 * @returns {string} - A string with characters repeated according to their count
 */
function objectToString(count) {
  // Your implementation here
  let resStr = "";
  for (let [key, val] of Object.entries(count)) {
    resStr += String(key).repeat(val);
  }

  return resStr;
}

// Example usage:
console.log(objectToString({ a: 2, b: 4, c: 1 })); // => 'aabbbbc'
console.log(objectToString({ b: 1, o: 2, t: 1 })); // => 'boot'
