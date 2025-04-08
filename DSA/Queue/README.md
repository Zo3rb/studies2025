# 📚 Queue Data Structure

A **Queue** is a linear data structure that operates on the **First-In-First-Out (FIFO)** principle. The element added first will be the one removed first. It is widely used in scenarios such as task scheduling, buffering, and resource sharing.

---

## 📌 Key Concepts

- **FIFO Order**: First element added is the first to be removed.

- **Enqueue**: Insert an element at the end of the queue.

- **Dequeue**: Remove the element from the front of the queue.

- **Peek**: Access the front element without removing it.

- **isEmpty**: Check whether the queue is empty.

- **isFull**: Check whether the queue has reached its capacity.

- **Size**: Retrieve the current number of elements in the queue.

---

## 📦 Implementations

This directory contains the following implementations of the Queue:

- **Python**: [Python Class for Queue Implementation.](./python/queue.py)

- **JavaScript**: [JavaScript Class for Queue Implementation.](./javascript/queue.js)

Each implementation includes methods to manage queue operations and ensure proper handling of edge cases like overflow and underflow.

---

## 🧠 Learning Objectives

- Understand how queue operations work under the hood.

- Implement queue functionality using different programming languages.

- Handle corner cases like full and empty queues gracefully.

- Practice class-based implementation and data structure fundamentals.

---

A queue is a useful data structure in programming. It is similar to the ticket queue outside a cinema hall, where the first person entering the queue is the first person who gets the ticket.

Queue follows the **First In First Out (FIFO)** rule - the item that goes in first is the item that comes out first.

![Representation of Queue in first in first out principle](https://cdn.programiz.com/sites/tutorial2program/files/queue.png "Queue")

FIFO Representation of Queue

In the above image, since 1 was kept in the queue before 2, it is the first to be removed from the queue as well. It follows the **FIFO** rule.

In programming terms, putting items in the queue is called **enqueue**, and removing items from the queue is called **dequeue**.

We can implement the queue in any programming language like C, C++, Java, Python or C#, but the specification is pretty much the same.

---

## Basic Operations of Queue

A queue is an object (an abstract data structure - ADT) that allows the following operations:

- **Enqueue**: Add an element to the end of the queue

- **Dequeue**: Remove an element from the front of the queue

- **IsEmpty**: Check if the queue is empty

- **IsFull**: Check if the queue is full

- **Peek**: Get the value of the front of the queue without removing it

---

## Working of Queue

Queue operations work as follows:

- two pointers FRONT and REAR

- FRONT track the first element of the queue

- REAR track the last element of the queue

- initially, set value of FRONT and REAR to -1

### Enqueue Operation

- check if the queue is full

- for the first element, set the value of FRONT to 0

- increase the REAR index by 1

- add the new element in the position pointed to by REAR

### Dequeue Operation

- check if the queue is empty

- return the value pointed by FRONT

- increase the FRONT index by 1

- for the last element, reset the values of FRONT and REAR to -1

![Demonstrating how front and rear indexes are modified during enqueue and dequeue operations](https://cdn.programiz.com/sites/tutorial2program/files/Queue-program-enqueue-dequeue.png "Working of queue operations")

---

## Limitations of Queue

As you can see in the image below, after a bit of enqueuing and dequeuing, the size of the queue has been reduced.

![the empty spaces at front cannot be used after dequeing from a full queue](https://cdn.programiz.com/sites/tutorial2program/files/why-circular-queue_0.png "Queue representation")

Limitation of a queue

And we can only add indexes 0 and 1 only when the queue is reset (when all the elements have been dequeued).

After REAR reaches the last index, if we can store extra elements in the empty spaces (0 and 1), we can make use of the empty spaces. This is implemented by a modified queue called the [circular queue](https://www.programiz.com/data-structures/circular-queue).

---

## Complexity Analysis

The complexity of enqueue and dequeue operations in a queue using an array is `O(1)`. If you use `pop(N)` in python code, then the complexity might be `O(n)` depending on the position of the item to be popped.

---

## Applications of Queue

- CPU scheduling, Disk Scheduling

- When data is transferred asynchronously between two processes.The queue is used for synchronization. For example: IO Buffers, pipes, file IO, etc

- Handling of interrupts in real-time systems.

- Call Center phone systems use Queues to hold people calling them in order.

---

## Types of Queues

A [queue](https://www.programiz.com/dsa/queue) is a useful data structure in programming. It is similar to the ticket queue outside a cinema hall, where the first person entering the queue is the first person who gets the ticket.

There are four different types of queues:

- Simple Queue
- Circular Queue
- Priority Queue
- Double Ended Queue

---

## Simple Queue

In a simple queue, insertion takes place at the rear and removal occurs at the front. It strictly follows the FIFO (First in First out) rule.

![Simple queue ](https://cdn.programiz.com/sites/tutorial2program/files/simple-queue_0.png "Simple queue ")

To learn more, visit [Queue Data Structure](https://www.programiz.com/dsa/queue).

---

## Circular Queue

In a circular queue, the last element points to the first element making a circular link.

![Circular queue ](https://cdn.programiz.com/sites/tutorial2program/files/circular-queue.png "Circular queue ")

The main advantage of a circular queue over a simple queue is better memory utilization. If the last position is full and the first position is empty, we can insert an element in the first position. This action is not possible in a simple queue.

To learn more, visit [Circular Queue Data Structure](https://www.programiz.com/dsa/circular-queue).

---

## Priority Queue

A priority queue is a special type of queue in which each element is associated with a priority and is served according to its priority. If elements with the same priority occur, they are served according to their order in the queue.

![Priority queue](https://cdn.programiz.com/sites/tutorial2program/files/priority-queue.png "Priority queue")

Insertion occurs based on the arrival of the values and removal occurs based on priority.

To learn more, visit [Priority Queue Data Structure](https://www.programiz.com/dsa/priority-queue).

---

## Deque (Double Ended Queue)

In a double ended queue, insertion and removal of elements can be performed from either from the front or rear. Thus, it does not follow the FIFO (First In First Out) rule.

![Double ended queue](https://cdn.programiz.com/sites/tutorial2program/files/double-ended-queue.png "Double ended queue")
