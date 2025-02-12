#!/bin/bash

echo "Select an option:"
echo "1) Start"
echo "2) Stop"
echo "3) Restart"
echo "4) Exit"

read -p "Enter your choice: " choice

case "$choice" in
    1) echo "Starting the system..." ;;
    2) echo "Stopping the system..." ;;
    3) echo "Restarting the system..." ;;
    4) echo "Exiting... Goodbye!" ;;
    *) echo "Invalid option. Please choose between 1-4." ;;
esac
