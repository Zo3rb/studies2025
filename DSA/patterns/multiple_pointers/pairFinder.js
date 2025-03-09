function hasPairWithSum(arr, target) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    let currentSum = arr[left] + arr[right];

    if (currentSum === target) return true;
    else if (currentSum < target) left++;
    else right--;
  }

  return false;
}

// Example Usage
console.log(hasPairWithSum([1, 2, 3, 4, 6], 9)); // Output: true
console.log(hasPairWithSum([1, 2, 3, 4, 6], 15)); // Output: false
