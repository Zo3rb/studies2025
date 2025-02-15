/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let res = [];
  for (let val of nums) {
    let count = 0;
    for (let val2 of nums) {
      if (val > val2) count += 1;
    }
    res.push(count);
  }

  return res;
};
