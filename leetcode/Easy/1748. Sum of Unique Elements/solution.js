/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  let sum = 0;
  let mapped = {};

  for (let ele of nums) mapped[ele] = (mapped[ele] || 0) + 1;
  for (let [key, val] of Object.entries(mapped)) {
    if (val === 1) sum += Number(key);
  }

  return sum;
};
