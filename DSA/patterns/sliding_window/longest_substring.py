#!/bin/python3

'''
    Problem:
    Given a string, find the longest substring with at most k distinct characters.
'''

def longest_substring_k_distinct(s, k):
    '''
        Solution.
    '''
    char_count = {}
    left = 0
    max_length = 0

    for right in range(len(s)):
        char_count[s[right]] = char_count.get(s[right], 0) + 1

        while len(char_count) > k:
            char_count[s[left]] -= 1
            if char_count[s[left]] == 0:
                del char_count[s[left]]
            left += 1

        max_length = max(max_length, right - left + 1)

    return max_length

# Example Usage
print(longest_substring_k_distinct("araaci", 2))  # Output: 4
