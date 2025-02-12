#!/bin/bash

# Date: Feb 12, 2025.
# Author: Ali
# This is a simple challenge script that checks a Given
# Number if it was Even or Odd Number.

# Usage: $ ./even_or_odd.sh -> with permission.
# or
# $ bash even_or_odd.sh -> without permission.

# Getting the User Input. #
read -p "Please enter a Number to check if Odd or Even: " USER_INPUT

# Function to Check if Even or Odd
even_or_odd() {
    if (("$1" % 2 == 0)); then
        echo "The Number $1: is Even"
    else
        echo "The Number $1: is Odd"
    fi
}

# Checking if the User provided a Number
if [[ "$USER_INPUT" =~ ^[0-9]+$ ]]; then
    even_or_odd "$USER_INPUT"
fi
