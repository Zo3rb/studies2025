#!/bin/python3
"""
Module: sum_first_n_numbers

Description:
    This module contains a recursive function to calculate the sum of the first N natural numbers.
"""

def sum_first_n(n: int) -> int:
    """
    Recursively calculates the sum of the first N natural numbers.

    :param n: The number up to which the sum is to be calculated
    :return: Sum of first N natural numbers
    """
    if n <= 0:
        return 0

    return n + sum_first_n(n - 1)


if __name__ == "__main__":
    # Test cases
    print(sum_first_n(5))  # Expected output: 15
    print(sum_first_n(10)) # Expected output: 55
