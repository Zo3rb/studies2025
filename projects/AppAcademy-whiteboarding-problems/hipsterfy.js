#!/usr/bin/env node

/**
 * Module: hipsterfy
 * ------------------
 * This module defines the `hipsterfy` function which removes the last vowel
 * from each word in a given sentence. Vowels considered are a, e, i, o, u (case-insensitive).
 * The letter 'y' is not treated as a vowel in this context.
 *
 * Example usage:
 *   hipsterfy("proper tonic panther");  // => "propr tonc panthr"
 *   hipsterfy("towel flicker banana");  // => "towl flickr banan"
 */

/**
 * Removes the last vowel from each word in the sentence.
 *
 * @param {string} sentence - A string containing one or more words
 * @returns {string} - New sentence with the last vowel of each word removed
 */
function hipsterfy(sentence) {
  // Your implementation here
  let wordArr = sentence.split(" ");

  wordArr = wordArr.map((word) => hipsterfyWord(word));

  return wordArr.join(" ");
}

/**
 * Removes the last vowel (a, e, i, o, u) from the given word.
 *
 * @param {string} word - The word to process
 * @returns {string} - The word with the last vowel removed
 */
function hipsterfyWord(word) {
  // Your implementation here
  const vowels = "aeiouAEIOU";

  // Loop from end to start
  for (let i = word.length - 1; i >= 0; i--) {
    if (vowels.includes(word[i])) {
      // Found the last vowel, remove it and return
      return word.slice(0, i) + word.slice(i + 1);
    }
  }

  // No vowel found, return the original word
  return word;
}

// Example usage:
console.log(hipsterfy("proper tonic panther")); // => "propr tonc panthr"
console.log(hipsterfy("towel flicker banana")); // => "towl flickr banan"
console.log(hipsterfy("runner anaconda")); // => "runnr anacond"
console.log(hipsterfy("turtle cheeseburger fries")); // => "turtl cheeseburgr fris"
