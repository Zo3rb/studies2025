# Challenge 3: Number Comparison

## 📜 Description

Create a Bash script that:

1. Prompts the user to enter **two numbers**.
2. Compares the two numbers and determines:

   - If the first number is **greater than** the second.
   - If the first number is **less than** the second.
   - If both numbers are **equal**.

3. Prints the appropriate message based on the comparison.

## 📝 Example Usage

```bash
Enter first number: 10
Enter second number: 5
🔼 10 is greater than 5.
```

```bash
Enter first number: 3
Enter second number: 8
🔽 3 is less than 8.
```

```bash
Enter first number: 7
Enter second number: 7
✅ Both numbers are equal.
```

## 🔹 Instructions

- **Use Bash scripting best practices.**
- **Validate user input** to ensure both entries are numbers.
- **Allow both positive and negative numbers.**
- **Use** `**(( ... ))**` **for numeric comparisons.**

## 💡 Hints

- Use `[[ "$NUM" =~ ^-?[0-9]+$ ]]` to validate numeric input.
- Convert inputs to integers using `NUM=$((NUM))`.
- Use `>`, `<`, `==` inside `(( ... ))` for comparisons.
  🚀 **Try solving it before requesting the solution!**
