# Challenge 3: Simple Calculator

## 📜 Description

Create a Bash script that:

1. Prompts the user to enter two numbers.
2. Asks the user to choose an arithmetic operation (`+`, `-`, `*`, `/`).
3. Performs the selected operation on the numbers.
4. Prints the result of the operation.
5. Ensures proper input validation.

## 📝 Example Usage

```bash
Please enter the First Number: 10
Please enter the Second Number: 5
Choose operation (+, -, *, /): *
Result: 10 * 5 = 50
```

```bash
Please enter the First Number: 15
Please enter the Second Number: 3
Choose operation (+, -, *, /): /
Result: 15 / 3 = 5
```

## 🔹 Instructions

- **Validate user input** to ensure the numbers are valid integers.
- **Ensure division by zero is handled correctly.**
- **Use functions** to keep the script modular and organized.
- **Properly escape** `*****` **in multiplication** to avoid shell wildcard issues.

## 💡 Hints

- Use the `bc` command for arithmetic operations.
- Escape `*` properly when passing it as an argument.
- Validate inputs using regular expressions (`^[-]?[0-9]+$`).
- Ensure division by zero is prevented.

🚀 **Try solving it before requesting the solution!**
