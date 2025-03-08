#!/bin/bash

# Date: Mar 8, 2025.
# Author: Ali

# This script reverses the input string.

# Usage: $ ./reverse_string.sh
# or
# $ bash reverse_string.sh

################# Script Starting Point #################

# Prompt the user for input.
read -p "Please Enter a String to Reverse it: " USER_INPUT

# Validating the Input: Check if empty.
if [[ -z "$USER_INPUT" ]]; then
    echo "Error: The input is empty. Please enter a valid string."
    exit 1
fi

# Reversing the string.
REVERSED=$(echo "$USER_INPUT" | rev)

# Output the reversed string.
echo "Reversed String: $REVERSED"
