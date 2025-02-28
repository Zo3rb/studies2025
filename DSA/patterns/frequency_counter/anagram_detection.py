"""anagram_detection.py"""

def are_anagrams(str1, str2):
    """
    Check if two strings are anagrams using the Frequency Counter pattern.
    """
    if len(str1) != len(str2):
        return False

    freq_count = {}

    for char in str1:
        freq_count[char] = freq_count.get(char, 0) + 1

    for char in str2:
        if char not in freq_count or freq_count[char] == 0:
            return False
        freq_count[char] -= 1

    return True
