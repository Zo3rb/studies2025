"""Asymptotic Notation Exercises."""

def f(n):
    """Practicing"""
    for i in range(n):
        if i % 2 == 0:
            j = 1
            while j < n:
                print(f"[{i}] [{j}]")
                j *= 2
        else:
            for j in range(0, n, 2):
                print(f"[{i}] [{j}]")
