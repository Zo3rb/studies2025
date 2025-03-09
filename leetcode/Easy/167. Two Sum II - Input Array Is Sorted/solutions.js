/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0; // Pointer.
  let right = numbers.length - 1; // Another Pointer.
  while (left < right) {
    if (numbers[left] + numbers[right] === target)
      return [left + 1, right + 1]; // Required.
    else if (numbers[left] + numbers[right] > target)
      right--; // Bigger then Shift pointer 2 to left.
    else left++; // Smaller then Shift pointer 1 to right.
  }
};
