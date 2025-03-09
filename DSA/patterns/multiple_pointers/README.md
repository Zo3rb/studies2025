# Multiple Pointers Pattern

The **Multiple Pointers** pattern is a technique used to solve problems involving searching, comparing, or optimizing within an array or string by using two or more pointers instead of nested loops. This pattern helps achieve an efficient solution with reduced time complexity.

## When to Use

- When dealing with sorted arrays or strings.
- When searching for pairs or triplets that satisfy a condition.
- When solving problems that involve two or more elements interacting within a data structure.
- When avoiding unnecessary nested loops to improve performance.

## How It Works

1. Place two or more pointers at different positions in the data structure (e.g., beginning and end).
2. Move the pointers toward each other or based on certain conditions.
3. Optimize the approach to reduce time complexity, usually from **O(n²)** to **O(n)**.

## Advantages

- ✅ Reduces time complexity significantly
- ✅ Works well with sorted arrays or strings
- ✅ Eliminates the need for nested loops in many cases
- ✅ Improves readability and efficiency of solutions

## Example Problems & Solutions

### **Example 1: Find a Pair with a Given Sum**

### Problem Statement

Given a sorted array, determine if any two numbers sum up to a given target.

### **Python Implementation for Counting Unique Values**

```python
def has_pair_with_sum(arr, target):
    left, right = 0, len(arr) - 1

    while left < right:
        current_sum = arr[left] + arr[right]

        if current_sum == target:
            return True
        elif current_sum < target:
            left += 1
        else:
            right -= 1

    return False

# Example Usage
print(has_pair_with_sum([1, 2, 3, 4, 6], 9))  # Output: True
print(has_pair_with_sum([1, 2, 3, 4, 6], 15)) # Output: False

```

### **JavaScript Implementation for Counting Unique Values**

```javascript
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
```

### **Example 2: Count Unique Values**

### Problem

Given a sorted array, count the number of unique values.

### **Python Implementation**

```python
def count_unique_values(arr):
    if not arr:
        return 0

    left = 0

    for right in range(1, len(arr)):
        if arr[left] != arr[right]:
            left += 1
            arr[left] = arr[right]

    return left + 1

# Example Usage
print(count_unique_values([1, 1, 2, 2, 3, 4, 4, 5]))  # Output: 5
print(count_unique_values([]))                        # Output: 0

```

### **JavaScript Implementation**

```javascript
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
```

## Key Takeaways

- Uses **two or more pointers** instead of nested loops to optimize efficiency.
- Works best for **sorted arrays** or **strings**.
- Reduces time complexity from **O(n²)** to **O(n)**.
- Commonly used in **pair finding, unique values counting, and searching problems**.

Mastering the **Multiple Pointers** pattern will help you solve a wide range of problems efficiently! 🚀
