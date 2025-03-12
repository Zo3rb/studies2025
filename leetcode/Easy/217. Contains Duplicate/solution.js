/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let ocu = {};

  for (let num of nums) ocu[num] = (ocu[num] || 0) + 1;
  for (let key in ocu) {
    if (ocu[key] >= 2) return true;
  }

  return false;
};
