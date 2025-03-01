/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let tmp = {};
  let dups = [];
  for (num of nums) {
    tmp[num] = (tmp[num] || 0) + 1;
  }

  for (let key in tmp) {
    if (tmp[key] > 1) {
      dups.push(Number(key));
    }
  }

  return dups;
};
