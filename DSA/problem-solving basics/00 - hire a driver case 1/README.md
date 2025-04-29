# Driver Hiring Challenge

## Overview

The Driver Hiring Challenge is a simple command-line program to practice basic coding skills. It determines if a candidate is eligible to be hired as a driver based on:

- Being at least 18 years old.
- Having a valid driver's license.

The challenge is implemented in two languages:

- **Python** (`hire_driver.py`): Uses standard input/output.
- **Node.js** (`hire_driver.js`): Uses the `readline` module with `async/await`.

## Flowchart

The program logic is shown in the flowchart `flow.png`, which outlines:

1. Start the program.
2. Ask for the user's age.
3. Check if age >= 18.
   - If not, output "Not eligible" and end.
4. Ask if the user has a driver's license (accepts "yes"/"y" or "no"/"n").
5. Check license status.
   - If age >= 18 and has a license, output "Eligible" and end.
   - Otherwise, output "Not eligible" and end.

---

## Flow

![ALT](./flow.png)
