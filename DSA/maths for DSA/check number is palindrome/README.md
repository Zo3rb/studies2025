# Check Number is a Palindrome

## Problem Statement

Given an integer, determine whether it is a palindrome. An integer is a palindrome when it reads the same backward as forward.

## Requirements

- **Input:** A single integer `n`.
- **Output:** A boolean value (`true` or `false`) indicating whether `n` is a palindrome.

## Constraints

- You may not convert the integer into a string or any other data type for direct reversal.
- You should handle negative integers appropriately (negative numbers are not palindromes).
- Time complexity should be efficient, ideally O(log₁₀(n)).

## Approach Overview

1. **Negative Check:** If `n` is negative, immediately return `false`.
2. **Reversal Logic:** Reverse half of the number by extracting digits and building a reversed value.
3. **Comparison:** Compare the reversed half with the remaining half of the original number.

## Pseudocode

```text
FUNCTION isPalindrome(n):
    # 1. Handle negative numbers
    IF n < 0 THEN
        RETURN false

    # 2. Initialize reversed half
    reversedHalf = 0

    # 3. Build reversedHalf until it is >= remaining part of n
    WHILE n > reversedHalf DO
        digit = n MOD 10
        reversedHalf = reversedHalf * 10 + digit
        n = n DIV 10

    # 4. If the length is odd, remove the middle digit
    IF n == reversedHalf OR n == reversedHalf DIV 10 THEN
        RETURN true
    ELSE
        RETURN false

END FUNCTION
```

## Examples

| Input | Output | Explanation                                     |
| ----- | ------ | ----------------------------------------------- |
| 121   | true   | 121 reversed is 121                             |
| -121  | false  | Negative numbers are not considered palindromes |
| 10    | false  | 10 reversed is 01 (1)                           |
| 12321 | true   | 12321 reversed is 12321                         |

## Time and Space Complexity

- **Time:** O(log₁₀(n)), where n is the input integer (we process half of the digits).
- **Space:** O(1), constant extra space for variables.

---

_This README provides a clear problem statement, constraints, pseudocode, and examples without revealing a full implementation. Feel free to implement the solution in your preferred language following the above plan._
