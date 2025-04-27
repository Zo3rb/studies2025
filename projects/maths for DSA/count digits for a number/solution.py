#!/usr/bin/env python3
"""
Count Digits of a Number

This module contains a function to count the digits in a given integer.
"""

def count_digits(num):
    """
    Count the number of digits in an integer.
    
    Args:
        num: An integer
    
    Returns:
        The number of digits in the integer
    """
    if num == 0:
        return 1

    count = 0
    while abs(num) > 0:
        num = abs(num) // 10
        count += 1

    return count

# Test cases
if __name__ == "__main__":
    test_cases = [
        (4578, 4),
        (-392, 3),
        (0, 1),
        (1000000, 7),
        (9, 1),
        (-1, 1)
    ]

    for num, expected in test_cases:
        result = count_digits(num)
        print(f"Number: {num}, Expected: {expected}, Result: {result}, {'✅ Passed' if result == expected else '❌ Failed'}")
