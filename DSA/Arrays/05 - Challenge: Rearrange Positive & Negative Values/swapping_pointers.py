#!/bin/python3
"""
rearrange_positive_negative_swap.py

This module contains a function to rearrange elements in a list such that all
negative elements appear to the left and all non-negative elements appear to
the right by swapping elements using two pointers.
"""

from typing import List

def rearrange_values(lst: List[int]) -> List[int]:
    """
    Rearranges the input list so that all negative numbers appear before all
    non-negative numbers (including zero) by swapping elements in place.
    
    Args:
        lst (List[int]): A list of integers.

    Returns:
        List[int]: A list with all negative numbers on the left and non-negative
                   numbers on the right.
    """
    left = 0
    right = len(lst) - 1
    
    while left < right:
        if lst[left] < 0:
            left += 1
        elif lst[right] >= 0:
            right -= 1
        else:
            # Swap negative number at `left` with positive number at `right`
            lst[left], lst[right] = lst[right], lst[left]
            left += 1
            right -= 1
    
    return lst


if __name__ == "__main__":
    # Example test
    test_array = [1, -3, 4, -2, 0, -1, 5]
    print("Input:", test_array)
    print("Output:", rearrange_values(test_array))
