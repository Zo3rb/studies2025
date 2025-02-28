"""character_frequency.py"""

def character_frequency(s):
    """
    Count the frequency of each character in a string using the Frequency Counter pattern.
    """
    freq_count = {}

    for char in s:
        freq_count[char] = freq_count.get(char, 0) + 1

    return freq_count
