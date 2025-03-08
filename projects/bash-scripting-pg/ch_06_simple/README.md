# Challenge 6: Prime Number Checker

## 📜 Description

Create a Bash script that:

1. Prompts the user to enter a number.
2. Validates the input to ensure it is a positive integer.
3. Checks whether the entered number is **prime** or **not**.
4. Prints the appropriate message based on the result.

## 📝 Example Usage

```bash
$ bash prime_checker.sh
Please Enter a Number to Check if it's Prime or Not: 13
13 is a Prime Number.
```

```bash
$ bash prime_checker.sh
Please Enter a Number to Check if it's Prime or Not: 16
16 is Not a Prime Number.
```

```bash
$ bash prime_checker.sh
Please Enter a Number to Check if it's Prime or Not: -5
Error: Please enter a valid positive integer.
```

## 🔹 Instructions

- **Use Bash scripting best practices.**
- **Validate user input** to ensure it's a positive integer.
- **Use efficient mathematical methods** to check for primality (iterate up to `sqrt(n)`).
- **Ensure correct handling of special cases** (e.g., 1 is neither prime nor composite).

## 💡 Hints

- A prime number is only divisible by `1` and itself.
- Numbers less than `2` are **not prime**.
- Use a loop from `2` to `sqrt(n)` to check for factors.
- The `bc` command can be used for mathematical calculations in Bash.
