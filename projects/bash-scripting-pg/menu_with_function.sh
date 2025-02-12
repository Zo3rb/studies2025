#!/bin/bash

# Function to start the system
start_system() {
    echo "🟢 Starting the system..."
    # Simulate an action
    sleep 1
    echo "✅ System started successfully!"
}

# Function to stop the system
stop_system() {
    echo "🔴 Stopping the system..."
    sleep 1
    echo "✅ System stopped successfully!"
}

# Function to restart the system
restart_system() {
    echo "🔄 Restarting the system..."
    stop_system
    start_system
}

# Function to exit the script
exit_script() {
    echo "👋 Exiting the script. Goodbye!"
    exit 0
}

# Display menu options
echo "Select an option:"
echo "1) Start"
echo "2) Stop"
echo "3) Restart"
echo "4) Exit"

# Read user choice
read -p "Enter your choice: " choice

# Case statement calling functions
case "$choice" in
    1) start_system ;;
    2) stop_system ;;
    3) restart_system ;;
    4) exit_script ;;
    *) echo "❌ Invalid option. Please choose between 1-4." ;;
esac
