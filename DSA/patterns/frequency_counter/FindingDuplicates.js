// FindingDuplicates.js

function hasDuplicates(arr) {
  /**
   * Check if an array contains duplicates using the Frequency Counter pattern.
   */
  let freqCount = {};

  for (let num of arr) {
    if (freqCount[num]) {
      return true;
    }
    freqCount[num] = 1;
  }

  return false;
}
