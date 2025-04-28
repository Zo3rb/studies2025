#!/usr/bin/env python3
"""
Module: Check Number is a Palindrome

Provides:
    - is_palindrome(n): returns True if integer n reads the same
      forward and backward.
"""

def is_palindrome(n: int) -> bool:
    """
    Check if the integer n is a palindrome.

    :param n: integer to check
    :return: True if n reads the same forward and backward, False otherwise
    """
    if n < 0:
        return False

    cp_n = n
    reversed_number = 0
    while n > 0:
        digit_number = n % 10
        reversed_number = reversed_number * 10 + digit_number
        n = n // 10

    return reversed_number == cp_n

if __name__ == "__main__":
    # Simple test cases
    test_values = [121, -121, 10, 12321]
    for val in test_values:
        print(f"is_palindrome({val}) -> {is_palindrome(val)}")
