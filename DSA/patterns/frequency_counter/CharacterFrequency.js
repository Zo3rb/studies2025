// CharacterFrequency.js

function characterFrequency(s) {
  /**
   * Count the frequency of each character in a string using the Frequency Counter pattern.
   */
  let freqCount = {};

  for (let char of s) {
    freqCount[char] = (freqCount[char] || 0) + 1;
  }

  return freqCount;
}
