#!/bin/bash

# Function to check if a file exists
file_exists() {
    if [ ! -e "$1" ]; then
        echo -e "❌ File '$1' Doesn't Exist!\n"
        exit 1
    fi
}

# Function that returns the file type
file_detect() {
    case "$1" in
        *.sh) echo -e "📜 '$1' is a Shell Script file.\n" ;;
        *.txt) echo -e "📄 '$1' is a text file.\n" ;;
        *.jpg | *.png) echo -e "🖼️ '$1' is an image file.\n" ;;
        *.log) echo -e "📜 '$1' is a log file.\n" ;;
        *.pdf) echo -e "📑 '$1' is a PDF document.\n" ;;
        */) echo -e "📁 '$1' is a directory.\n" ;;
        *) echo -e "❓ Unknown file type.\n" ;;
    esac
}

# Get user input
read -p "Please enter a file or directory name: " FILENAME

# Check if the file exists
file_exists "$FILENAME"

# Detect the file type
file_detect "$FILENAME"
