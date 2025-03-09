# Sliding Window Pattern

The **Sliding Window** pattern is a powerful technique used to optimize problems that involve subarrays, substrings, or sequential data processing. It helps in reducing time complexity by maintaining a window (fixed or dynamic) that slides over the data.

## When to Use

- When dealing with **contiguous subarrays or substrings**.
- When solving problems involving **maximum, minimum, or sum of subarrays**.
- When a **brute-force approach** involves nested loops and can be optimized.
- When requiring a **fixed-size** or **dynamic-size** window solution.

## How It Works

1. Define a **window** (a subset of the data).
2. Expand or contract the window based on problem constraints.
3. Move the window across the data efficiently, **avoiding unnecessary recomputation**.
4. Optimize from **O(n²) → O(n)** time complexity.

## Advantages

✅ Optimizes nested loop problems.
✅ Reduces redundant computations.
✅ Works well for **fixed-size** and **dynamic-size** subarray problems.
✅ Provides efficient **O(n)** solutions for many sliding problems.

## Example Problems & Solutions

### **Example 1: Maximum Sum Subarray (Fixed Size)**

#### Problem

Given an array and a window size `k`, find the maximum sum of any contiguous subarray of size `k`.

### **Python Implementation**

```python
def max_subarray_sum(arr, k):
    if len(arr) < k:
        return None

    max_sum = current_sum = sum(arr[:k])  # Initial window sum

    for i in range(k, len(arr)):
        current_sum += arr[i] - arr[i - k]  # Slide the window
        max_sum = max(max_sum, current_sum)

    return max_sum

# Example Usage
print(max_subarray_sum([2, 3, 5, 2, 8, 1, 5], 3))  # Output: 15
```

### **JavaScript Implementation**

```javascript
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
```

### **Example 2: Longest Substring with K Distinct Characters (Variable Size)**

#### Problem

Given a string, find the longest substring with at most `k` distinct characters.

### **Python Implementation**

```python
def longest_substring_k_distinct(s, k):
    char_count = {}
    left = 0
    max_length = 0

    for right in range(len(s)):
        char_count[s[right]] = char_count.get(s[right], 0) + 1

        while len(char_count) > k:
            char_count[s[left]] -= 1
            if char_count[s[left]] == 0:
                del char_count[s[left]]
            left += 1

        max_length = max(max_length, right - left + 1)

    return max_length

# Example Usage
print(longest_substring_k_distinct("araaci", 2))  # Output: 4
```

### **JavaScript Implementation**

```javascript
function longestSubstringKDistinct(s, k) {
  let charCount = {};
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    charCount[s[right]] = (charCount[s[right]] || 0) + 1;

    while (Object.keys(charCount).length > k) {
      charCount[s[left]]--;
      if (charCount[s[left]] === 0) {
        delete charCount[s[left]];
      }
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Example Usage
console.log(longestSubstringKDistinct("araaci", 2)); // Output: 4
```

## Key Takeaways

- **Fixed-size window** problems use a sum-based approach with subtraction/addition.
- **Dynamic-size window** problems expand and contract based on conditions.
- **Sliding the window efficiently** eliminates unnecessary computations.
- **Improves time complexity** from O(n²) to O(n) in many cases.
- **Works well for substring and subarray problems**.

Mastering the **Sliding Window** pattern will make solving array and string problems much faster! 🚀
