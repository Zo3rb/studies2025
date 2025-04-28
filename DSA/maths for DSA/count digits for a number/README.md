# Count Digits of a Number

## Problem Description

Write a function that counts the number of digits in a given integer. For example, the number 4578 has 4 digits, and the number -392 has 3 digits. Zero (0) is considered to have 1 digit.

## Examples

```bash
Input: 4578
Output: 4

Input: -392
Output: 3

Input: 0
Output: 1

Input: 1000000
Output: 7

```

## Constraints

- The input will be a valid 32-bit integer (range: -2^31 to 2^31 - 1).
- Negative numbers should be treated the same as positive numbers (only count the digits, not the negative sign).

## Approaches

There are several approaches to solve this problem:

### Approach 1: Iterative Division (Recommended for beginners)

Repeatedly divide the number by 10 until it becomes 0, counting each step.

**Pseudocode:**

```bash
function countDigits(number):
    if number is 0:
        return 1

    number = absolute value of number
    count = 0

    while number > 0:
        count = count + 1
        number = floor(number / 10)

    return count

```

### Approach 2: Logarithmic Approach

Using the mathematical property that the number of digits in a decimal number n is ⌊log₁₀(n)⌋ + 1.

**Pseudocode:**

```bash
function countDigits(number):
    if number is 0:
        return 1

    number = absolute value of number
    return floor(log10(number)) + 1

```

### Approach 3: String Conversion

Convert the number to a string and count the characters.

**Pseudocode:**

```bash
function countDigits(number):
    number = absolute value of number
    return length of string representation of number

```

## Time and Space Complexity Analysis

- **Approach 1**: O(log n) time complexity, O(1) space complexity
- **Approach 2**: O(1) time complexity, O(1) space complexity
- **Approach 3**: O(log n) time complexity, O(log n) space complexity

## Implementation Task

Choose one of the above approaches and implement the function in your preferred programming language. Try to optimize for both readability and performance.

## Bonus Challenge

1. Can you implement all three approaches and compare their performance with large numbers?
2. Which approach would work better with numbers larger than what primitive integer types can handle?
