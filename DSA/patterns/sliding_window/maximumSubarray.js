function maxSubarraySum(arr, k) {
  if (arr.length < k) return null;

  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < k; i++) {
    currentSum += arr[i];
  }
  maxSum = currentSum;

  for (let i = k; i < arr.length; i++) {
    currentSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Example Usage
console.log(maxSubarraySum([2, 3, 5, 2, 8, 1, 5], 3)); // Output: 15
