#!/bin/python3
"""
    Try to solve the Merge Two Sorted Lists problem.
"""

def merge_lists(nums1, nums2):
    """Solution."""
    # The Result List which will be returned.
    res = []
    # Base Cases
    if not nums1 and not nums2: return []
    if not nums1: return nums2
    if not nums2: return nums1

    p1 = 0
    p2 = 0

    while p1 < len(nums1) and p2 < len(nums2):
        if nums1[p1] <= nums2[p2]:
            res.append(nums1[p1])
            p1 += 1
        else:
            res.append(nums2[p2])
            p2 += 1

    while p1 < len(nums1):
        res.append(nums1[p1])
        p1 += 1

    while p2 < len(nums2):
        res.append(nums2[p2])
        p2 += 1

    return res


print(merge_lists([1, 3, 4, 5], [2, 6, 7, 8]))
print(merge_lists([1, 3, 4, 5], []))
print(merge_lists([], [2, 6, 7, 8]))
print(merge_lists([10, 11, 13, 15, 18], [12, 14, 16, 17, 20]))
print(merge_lists([50, 57, 62, 68, 71, 80], [50, 56, 62, 72, 76, 91]))
