#!/bin/python3
"""
Module: print_name_n_times

Description:
    This module contains a recursive function to print a given name N times.
"""

def print_name(n: int, name: str) -> None:
    """
    Recursively prints the given name N times.

    :param n: Number of times to print the name
    :param name: Name to be printed
    :return: None
    """
    if n == 0:
        return
    print(name)
    return print_name(n - 1, name)


if __name__ == "__main__":
    # Test cases
    print_name(3, "John")
    print("---")
    print_name(5, "Alice")
