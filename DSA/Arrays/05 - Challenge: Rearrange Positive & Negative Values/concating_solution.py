#!/bin/python3
"""
rearrange_positive_negative_concat.py

This module contains a function to rearrange elements in a list such that all
negative elements appear to the left and all non-negative elements appear to
the right by concatenating the negative and positive arrays.
"""

from typing import List

def rearrange_values(lst: List[int]) -> List[int]:
    """
    Rearranges the input list so that all negative numbers appear before all
    non-negative numbers (including zero). The relative order of elements is
    not required to be preserved.

    Args:
        lst (List[int]): A list of integers.

    Returns:
        List[int]: A list with all negative numbers on the left and non-negative
                   numbers on the right.
    """
    negative_values = []
    non_negative_values = []

    for num in lst:
        if num < 0:
            negative_values.append(num)
        else:
            non_negative_values.append(num)

    # Combine the two lists: negative values first, followed by non-negative
    return negative_values + non_negative_values


if __name__ == "__main__":
    # Example test
    test_array = [1, -3, 4, -2, 0, -1, 5]
    print("Input:", test_array)
    print("Output:", rearrange_values(test_array))
