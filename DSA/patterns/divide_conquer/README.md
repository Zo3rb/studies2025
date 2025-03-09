# Divide and Conquer Pattern

The **Divide and Conquer** pattern is a problem-solving technique that breaks a problem into smaller subproblems, solves each subproblem recursively, and then combines the results to obtain the final solution. It is widely used in sorting, searching, and optimization problems.

## When to Use

- When a problem can be broken down into **smaller independent subproblems**.
- When using recursion to **split, process, and merge results**.
- When an **efficient** approach is needed instead of brute force.
- When solving **sorting, searching, and computational problems**.

## How It Works

1. **Divide**: Break the problem into smaller subproblems.
2. **Conquer**: Solve the subproblems recursively.
3. **Combine**: Merge the solutions to get the final answer.

## Advantages

✅ Reduces time complexity significantly in many cases. ✅ Works well with recursive problems. ✅ Efficient for large datasets (e.g., sorting algorithms like **Merge Sort** and **Quick Sort**). ✅ Can be used in **binary search, matrix exponentiation, and computational geometry**.

## Example Problems & Solutions

### **Example 1: Binary Search**

#### Problem

Given a sorted array and a target value, find the index of the target using binary search. If the target is not found, return `-1`.

### **Python Implementation**

```python
def binary_search(arr, target, left, right):
    if left > right:
        return -1

    mid = (left + right) // 2

    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search(arr, target, mid + 1, right)
    else:
        return binary_search(arr, target, left, mid - 1)

# Example Usage
arr = [1, 3, 5, 7, 9, 11]
target = 5
print(binary_search(arr, target, 0, len(arr) - 1))  # Output: 2

```

### **JavaScript Implementation**

```javascript
function binarySearch(arr, target, left, right) {
  if (left > right) return -1;

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) return mid;
  else if (arr[mid] < target) return binarySearch(arr, target, mid + 1, right);
  else return binarySearch(arr, target, left, mid - 1);
}

// Example Usage
let arr = [1, 3, 5, 7, 9, 11];
let target = 5;
console.log(binarySearch(arr, target, 0, arr.length - 1)); // Output: 2
```

### **Example 2: Merge Sort**

#### Problem

Sort an array using the Merge Sort algorithm.

### **Python Implementation**

```python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left_half = merge_sort(arr[:mid])
    right_half = merge_sort(arr[mid:])

    return merge(left_half, right_half)

def merge(left, right):
    sorted_array = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            sorted_array.append(left[i])
            i += 1
        else:
            sorted_array.append(right[j])
            j += 1

    sorted_array.extend(left[i:])
    sorted_array.extend(right[j:])
    return sorted_array

# Example Usage
arr = [6, 3, 8, 5, 2, 7, 4, 1]
print(merge_sort(arr))  # Output: [1, 2, 3, 4, 5, 6, 7, 8]

```

### **JavaScript Implementation**

```javascript
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let sortedArray = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) sortedArray.push(left[i++]);
    else sortedArray.push(right[j++]);
  }

  return [...sortedArray, ...left.slice(i), ...right.slice(j)];
}

// Example Usage
let arr = [6, 3, 8, 5, 2, 7, 4, 1];
console.log(mergeSort(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
```

## Key Takeaways

- Breaks a problem into **smaller subproblems**, solves them recursively, and **merges results**.
- **Commonly used in sorting (Merge Sort, Quick Sort) and searching (Binary Search)**.
- Improves efficiency significantly from **O(n²) → O(n log n)** in many cases.
- Helps in solving **complex recursive problems** with an efficient approach.

Mastering the **Divide and Conquer** pattern will help you tackle a wide range of algorithmic problems efficiently! 🚀
