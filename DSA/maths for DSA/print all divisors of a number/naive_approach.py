#!/bin/python3
"""
    Print all divisors from a given Number:

    Problem Statement:
    Given an integer n, print all divisors of n in increasing order.
    A divisor of n is any integer d such that n % d == 0.
"""

def print_divisors(number):
    """Naive Solution Approach."""

    res = [1]
    iterator = 2

    while iterator <= number:
        if number % iterator == 0:
            res.append(iterator)
        iterator += 1

    return res

if __name__ == "__main__":
    print("Test Case 36")
    print(print_divisors(36))

    print()
    print("Test Case 80")
    print(print_divisors(80))
