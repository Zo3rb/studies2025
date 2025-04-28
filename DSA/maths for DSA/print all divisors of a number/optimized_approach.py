#!/bin/python3
"""
    Print all divisors from a given Number:

    Problem Statement:
    Given an integer n, print all divisors of n in increasing order.
    A divisor of n is any integer d such that n % d == 0.
"""

from math import sqrt

def print_divisors(number):
    """Naive Solution Approach."""
    res = []
    iterator = 1

    while iterator <= sqrt(number):
        if number % iterator == 0:
            res.append(iterator)
            if number // iterator != iterator:
                res.append(number // iterator)
        iterator += 1

    return sorted(res)

if __name__ == "__main__":
    print("Test Case 36")
    print(print_divisors(36))

    print()
    print("Test Case 80")
    print(print_divisors(80))
