/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let maj = {};
  let res = 0;
  for (num of nums) {
    maj[num] = (maj[num] || 0) + 1;
  }

  for (let key in maj) {
    if (maj[key] > nums.length / 2) res = key;
  }

  return Number(res);
};
