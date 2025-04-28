#!/usr/bin/env python3
"""
Module: Check Number is an Armstrong Number

Provides:
    - is_armstrong(n): returns True if integer n is an Armstrong number.
"""

def is_armstrong(n):
    """
    Check if the integer n is an Armstrong number.

    :param n: integer to check
    :return: True if n is an Armstrong number, False otherwise
    """
    # Counting the Digits
    copy_number = n
    power = 0
    while copy_number > 0:
        power += 1
        copy_number = copy_number // 10

    # Getting the Summary of the Digits ** power.
    copy_number_2 = n
    summary = 0
    while copy_number_2 > 0:
        digit = copy_number_2 % 10
        summary += digit**power
        copy_number_2 = copy_number_2 // 10

    return summary == n


if __name__ == "__main__":
    # Simple test cases
    test_values = [0, 1, 153, 9474, 123]
    for val in test_values:
        print(f"is_armstrong({val}) -> {is_armstrong(val)}")
