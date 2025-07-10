#!/usr/bin/env node

/**
 * Module: reverseHyphenString
 * ---------------------------
 * This module defines a function `reverseHyphenString(string)` that takes in a
 * hyphenated string and returns the reversed hyphenated string.
 *
 * Example usages:
 *   reverseHyphenString("Go-to-the-store") // => "store-the-to-Go"
 *   reverseHyphenString("Jump,-jump-for-joy") // => "joy-for-jump-Jump,"
 */

/**
 * Reverses the words in a hyphenated string.
 *
 * @param {string} string - A hyphenated string.
 * @returns {string} The reversed hyphenated string.
 */
function reverseHyphenString(string) {
  string += "-";
  const myStack = [];
  let reversedString = "";

  let oneWord = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "-") {
      myStack.push(oneWord);
      oneWord = "";
      continue;
    } else {
      oneWord += string[i];
    }
  }

  while (myStack.length) {
    if (myStack.length === 1) {
      reversedString += myStack.pop();
    } else {
      reversedString += myStack.pop() + "-";
    }
  }

  return reversedString;
}

// Example usages
console.log(reverseHyphenString("Go-to-the-store")); // => "store-the-to-Go"
console.log(reverseHyphenString("Jump,-jump-for-joy")); // => "joy-for-jump-Jump,"
