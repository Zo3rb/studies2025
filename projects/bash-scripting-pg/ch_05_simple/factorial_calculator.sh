#!/bin/bash

# Date: Feb 18, 2025.
# Author: Ali

# This script performs a simple arithmetic operation based on user input.
# Getting the Factorial of a Number Users enter.

# Usage: $ ./factorial_calculator.sh
# or
# $ bash factorial_calculator.sh

################# Script Starting Point #################

# Getting The User Input.
read -p "Please enter a Positive Number: " INP_NUM

# Validating the Entered Number & cast it as a number.
if [[ -z "$INP_NUM" ]] || [[ ! "$INP_NUM" =~ ^[0-9]+$ ]]; then
    echo "You Didn't Enter a Valid Number."
    exit 1
fi

# Casting the Input to be a Number.
(($INP_NUM))

# Now, We do the Math.
RES=1
if ((INP_NUM <= 1)); then
    echo "The Factorial for that Number: 1"
    exit 0
else
    while ((INP_NUM > 1)); do
        RES=$(($RES * $INP_NUM))
        ((INP_NUM--))
    done

    echo "The Factorial for that Number: $RES"
fi
