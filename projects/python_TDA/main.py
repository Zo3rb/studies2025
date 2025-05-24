#!/usr/bin/python3
"""
    Todo Application.
"""

def main():
    """
        Application Starting Point.
    """
    # Getting the user prompt and print it
    user_prompt = "Enter a Todo: "

    # Persisting data.
    todos = []

    while True:
        new_todo = input(user_prompt)
        print(f"You've entered: {new_todo}")
        todos.append(new_todo)
        print(f"Your Todos: {todos}")
        print("Next ...")


if __name__ == "__main__":
    main()
