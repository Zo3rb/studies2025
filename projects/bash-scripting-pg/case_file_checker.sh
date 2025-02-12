#!/bin/bash

read -p "Enter a file or directory name: " name

if [ ! -e "$name" ]; then
    echo "Error: '$name' does not exist!"
    exit 1
fi

case "$name" in
    *.sh) echo "'$name' is a shell script." ;;
    *.txt) echo "'$name' is a text file." ;;
    *.jpg | *.png) echo "'$name' is an image file." ;;
    */) echo "'$name' is a directory." ;;
    *) echo "Unknown file type." ;;
esac
