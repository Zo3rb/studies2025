#!/bin/bash

# Date: Feb 15, 2025.
# Author: Ali

# This script compares two numbers entered by the user and prints the result.

# Usage: $ ./number_comparison.sh -> with permission.
# or
# $ bash number_comparison.sh -> without permission.

################# Script Starting Point #################

# Getting the two numbers.
read -p "Please enter the first number: " NUM_1
read -p "Please enter the second number: " NUM_2

# Validate user input to ensure both values are numbers.
if ! [[ "$NUM_1" =~ ^-?[0-9]+$ ]] || ! [[ "$NUM_2" =~ ^-?[0-9]+$ ]]; then
    echo "❌ Error: Please enter valid numbers!"
    exit 1
fi

# Convert inputs to integers.
NUM_1=$((NUM_1))
NUM_2=$((NUM_2))

# Comparing the inputs.
if ((NUM_1 == NUM_2)); then
    echo "✅ Both numbers are equal."
elif ((NUM_1 > NUM_2)); then
    echo "🔼 $NUM_1 is greater than $NUM_2."
else
    echo "🔽 $NUM_1 is less than $NUM_2."
fi
