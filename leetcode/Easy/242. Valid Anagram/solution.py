#!/bin/python3

"""Solving Valid Anagram Question with Freq Counter Pattern."""

def is_anagram(s, t):
    '''Solving This Problem Using Frequency Counter Pattern.'''
    if len(s) != len(t): # if not the Same length.
        return False
    sfreq = {} # Building Frequency for The First String.
    tfreq = {} # Building Frequency for The Second String.
    for i in s:
        sfreq[i] = sfreq.get(i, 0) + 1 # Increase if in or 0.
    for i in t:
        tfreq[i] = tfreq.get(i, 0) + 1 # Increase if in or 0.

    for i in sfreq: # if not the same key or not equal values.
        if (i not in tfreq) or (sfreq.get(i, 0) != tfreq.get(i, 0)):
            return False
    return True