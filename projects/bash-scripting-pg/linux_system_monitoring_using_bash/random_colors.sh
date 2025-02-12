#!/bin/bash

##################### Random Color Picker Shell Game ########################


read -p "Enter colors separated by spaces (or press Enter to use default: Red Green Blue): " USER_COLORS

if [ ${#USER_COLORS[@]} -eq 0 ]; then
    COLORS=("Red" "Green" "Blue")
else
    COLORS=${USER_COLORS[@]}
fi

# Display all colors
echo -e "\nHere are the colors you provided (or default colors):"
for color in "${COLORS[@]}"; do
    echo "- $color"
done
