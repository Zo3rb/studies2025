# Challenge 7: Reverse a String

## 📜 Description

Create a Bash script that:

1. Prompts the user to enter a string.
2. Validates that the input is not empty.
3. Reverses the entered string.
4. Prints the reversed string as output.

## 📝 Example Usage

```bash
$ bash reverse_string.sh
Please Enter a String to Reverse it: hello
Reversed String: olleh

```

```bash
$ bash reverse_string.sh
Please Enter a String to Reverse it: world123
Reversed String: 321dlrow

```

## 🔹 Instructions

- **Ensure the input is not empty.**
- **Use the `rev` command** to reverse the string.
- **Validate user input** and provide an appropriate error message if necessary.
- **Keep the script simple and efficient.**

## 💡 Hints

- Use `[[ -z "$USER_INPUT" ]]` to check if the input is empty.
- Use `echo "$USER_INPUT" | rev` to reverse the string.
