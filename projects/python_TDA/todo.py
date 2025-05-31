"""
A simple TODO application for managing tasks.

This module provides functionality to add, list, and complete tasks using
basic Python constructs suitable for new developers. It follows PEP 8 and
pylint standards and is designed for future expansion.
"""

def add_task(tasks, task):
    """
    Add a new task to the tasks list.

    Args:
        tasks (list): The list of tasks, where each task is a tuple of (task_name, completed).
        task (str): The task description to add.
    """
    tasks.append((task, False))
    print(f"Task '{task}' added successfully.")


def list_tasks(tasks):
    """
    Display all tasks with their indices and completion status.

    Args:
        tasks (list): The list of tasks, where each task is a tuple of (task_name, completed).
    """
    if not tasks:
        print("No tasks in the list.")
        return

    print("Your TODO List:")
    for index, (task_name, completed) in enumerate(tasks, 1):
        status = "Done" if completed else "Not Done"
        print(f"{index}. {task_name} - {status}")


def complete_task(tasks, task_index):
    """
    Mark a task as completed based on its index.

    Args:
        tasks (list): The list of tasks, where each task is a tuple of (task_name, completed).
        task_index (int): The 1-based index of the task to mark as completed.

    Returns:
        bool: True if the task was marked as completed, False if the index is invalid.
    """
    if 1 <= task_index <= len(tasks):
        task_name, _ = tasks[task_index - 1]
        tasks[task_index - 1] = (task_name, True)
        print(f"Task '{task_name}' marked as completed.")
        return True
    print("Invalid task index.")
    return False


def main():
    """
    Main function to run the TODO application.

    Provides a menu-driven interface to add, list, or complete tasks,
    or exit the application.
    """
    tasks = []
    while True:
        print("\nTODO App Menu:")
        print("1. Add Task")
        print("2. List Tasks")
        print("3. Complete Task")
        print("4. Exit")
        choice = input("Enter your choice (1-4): ")

        match choice:
            case "1":
                task = input("Enter task description: ")
                if task.strip():
                    add_task(tasks, task)
                else:
                    print("Task description cannot be empty.")
            case "2":
                list_tasks(tasks)
            case "3":
                list_tasks(tasks)
                if tasks:
                    try:
                        task_index = int(input("Enter task number to complete: "))
                        complete_task(tasks, task_index)
                    except ValueError:
                        print("Please enter a valid number.")
            case "4":
                print("Exiting TODO App. Goodbye!")
                break
            case _:
                print("Invalid choice. Please select 1, 2, 3, or 4.")


if __name__ == "__main__":
    main()
