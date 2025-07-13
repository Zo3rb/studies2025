/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let p1 = 0;
  let p2 = 1;
  let uniquies = 1;

  while (p2 < nums.length) {
    if (nums[p1] === nums[p2]) {
      p2++;
    } else {
      nums[uniquies] = nums[p2];
      uniquies += 1;
      p1 = p2;
      p2++;
    }
  }

  return uniquies;
};
