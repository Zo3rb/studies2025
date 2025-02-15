/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let ans = nums[i] + nums[j];
      ans < target ? (res += 1) : false;
    }
  }

  return res;
};
