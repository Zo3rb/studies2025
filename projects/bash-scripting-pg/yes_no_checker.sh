#!/bin/bash

# Ask the user a question
read -p "Do you want to continue? (yes/no): " answer

# Convert input to lowercase (to handle "YES", "Yes", "yEs", etc.)
answer=$(echo "$answer" | tr '[:upper:]' '[:lower:]')

# Check user response
if [ "$answer" = "yes" ] || [ "$answer" = "y" ]; then
    echo "You chose to continue!"
elif [ "$answer" = "no" ] || [ "$answer" = "n" ]; then
    echo "You chose to exit."
else
    echo "Invalid response. Please enter yes or no."
fi