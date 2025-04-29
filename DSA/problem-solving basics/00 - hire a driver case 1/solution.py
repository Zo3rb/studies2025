#!/bin/python3
"""
    A simple program to check if a driver is eligible to be hired.
    Eligibility requires age >= 18 and a valid driver's license
"""

import sys

def get_age():
    """Prompt for and validate age input."""
    while True:
        age_input = input("Please enter your age: ").strip()
        try:
            age = int(age_input)
            if age < 0:
                print("Age cannot be negative.")
                continue
            return age
        except ValueError:
            print("Please enter a valid number for age.")

def get_license_status():
    """Prompt for and validate driver's license input."""
    valid_responses = {"yes", "y", "no", "n"}
    while True:
        license_input = input("Do you have a driver's license? (yes/y/no/n): ").strip().lower()
        if license_input in valid_responses:
            return license_input in {"yes", "y"}
        print("Please enter 'yes', 'y', 'no', or 'n'.")

def hire_driver():
    """Check driver eligibility based on age and license status."""
    print("Welcome to the Driver Hiring Application!\n")

    try:
        # Get age
        age = get_age()
        if age < 18:
            print("Sorry, we cannot hire drivers under 18 years old.")
            return

        # Get license status
        has_license = get_license_status()

        # Check eligibility
        if age >= 18 and has_license:
            print("Congratulations! You're eligible. We'll review your application and contact you soon.")
        else:
            print("Sorry, you are not eligible for this position.")

    except KeyboardInterrupt:
        print("\nProgram interrupted by user.")
        sys.exit(1)
    except Exception as e:
        print(f"\nAn unexpected error occurred: {e}")
        sys.exit(1)

if __name__ == "__main__":
    hire_driver()
