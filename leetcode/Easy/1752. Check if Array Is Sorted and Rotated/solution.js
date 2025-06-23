/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        return false;
      }
    }

    return true;
  }

  let portionArr = [];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      portionArr = nums.splice(i);
      break;
    }
  }

  return isSorted(portionArr.concat(nums));
};
