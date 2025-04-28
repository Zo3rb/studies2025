#!/bin/python3
"""
This module contains a function to calculate the factorial of a given number using recursion.

The factorial of a number N is the product of all positive integers less than or equal to N.
"""

def factorial(n: int) -> int:
    """
    Recursively calculates the factorial of a number.

    :param n: The number to calculate the factorial of
    :return: Factorial of n
    """
    # Base case
    if n == 0:
        return 1

    # Recursive case
    return n * factorial(n - 1)


# Test cases
if __name__ == "__main__":
    # Test with some values
    print(factorial(5))  # Expected: 120
    print(factorial(0))  # Expected: 1
    print(factorial(3))  # Expected: 6
