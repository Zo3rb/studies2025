# Challenge 2: String Validation

## 📜 Description

Create a Bash script that:

1. Prompts the user to enter a string.
2. Checks whether the entered string is **empty**.
3. If not empty, determines if its length is **greater than 3 characters**.
4. Prints the appropriate message based on the result.

## 📝 Example Usage

```bash
Enter a string to validate:
You didn't enter anything!

```

```bash
Enter a string to validate: Hi
Your input 'Hi' is too short!

```

```bash
Enter a string to validate: Linux
Your input 'Linux' is long enough!

```

## 🔹 Instructions

- **Use Bash scripting best practices.**
- **Validate user input** to check for empty strings.
- **Use the correct method to check string length.**
- **Ensure the script is efficient and readable.**

## 💡 Hints

- Use `-z` to check if the string is empty.
- Use `${#VAR}` to determine the length of a string.
- Use `(( ... ))` for numeric comparisons.

🚀 **Try solving it before requesting the solution!**
