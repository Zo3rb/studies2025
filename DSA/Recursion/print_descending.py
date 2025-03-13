#!/bin/python3

"""
  Problem 1: Print Numbers from N to 1 (Descending Order)

  Write a recursive function that takes a number N as input and prints numbers from N down to 1.
"""

def print_descending(n):
    """Solution."""
    if n == 1:
        print(n)
        return
    print(n)
    print_descending(n - 1)

print_descending(5)
