#!/bin/bash

# Date: Feb 12, 2025.
# Author: Ali
# This is a simple challenge script that Validate STR.

# Usage: $ ./str_validation.sh -> with permission.
# or
# $ bash str_validation.sh -> without permission.

################# Script Starting Point #################

# Getting The User Input (STR).
read -p "Please Enter a string to Validate it: " USER_INPUT

# Checking if the User's Input is an Empty String
# Or Not empty and more than 3 Characters
# else not empty and less than 3 characters.
if [[ -z "$USER_INPUT" ]]; then
    echo "You didn't enter anything!"
    exit 1
elif [[ -n "$USER_INPUT" ]]; then
    if ((${#USER_INPUT} > 3)); then
        echo "Your input '$USER_INPUT' is long enough!"
    else
        echo "Your input '$USER_INPUT' is too short!"
    fi
fi
