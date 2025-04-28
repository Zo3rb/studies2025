#!/bin/python3

"""
  Problem 1: Print Numbers from 1 to N (Ascending Order)

  Write a recursive function that takes a number N as input and prints numbers from 1 down to N.
"""

def print_ascending(n, current = 1):
    """Solution."""
    if current > n:
        return
    print(current)
    print_ascending(n, current + 1)

print_ascending(5)
