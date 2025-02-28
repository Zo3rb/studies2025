// MajorityElement.js

function findMajorityElement(arr) {
  /**
   * Find the majority element (element that appears more than n/2 times) using the Frequency Counter pattern.
   */
  let freqCount = {};

  for (let num of arr) {
    freqCount[num] = (freqCount[num] || 0) + 1;
    if (freqCount[num] > Math.floor(arr.length / 2)) {
      return num;
    }
  }

  return null;
}
