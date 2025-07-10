#!/usr/bin/env node

/**
 * Module: moreDotLessDash
 * ------------------------
 * This module defines the `moreDotLessDash` function which returns true if a given string
 * contains more dot characters `.` than dash characters `-`. Otherwise, it returns false.
 *
 * Example usage:
 *   moreDotLessDash('2-D arrays are fun. I think.');  // => true
 *   moreDotLessDash('.-.-.');  // => true
 *   moreDotLessDash('.-');     // => false
 *   moreDotLessDash('..--');   // => false
 */

/**
 * Determines whether a string has more dots than dashes.
 *
 * @param {string} str - The input string to be evaluated
 * @returns {boolean} - True if dot count > dash count, otherwise false
 */
function moreDotLessDash(str) {
  // Your implementation here
  const signMap = {};
  for (let sign of str) {
    signMap[sign] = (signMap[sign] || 0) + 1;
  }

  return signMap["."] > signMap["-"];
}

// Example usage:
console.log(moreDotLessDash("2-D arrays are fun. I think.")); // => true
console.log(moreDotLessDash(".-.-.")); // => true
console.log(moreDotLessDash(".-")); // => false
console.log(moreDotLessDash("..--")); // => false
