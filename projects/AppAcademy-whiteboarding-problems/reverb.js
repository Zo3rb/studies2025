#!/usr/bin/env node

/**
 * Module: reverb
 * ----------------
 * This module defines the `reverb` function which appends the substring
 * of a word starting from the last vowel to the end of the word.
 * If no vowel exists, the word is returned unchanged.
 *
 * Vowels considered: a, e, i, o, u (case-insensitive).
 *
 * Example usage:
 *   reverb('running');  // => 'runninging'
 *   reverb('wild');     // => 'wildild'
 *   reverb('debugged'); // => 'debuggeded'
 *   reverb('my');       // => 'my'
 */

/**
 * Returns the word with the substring after the last vowel repeated.
 *
 * @param {string} word - The input word string
 * @returns {string} - The transformed word
 */
function reverb(word) {
  // Your implementation here
  const vowels = "aeiou";
  let resStr = "";
  let wordCopy = word;

  for (let i = word.length - 1; i >= 0; i--) {
    if (vowels.includes(word[i])) {
      return wordCopy + word.slice(i);
    }
  }

  return word;
}

// Example usage:
console.log(reverb("running")); // => 'runninging'
console.log(reverb("wild")); // => 'wildild'
console.log(reverb("debugged")); // => 'debuggeded'
console.log(reverb("my")); // => 'my'
