#!/bin/python3
"""
product_except_self.py

This module contains a function to compute the product of all elements in an array
except the element at each index, without using division. It runs in linear time
and uses constant space (excluding the output array).
"""

from typing import List

def product_except_self(nums: List[int]) -> List[int]:
    """
    Returns an array where each element is the product of all the elements in the input
    array except the one at the current index. This implementation avoids using division
    and runs in O(n) time with O(1) extra space (excluding the output array).

    Args:
        nums (List[int]): A list of integers.

    Returns:
        List[int]: A list where each index holds the product of all other elements.
    """
    n = len(nums)
    result = [1] * n

    # First pass: calculate left products
    left_product = 1
    for i in range(n):
        result[i] = left_product
        left_product *= nums[i]

    # Second pass: multiply with right products
    right_product = 1
    for i in range(n - 1, -1, -1):
        result[i] *= right_product
        right_product *= nums[i]

    return result


if __name__ == "__main__":
    # Example test
    test_array = [1, 2, 3, 4]
    print("Input:", test_array)
    print("Output:", product_except_self(test_array))
