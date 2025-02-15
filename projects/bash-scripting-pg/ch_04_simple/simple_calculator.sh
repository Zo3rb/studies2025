#!/bin/bash

# Date: Feb 15, 2025.
# Author: Ali

# This script performs a simple arithmetic operation based on user input.

# Usage: $ ./simple_calculator.sh
# or
# $ bash simple_calculator.sh

################# Script Starting Point #################

# Getting The User Inputs.
read -p "Please enter the First Number: " NUM_1
read -p "Please enter the Second Number: " NUM_2
read -p "Choose operation (+, -, *, /): " OPS

# Validating the Inputs
if ! [[ $NUM_1 =~ ^-?[0-9]+$ ]] || ! [[ $NUM_2 =~ ^-?[0-9]+$ ]]; then
    echo "Error: Please enter valid numbers."
    exit 1
fi

NUM_1=$((NUM_1)) # Convert to integer
NUM_2=$((NUM_2))

# Function to Process the Inputs.
calculate() {
    if [[ "$2" == "/" && "$3" -eq 0 ]]; then
        echo "Error: Division by zero is not allowed!"
    else
        RESULT=$(echo "$1 $2 $3" | bc -l)
        echo "Result: $1 $2 $3 = $RESULT"
    fi
}

# Calling the unction Properly.
if [[ "$OPS" == "*" ]]; then
    calculate $NUM_1 "*" $NUM_2
else
    calculate $NUM_1 $OPS $NUM_2
fi
