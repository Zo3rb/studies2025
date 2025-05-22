#!/bin/bash

# Step 1: Ask for user's name
echo "Please enter your username:"
read USERNAME

# Step 2: Display date and hostname
echo "Date: $(date) --- Hostname: $(hostname)"

# Step 3: Greet the user
echo "Welcome $USERNAME! Hope everything is going well with you."

# Step 4: Start main menu loop
while true; do
    echo ""
    echo " ========== Main Menu ========== "
    echo ""
    echo "1. Show system info"
    echo ""
    echo "2. Backup & directory"
    echo ""
    echo "3. View disk usage"
    echo ""
    echo "4. Show active users"
    echo ""
    echo "5. Exit"
    echo ""
    echo " ========== Main Menu ========== "

    echo "Choose an option [1-5]: "
    read CHOICE

    echo ""

    case $CHOICE in
    1)
        echo "You chose option 1: System info (coming soon)"
        ;;
    2)
        echo "You chose option 2: Backup & directory (coming soon)"
        ;;
    3)
        echo "You chose option 3: View disk usage (coming soon)"
        ;;
    4)
        echo "You chose Option 4: Show active users (coming soon)"
        ;;
    5)
        echo "Goodbye, $USERNAME!"
        break
        ;;
    *)
        echo "Invalid option, Please choose between 1 - 5."
        ;;
    esac
done
