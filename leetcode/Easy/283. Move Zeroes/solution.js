/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length < 2) return;

  let n = nums.length;
  let leftPointer = 0;
  let rightPointer = 1;

  while (rightPointer < n) {
    if (nums[leftPointer] !== 0) {
      leftPointer++;
      rightPointer++;
    } else if (nums[rightPointer] === 0) rightPointer++;
    else
      [nums[leftPointer], nums[rightPointer]] = [
        nums[rightPointer],
        nums[leftPointer],
      ];
  }
};
