#!/bin/bash

# Date: Feb 21, 2025.
# Author: Ali

# This script performs a simple arithmetic operation based on user input.
# Validating if the Entered Number is Prime Number or Not.

# Usage: $ ./prime_checker.sh
# or
# $ bash prime_checker.sh

################# Script Starting Point #################

# Get user input
read -p "Please Enter a Number to Check if it's Prime or Not: " USER_INPUT

# Validate input
if [[ -z "$USER_INPUT" ]] || [[ ! "$USER_INPUT" =~ ^[0-9]+$ ]]; then
    echo "Error: Please enter a valid positive integer."
    exit 1
elif ((USER_INPUT < 2)); then
    echo "$USER_INPUT is neither prime nor composite."
    exit 0
elif ((USER_INPUT == 2)); then
    echo "$USER_INPUT is a Prime Number."
    exit 0
fi

# Prime checking logic
is_prime=1                                         # Assume it's prime
sqrt_val=$(echo "scale=0; sqrt($USER_INPUT)" | bc) # Get integer square root

for ((i = 2; i <= sqrt_val; i++)); do
    if ((USER_INPUT % i == 0)); then
        is_prime=0 # Found a divisor, not prime
        break
    fi
done

# Output result
if ((is_prime == 1)); then
    echo "$USER_INPUT is a Prime Number."
else
    echo "$USER_INPUT is Not a Prime Number."
fi
