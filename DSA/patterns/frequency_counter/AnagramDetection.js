// AnagramDetection.js

function areAnagrams(str1, str2) {
  /**
   * Check if two strings are anagrams using the Frequency Counter pattern.
   */
  if (str1.length !== str2.length) return false;

  let freqCount = {};

  for (let char of str1) {
    freqCount[char] = (freqCount[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!freqCount[char] || freqCount[char] === 0) {
      return false;
    }
    freqCount[char]--;
  }

  return true;
}
