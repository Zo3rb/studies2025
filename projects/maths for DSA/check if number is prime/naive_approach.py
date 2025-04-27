#!/bin/python3
"""
    Check if a Given Number is Prime or not:

    Problem Statement:
    Given an integer n, determine whether n is a prime number.
    A prime number is a number greater than 1 that has no positive divisors other than 1 and itself.
"""

def is_prime_number(number):
    """Solution."""
    if number <= 1:
        return False

    iterator = 2
    while iterator < number:
        if number % iterator == 0:
            return False

        iterator += 1

    return True

# Test Cases.
if __name__ == "__main__":
    print("Test Case for 29 ==> Should Return True.")
    print(is_prime_number(29))
    print()
    print("Test Case for 10 ==> Should Return False.")
    print(is_prime_number(10))
