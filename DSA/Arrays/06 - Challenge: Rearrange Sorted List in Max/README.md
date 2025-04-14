# Rearrange Sorted List in Max/Min Form

## Problem Statement

Given a **sorted list** of integers, rearrange the elements alternately such that the first element is the maximum value, the second is the minimum value, the third is the second maximum, the fourth is the second minimum, and so on.

Maintaining the relative order of elements is not required except for the max-min pattern. The goal is to return a new list or rearrange the original list in-place (depending on implementation) such that elements follow this alternating max-min arrangement.

## Example

```bash
Input:  [1, 2, 3, 4, 5, 6, 7]
Output: [7, 1, 6, 2, 5, 3, 4]

```

## Constraints

- `1 <= list.length <= 10^5`
- `-10^5 <= list[i] <= 10^5`
- The list is already sorted in **ascending** order.
