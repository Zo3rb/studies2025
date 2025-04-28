# Reverse an Array Using Recursion

## 📘 Overview

This project demonstrates how to reverse an array using recursion, a fundamental concept in computer science. Recursion involves a function calling itself to solve smaller instances of the same problem. In this case, we will recursively reverse an array by swapping elements from both ends towards the center.

## 🧠 Problem Statement

Given an array of integers, reverse the array in-place using recursion without using any additional data structures.

### Example

**Input:**

plaintext

CopyEdit

`[1, 2, 3, 4, 5]`

**Output:**

plaintext

CopyEdit

`[5, 4, 3, 2, 1]`

## 🔄 Recursive Approach

### Base Case

The recursion terminates when the start index is greater than or equal to the end index, indicating that the entire array has been reversed.

### Recursive Step

- Swap the elements at the start and end indices.
- Recursively call the function with the next start index and previous end index.

## 🧾 Pseudocode

```bash
function reverseArray(arr, start, end):
    if start >= end:
        return
    swap arr[start] with arr[end]
    reverseArray(arr, start + 1, end - 1)
```

## 🛠️ Example Walkthrough

Consider the array `[1, 2, 3, 4, 5]`:

1. Initial call: `reverseArray([1, 2, 3, 4, 5], 0, 4)`

   - Swap `arr[0]` and `arr[4]`: `[5, 2, 3, 4, 1]`
   - Recursive call: `reverseArray([5, 2, 3, 4, 1], 1, 3)`

2. Second call: `reverseArray([5, 2, 3, 4, 1], 1, 3)`

   - Swap `arr[1]` and `arr[3]`: `[5, 4, 3, 2, 1]`
   - Recursive call: `reverseArray([5, 4, 3, 2, 1], 2, 2)`

3. Third call: `reverseArray([5, 4, 3, 2, 1], 2, 2)`

   - Base case reached (`start >= end`), recursion terminates.

Final reversed array: `[5, 4, 3, 2, 1]`
