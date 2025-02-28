"""finding_duplicates.py"""

def has_duplicates(arr):
    """
    Check if an array contains duplicates using the Frequency Counter pattern.
    """
    freq_count = {}

    for num in arr:
        if num in freq_count:
            return True
        freq_count[num] = 1

    return False
