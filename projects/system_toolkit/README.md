# 🐧 Bash Scripting Utility Lab

A beginner-friendly interactive Bash script that helps you explore and execute common Linux tasks via a simple command-line menu.

---

## 📋 Features

This script performs various system tasks based on the user’s selection:

1. **System Info**

View operating system type, kernel version, uptime, current user, and default shell.

2. **Backup a Directory**

Archive and compress a chosen directory using `tar` with gzip compression.

3. **Disk Usage**

Display the top 5 mounted file systems sorted by usage.

4. **Active Users**

List currently logged-in users and show the total count.

5. **Exit**

Exit the script cleanly.

---

## 🧠 Technologies Used

- **Bash scripting**

- Core Unix/Linux utilities:

- `uname`, `uptime`, `who`

- `df`, `sort`, `wc`

- `tar`, `date`, `hostname`

---

## 🚀 How to Use

1. Make the script executable:

```bash

chmod +x your_script_name.sh

```

2. Run the script:

```bash

./your_script_name.sh

```

3. Follow the on-screen instructions.

The script exits after executing the selected task.

---

## 🧩 Sample Output

```

Please enter your username:

Ali

Date: Mon May 20 10:45:12 PM --- Hostname: ubuntu-server

Welcome Ali! Hope everything is going well with you.

Script will exit after completing the selected task.



========== Main Menu ==========



1. Show system info

2. Backup & directory

3. View disk usage

4. Show active users

5. Exit



Choose an option [1-5]:

```

---

## 📝 Notes

- This script is designed to run **one task per execution**.

- For advanced use, consider refactoring with functions and logging.

- Tested on Ubuntu 22.04 and other Unix-based systems.

---

## 📚 Learning Goals

This project demonstrates understanding of:

- Variables and user input

- Conditional statements (`if`, `case`)

- Loops (`while`)

- Command substitution

- Basic system commands and task automation

---

## 📦 Optional Enhancements

- Add logging to track usage history

- Validate user input more robustly

- Convert menu actions into modular functions

- Add flags like `--help` for quick usage info
