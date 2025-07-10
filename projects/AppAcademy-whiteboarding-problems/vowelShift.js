#!/usr/bin/env node

/**
 * Module: vowelShift
 * -------------------
 * This module defines the `vowelShift` function which takes in a sentence string
 * and returns a new sentence where each vowel is replaced by the next vowel
 * in the sequence ['a', 'e', 'i', 'o', 'u']. The replacement wraps around from 'u' to 'a'.
 *
 * Example usage:
 *   vowelShift('bootcamp');      // => 'buutcemp'
 *   vowelShift('hello world');   // => 'hillu wurld'
 *   vowelShift('on the hunt');   // => 'un thi hant'
 */

/**
 * Replaces each vowel in the sentence with the next vowel.
 *
 * @param {string} sentence - The input sentence
 * @returns {string} - Sentence with shifted vowels
 */
function vowelShift(sentence) {
  // Your implementation here
  const VOWELS = ["a", "e", "i", "o", "u"];
  let result = "";

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    if (VOWELS.includes(char)) {
      const currentIndex = VOWELS.indexOf(char);
      const nextIndex = (currentIndex + 1) % VOWELS.length;
      result += VOWELS[nextIndex];
    } else {
      result += char;
    }
  }

  return result;
}

// Example usage:
console.log(vowelShift("bootcamp")); // => 'buutcemp'
console.log(vowelShift("hello world")); // => 'hillu wurld'
console.log(vowelShift("on the hunt")); // => 'un thi hant'
