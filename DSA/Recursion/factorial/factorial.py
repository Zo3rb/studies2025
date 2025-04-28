#!/bin/python3

"""
    Implementation of Solving Factorial in Python.
"""

def factorial(num):
    """
        Solution.
    """
    if num in (0, 1):
        return 1
    return num * factorial(num - 1)


print(factorial(5))
