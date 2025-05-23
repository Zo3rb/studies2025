#!/bin/bash

# Step 1: Ask for user's name
echo "Please enter your username:"
read USERNAME

# Step 2: Display date and hostname
echo "Date: $(date) --- Hostname: $(hostname)"

# Step 3: Greet the user
echo "Welcome $USERNAME! Hope everything is going well with you."
echo "Script will exit after completing the selected task."

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
        echo "Here You Are ..."
        echo " ---------- System Information ----------"
        echo ""
        echo "Operating System: $(uname -o)"
        echo "Kernel Version: $(uname -r)"
        echo "Uptime: $(uptime -p)"
        echo "Current User: $USER"
        echo "Shell: $SHELL"
        break
        ;;
    2)
        echo "Validating and Starting ..."
        echo ""
        echo "Please enter the Directory Path to Archive and Compress: "
        read DIRPATH
        if [ -d "$DIRPATH" ]; then
            FOLDER_NAME=$(basename "$DIRPATH")
            DATE=$(date +%Y-%m-%d)
            BACKUP_NAME="backup_${FOLDER_NAME}_${DATE}.tar.gz"

            tar -czvf "$BACKUP_NAME" "$DIRPATH"
            echo "Backup successfully created! File created: $BACKUP_NAME"
        else
            echo "Directory not found: $DIRPATH"
        fi
        break
        ;;
    3)
        echo "Viewing Disk Usage ..."
        df -h | sort -k 5 -hr | head -n 5
        break
        ;;
    4)
        echo "Here you a list of Current active users ..."
        who
        ACTIVE_COUNT=$(who | wc -l)
        echo "Total active Users count: $ACTIVE_COUNT"
        break
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
