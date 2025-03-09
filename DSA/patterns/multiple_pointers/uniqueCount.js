function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let left = 0;

  for (let right = 1; right < arr.length; right++) {
    if (arr[left] !== arr[right]) {
      left++;
      arr[left] = arr[right];
    }
  }

  return left + 1;
}

// Example Usage
console.log(countUniqueValues([1, 1, 2, 2, 3, 4, 4, 5])); // Output: 5
console.log(countUniqueValues([])); // Output: 0
