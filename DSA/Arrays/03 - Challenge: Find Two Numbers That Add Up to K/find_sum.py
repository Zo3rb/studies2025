#!/bin/env python3

"""
    Try to solve the Find Two Numbers That Add Up to K problem.
"""

def find_sum(nums, k):
    """Solution."""
    sorted_nums = sorted(nums)
    p1 = 0
    p2 = len(sorted_nums) - 1

    while p1 != p2:
        if sorted_nums[p1] + sorted_nums[p2] == k:
            return [sorted_nums[p1], sorted_nums[p2]]
        if sorted_nums[p1] + sorted_nums[p2] < k:
            p1 += 1
        else: p2 -= 1


print(find_sum([1, 10, 8, 4, 9], 17))
print(find_sum([5, 12, 15, 21, 6, 17], 33))
print(find_sum([-2, -2, 11, 15, -3], 8))
