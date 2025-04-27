# Check Number is an Armstrong Number

## Problem Statement

Given a non-negative integer, determine whether it is an Armstrong number. An Armstrong (or narcissistic) number of order `d` is one that is the sum of its own digits raised to the power of `d`.

## Requirements

- **Input:** A single non-negative integer `n`.
- **Output:** A boolean value (`true` or `false`) indicating whether `n` is an Armstrong number.

## Constraints

- `n` is a non-negative integer (0 ≤ n).
- You may not convert the integer to a string or use any direct language features for digit extraction; use arithmetic operations.
- Time complexity should be reasonable, ideally O(d), where `d` is the number of digits in `n`.
- Space complexity should be O(1), using only a few integer variables.

## Approach Overview

1. **Determine the number of digits (`d`):** Use division to count how many times you can divide by 10 before `n` becomes 0.
2. **Sum of powers:** Iterate through each digit of the original number, raising it to the `d`th power and accumulating the sum.
3. **Comparison:** Compare the accumulated sum to the original number; if equal, it's an Armstrong number.

## Pseudocode

```text
FUNCTION isArmstrong(n):
    # 1. Handle zero explicitly (0^1 = 0, so it is an Armstrong number)
    IF n == 0 THEN
        RETURN true

    # 2. Count digits
    temp = n
    d = 0
    WHILE temp > 0 DO
        temp = temp DIV 10
        d = d + 1

    # 3. Sum each digit raised to the d-th power
    sum_powers = 0
    temp = n
    WHILE temp > 0 DO
        digit = temp MOD 10
        sum_powers = sum_powers + (digit ^ d)
        temp = temp DIV 10

    # 4. Compare
    IF sum_powers == n THEN
        RETURN true
    ELSE
        RETURN false

END FUNCTION
```

## Examples

| Input | Output | Explanation                          |
| ----- | ------ | ------------------------------------ |
| 0     | true   | 0 raised to power 1 is 0             |
| 1     | true   | 1^1 = 1                              |
| 153   | true   | 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 |
| 9474  | true   | 9^4 + 4^4 + 7^4 + 4^4 = 9474         |
| 123   | false  | 1^3 + 2^3 + 3^3 = 36 ≠ 123           |

## Time and Space Complexity

- **Time Complexity:** O(d), where `d` is the number of digits in `n` (you loop twice over the digits).
- **Space Complexity:** O(1), only a constant number of integer variables are used.

---

_This README outlines the problem, constraints, pseudocode, and examples for checking Armstrong numbers without giving away a complete implementation._
