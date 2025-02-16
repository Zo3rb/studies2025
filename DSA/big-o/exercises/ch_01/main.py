"""Asymptotic Notation Exercises."""

def f(n):
    """Exercise One Asymptotic Notation."""
    for i in range(n):
        for j in range(i + 1, n):
            print(f"[{i}] [{j}]")
