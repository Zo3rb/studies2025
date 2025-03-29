# Intro to Arrays

By now, you are familiar with the array data structure. You have used arrays to store and access lists of data, used functions like `push()` and `unshift()` to add values, square bracket notation to read and write values by index, for-loops to iterate through each value, and much more.

Arrays are the most fundamental of all data structures. They are ubiquitous in all fields of computing due to their absolute elegance and efficiency. They even show up in places you might not expect: A string, for example, is an array of characters in memory.

Arrays are the **most time and space efficient** way to store data and should be thoroughly understood. In this reading, you will learn how they work.

## What is an Array?

Start by reading this definition:

> An array is a sequence of elements of the same type stored in a contiguous block of memory.

Now, read it again.

> An array is a sequence of elements of the same type stored in a contiguous block of memory.

Pause and think about this definition for a moment. What does each part mean? Let's break it down.

## Array representation in memory

Say you create an array containing four 32-bit integers.

```bash

arr  = [255, 256,  43690,  1431655765]



```

How is this represented in memory?

32-bits tells us that each of the integers, large or small, requires four bytes of storage space. `255` takes up the same amount of space as `1431655765`. Therefore, you know that storing these four integers would require 16 bytes of memory. An array containing `[0, 0, 0, 0]` would require 16 bytes too.

When this line of code runs, it requests 16 bytes of memory from the operating system. If the OS approves the request, it returns a memory address and read/write access to the 16 bytes starting from that address.

```bash

104  105  106  107

00000000  00000000  00000000  00000000



108  109  110  111

00000000  00000000  00000000  00000000



112  113  114  115

00000000  00000000  00000000  00000000



116  117  118  119

00000000  00000000  00000000  00000000



```

In this diagram, the numbers are the memory address (starting from the 104th byte of memory) and the 0s are the bits in each memory cell. Here, the memory is given as all zeroes but you might actually receive memory with values leftover from the previous occupants. This is fine since you will be overwriting those values anyway.

Since memory is a binary sequence, the values must be translated from base-10 to base-2 before they can be stored.

```bash

255  --->  00000000  00000000  00000000  11111111

256  --->  00000000  00000000  00000001  00000000

43690  --->  00000000  00000000  10101010  10101010

1431655765  --->  01010101  01010101  01010101  01010101



```

Notice that all 32 bits are represented, even for smaller numbers.

After translation, the values can finally be written into the memory allocated to the array.

```bash

104  105  106  107

00000000  00000000  00000000  11111111



108  109  110  111

00000000  00000000  00000001  00000000



112  113  114  115

00000000  00000000  10101010  10101010



116  117  118  119

01010101  01010101  01010101  01010101



```

Recall this definition of an array:

> An array is a sequence of elements of the same type stored in a contiguous block of memory.

From this diagram and definition, you can see that arrays are an **optimally space-efficient** way to store data, packed side-to-side with no wasted memory.

## Array indexing

Not only are arrays the most space efficient method of data storage, they also allow the **fastest** method of access via indexing.

```bash

arr  = [255, 256,  43690,  1431655765]



```

Say you want to access the third item in this array. You know that indexing starts counting from 0, so you call `arr[2]` which returns `43690`. How does this work underneath the hood?

When you access an array value at an index, the code runs this equation:

> valueAddress = startAddress + index \* sizeof(dataType)

In our example, the array starts at memory address `104`, the index is `2` and the size of the data is 32-bits, or `4` bytes. Plugging this into the equation places the value at `104 + 2 * 4`, or memory address `112`. Examining the memory diagram confirms that the four bytes starting from address `112` are `00000000 00000000 10101010 10101010`, which is `43690` in base-10.

Note that this indexing equation takes the same amount of operations regardless of the array size: one multiplication, one addition, and memory access. All are extremely fast and run in constant time. This is why array indexing is an **O(1)** operation, and the fastest way to access data in a collection. Incidentally, this is also why array indices start from 0 instead of 1.

Think back to the array definition:

> An array is a sequence of elements of the same type stored in a contiguous block of memory.

All three parts of this definition are required for the O(1) indexing equation. Since indices are found by the offset, the entire array must occupy a contiguous block of memory. Since the offset is calculated by multiplying the data size, all items in the array must be of the same data type. Since the indices are numerical, the array must be stored in an ordered sequence.

## Arrays in different programming languages

By now, you might have noticed some contradictions between this array definition and the JavaScript arrays you are familiar with. After all, JavaScript allows you to store multiple data types in a single array, like `[1, 2.0, "3", true, undefined]`. Are JavaScript arrays different from the arrays described in this reading?

Well, yes and no. Every programming language has its own unique array implementation which builds on top of this basic functionality. The way JavaScript and other dynamically-typed languages like Python and Ruby achieve mixed array types is because each value is stored as a generic data object whose type and value is interpreted at runtime. The array itself actually contains a sequence of pointers (i.e. memory addresses) which all have the same data size. This allows more flexibility at the expense of some extra memory, which is used to store the pointers and object metadata.

JavaScript arrays are particularly wonky as they use yet another layer of abstraction: they are actually hash tables underneath the hood. You know these as key-value objects `{}` which you will learn about soon. In the meantime, it will benefit you to treat JavaScript arrays as if they are normal arrays in code.

## What you learned

In this reading, you learned the definition of an array, how they are represented in memory, and how they perform access and indexing in constant time. You have also gained some insight into the limitations of arrays including how features like multi-type arrays are implemented in various programming languages.

---

---

# Dynamic Arrays

> An array is a sequence of elements of the same type stored in a contiguous block of memory.

Previously, you have learned this definition of an array and how it is represented in memory. However, due to how memory is allocated by the operating system, this only works for arrays of fixed size. High-level languages like Python, JavaScript and Ruby come with built-in functions to add and remove array values automatically. Though, just because it happens automatically, it doesn't mean there aren't costs. In this reading, you will learn about the functionality of _dynamic arrays_ and the costs of each method.

## Array resizing

Let's start with this previous array example: `arr = [255, 256, 43690, 1431655765]` and say we want to push another value to the end of the array using `arr.push(1)`. How does this work?

If you recall the previous memory example, the process was to request 16 bytes of memory from the operating system and fill in the four array values:

```bash

104  105  106  107

00000000  00000000  00000000  11111111



108  109  110  111

00000000  00000000  00000001  00000000



112  113  114  115

00000000  00000000  10101010  10101010



116  117  118  119

01010101  01010101  01010101  01010101

```

The OS has granted the program permission to read and write 16 bytes: 104-119. Trying to write the new value into the next four bytes of memory (120-123) will violate memory permissions and throw a segmentation fault error. You might be able to request access to those bytes of memory but unfortunately, there is no way to guarantee that they will be free. The OS might have assigned that memory to another function. Instead, the array needs to resize.

To do this, the program requests 20 new bytes of memory, copies the old values into the new slots, writes the new value into the last slot, then frees the old memory back to the OS, ready to be reassigned at a later time. So, the new memory would look something like this:

```bash

200  201  202  203

00000000  00000000  00000000  11111111



204  205  206  207

00000000  00000000  00000001  00000000



208  209  212  211

00000000  00000000  10101010  10101010



212  213  214  215

01010101  01010101  01010101  01010101



216  217  218  219

00000000  00000000  00000000  00000001

```

Each value must be copied from the old memory to the new allocation one at a time which makes resizing an **O(n)** operation, where _n_ is the length of the array. As you might imagine, if the array is very large, this is a fairly slow process.

## Over-allocation to speed up resizing

Pushing to an array is very common and should be as efficient as possible. Turns out, it is possible to trade space (memory) for time (speed) by _overallocating_ memory when creating arrays.

In the previous example, the array grew from length 4 to 5 so the program requested a memory block that could fit 5 integers. The next time a value is pushed to the array, it would need to request 6 slots and copy each value to the new memory, then 7 for the next, and so on. Instead, when a resize occurs, the program will generally request more memory than is needed. Instead of 5, it will resize to 8.

Now with 8 slots, the array will look like this from the programmer's perspective:

```bash

[ 255, 256, 43690, 1431655765, 1 ]

```

but it will actually hold this in memory:

```bash

[ 255, 256, 43690, 1431655765, 1, <empty>, <empty>, <empty> ]

```

Now, pushing three more values is just a matter of writing over the empty slots, which is **O(1)**. Pushing a 9th value will require another resizing operation but now the program will request 16 slots and the next 7 pushes will all be **O(1)**.

Due to overallocation, the larger the array grows, the less frequently resizing occurs. Because of this, and since big-O only matters for large values of n, `push()` is considered an **O(1)** operation.

## Testing overallocation

It's possible to verify the cost of resizing using timing benchmarks. Consider these two functions:

```node
function addToBack(n) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(i + 1);
  }

  return arr;
}

function addToFrontPreallocated(n) {
  // Preallocate n slots of memory in an array

  const arr = new Array(n);

  for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
  }

  return arr;
}

/** *Both of these functions do the same thing: Given a number n, fill an array with integers 1 through n.

*`addToBack()` does this with `push()` while `addToFrontPreallocated()` preallocates the memory and fills it in using indexing.

* Let's compare the performance:

*/

n = 10000000;

startTimeBack = Date.now();

arr = addToBack(n);

endTimeBack = Date.now();

startTimePre = Date.now();

arr = addToFrontPreallocated(n);

endTimePre = Date.now();

console.log("addToBack(" + n + ") = " + (endTimeBack - startTimeBack) + "ms");

console.log(
  "addToFrontPreallocated(" + n + ") = " + (endTimePre - startTimePre) + "ms"
);

// addToBack(10000000) = 292ms

// addToFrontPreallocated(10000000) = 82ms
```

The runtimes may vary on your computer but preallocating memory is consistently faster. Note that this for n = 10 million: For smaller values of n, the difference is hardly noticable.

## `push()` vs `unshift()` vs `splice()`

You've seen that adding to the back of an array via `push()` is **O(1)**. How about adding to the front of an array using `unshift()`? Let's take the original array of `arr = [255, 256, 43690, 1431655765, 1]` and add a `0` to the front. Assume we have 8 blocks of allocated memory starting from byte 200 to 231.

Just like you cannot add to the end of an array without free memory, you also cannot occupy the previous memory block without permission. We have free space at the end of the array but that doesn't help you add to the front. First, you need to shift all of the array values to the right by 1, then add the new value to the front. `arr.unshift(0)` would look something like this underneath the hood:

```bash

[255, 256, 43690, 1431655765, 1, <empty>, <empty>, <empty>] // Start

[255, 256, 43690, 1431655765, 1, 1, <empty>, <empty>] // Shift 1

[255, 256, 43690, 1431655765, 1431655765, 1, <empty>, <empty>] // Shift 1431655765

[255, 256, 43690, 43690, 1431655765, 1, <empty>, <empty>] // Shift 43690

[255, 256, 256, 43690, 1431655765, 1, <empty>, <empty>] // Shift 256

[255, 255, 256, 43690, 1431655765, 1, <empty>, <empty>] // Shift 255

[0, 255, 256, 43690, 1431655765, 1, <empty>, <empty>] // Overwrite first element to 0

```

This requires 5 shifting steps for the array of length 5, or _n_ steps for an array of length n. Therefore, `unshift()` is an **O(n)** operation. The same applies for `shift()`, which removes the first value and moves each other value to the left by one for **O(n)**.

How about adding or removing values from the middle of an array using `splice()`? Splicing a value at the end is the same as `push()` and at the beginning is the same as `unshift()`. Splicing exactly in the middle requires shifting every element after the midpoint for _n/2_ steps. Since big-O ignores constant coefficients like 1/2, `splice()` is considered **O(n)** as well.

## Testing `push()` vs `unshift()`

According to this theoretical analysis, `push()` is **O(1)** and `unshift()` is **O(n)**. Let's verify this with another timing test.

```node
function addToBack(n) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(i + 1);
  }

  return arr;
}

function addToFront(n) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    arr.unshift(n - i);
  }

  return arr;
}

/** *

* Both of these functions do the exact same thing: Filling an array with integers 1 through n.

* Take a moment to evaluate the time complexities of these functions.

*

* Done? `addToBack()` calls the **O(1)** `push()` function inside a for-loop which makes the function **O(n)**.

* `addToFront()` calls the **O(n)** `unshift()` inside a for-loop, which makes it **O(n2)**.

* Take a moment and ask a question if you are not sure why this is.

*

* Now run a test to see if the actual runtime matches your expectations.

*/

n = 50000;

startTimeBack = Date.now();

arr = addToBack(n);

endTimeBack = Date.now();

startTimeFront = Date.now();

arr = addToFront(n);

endTimeFront = Date.now();

console.log("addToBack(" + n + ") = " + (endTimeBack - startTimeBack) + "ms");

console.log(
  "addToFront(" + n + ") = " + (endTimeFront - startTimeFront) + "ms"
);

// addToBack(50000) = 4ms

// addToFront(50000) = 194ms

// For a mere n = 50k, `addToFront()` is almost 50x slower than `addToBack()`! Now try n = 100k.

n = 100000;

startTimeBack = Date.now();

arr = addToBack(n);

endTimeBack = Date.now();

startTimeFront = Date.now();

arr = addToFront(n);

endTimeFront = Date.now();

console.log("addToBack(" + n + ") = " + (endTimeBack - startTimeBack) + "ms");

console.log(
  "addToFront(" + n + ") = " + (endTimeFront - startTimeFront) + "ms"
);

// addToBack(100000) = 5ms

// addToFront(100000) = 895ms
```

Doubling the input size, `addToBack()` hardly increased at all but `addToFront()` runtime increased by over 4x! This correlates with the expected n2 growth rate. Try this out yourself with different values of n.

## What you've learned

In this reading, you've learned how dynamic arrays work to overcome the contiguous memory limitation of standard arrays with dynamic resizing. You have also learned how the array functions, `shift` and `unshift` perform compared to `push` and `pop`.

---

---

# Stacks

Abstraction is everywhere in computer science. Array functions like `shift()` and `splice()` abstract away details like allocating memory, resizing and rearranging elements to a single line of JavaScript code. This allows programmers to ignore underlying complexity and approach code from a higher level.

In this reading, you will learn about _stacks_. Stacks are an _abstract data type_ (ADT) that store a collection of data with one simple rule: Last in, first out. Unlike data structures, ADTs have no specific implementation requirements. All that matters in a stack are the order of input and output.

## LIFO: Last in, first out

Imagine you have a stack of plates in a restaurant. Whenever a plate is cleaned and dried, it is placed on top of the stack. Whenever a new plate is needed, the chef will grab the first plate from the top of the stack. The first plate grabbed will always be the last one added to the stack.

Written into code, an implementation of the stack of plates might look something like this:

```bash
stackOfPlates.addPlate('plate 1')
stackOfPlates.addPlate('plate 2')
stackOfPlates.addPlate('plate 3')

stackOfPlates.getPlate()  // 'plate 3'
stackOfPlates.getPlate()  // 'plate 2'

stackOfPlates.addPlate('plate 4')

stackOfPlates.getPlate()  // 'plate 4'
stackOfPlates.getPlate()  // 'plate 1'

stackOfPlates.getPlate()  // undefined
```

First, three plates are added to the stack: plates 1, 2 and 3. Next two plates are grabbed from the stack. The two last plates added were 2 and 3, so plate 3 and plate 2 are the first two returned. Next, with plate 1 still in the stack another plate, 4, is added. Since plate 4 was last to be added, it's the first returned on the next `getPlate()` call. Finally, the first plate is returned with the last `getPlate()` call. With no more plates on the stack, the final call returns `undefined`.

Not only are the last plates on the stack the first to be returned, the first plate to be added (plate 1) is the last to be returned. You can think of this as either LIFO (last in, first out) or FILO (first in, last out). Both are identical.

## Push and Pop

Computer scientists have adopted the naming convention of _push_ and _pop_ for adding and retrieving items from a stack. You _push_ data onto the top of a stack and _pop_ off the most recently added value. This may give you a hint about the underlying data structure that is usually used to implement this abstract data type.

## Stack Implementation

As you might have guessed from the naming, the stack ADT is usually implemented with an array data structure underneath the hood.

```node
class Stack {
  constructor() {
    this.data = [];
  }

  push(value) {
    this.data.push(value);
  }

  pop() {
    return this.data.pop();
  }

  size() {
    return this.data.length;
  }
}
```

Here is a simple JavaScript `Stack` class implementation. Let's try this with the plate example.

```node
const stackOfPlates = new Stack();

stackOfPlates.push("plate 1");
stackOfPlates.push("plate 2");
stackOfPlates.push("plate 3");

stackOfPlates.pop(); // 'plate 3'
stackOfPlates.pop(); // 'plate 2'

stackOfPlates.push("plate 4");

stackOfPlates.pop(); // 'plate 4'
stackOfPlates.pop(); // 'plate 1'

stackOfPlates.pop(); // undefined
```

This stack implementation matches the expected behavior defined in the stack ADT specification. In practice, you often don't need to implement a new `Stack` class. It's fine to declare `const stackOfPlates = [];` then push and pop elements on that array. The code runs fine either way.

## Stack Applications

Stacks can be used to implement features like the back button on a webpage. You may encounter code like this in the upcoming Express module.

```node
function clickLink(newURL) {
  // Store the current URL, then load the new URL
  browserHistory.push(currentURL);
  currentURL = newURL;
  load(currentURL);
}

function clickBack() {
  // Retrieve the most recently visited page and load it
  currentURL = browserHistory.pop();
  load(currentURL);
}
```

## Performance

The performance of a stack depends on the implementation. For a stack implemented with a dynamic array, the performance will be exactly the same as that of a regular dynamic array: `push`, `pop` and `size` all have an average time complexity of **O(1)**. Using a dynamic array implementation, `push` has a worst-case time complexity of **O(n)** due to resizing but this happens relatively infrequently and can be avoided altogether by pre-allocating memory and limiting the size of the stack.

Stacks use _n_ array slots to store _n_ values, so the space complexity of a stack is **O(n)**. Not only that, but it's an extremely efficient **O(n)** due to the contiguous nature of arrays.

## Call Stack

Stacks can be also found in code execution.

Code can be thought of as a list of instructions which execute one at a time. As the code runs, the state of each function is stored in a **stack frame** which contains the function's local variables and the state of execution. These frames are stored in LIFO order in a portion of memory called the **call stack**. When a function is executed, its stack frame gets pushed to the top of the call stack and is popped off when it returns. For an example, consider this recursive factorial function:

```node
function factorial(n) {
  if (n <= 1) return 1;

  return n * factorial(n - 1);
}
```

Calling `factorial(5)` will return `5 * factorial(4)`, but the function cannot complete until `factorial(4)` is computed.

So, the function pauses and pushes `factorial(4)` to the top of the call stack to be computed next.

`factorial(4)` runs and returns `4 * factorial(3)`, which cannot complete until `factorial(3)` returns.

`factorial(3)` relies on `factorial(2)`, which relies on `factorial(1)`, all of which are pushed on the call stack.

`factorial(1)` hits the recursive _base case_, and can finally return a value. It returns `1` to `factorial(2)` then pops off the call stack.

The next function on top of the stack is now `factorial(2)` which runs and returns the value `2` to `factorial(3)`.

`factorial(3)` can finally return `6` using the return value of `2` from the `factorial(2)` stack. `factorial(3)` is popped off the stack.

Now the return to `factorial(4)` can be calculated based on the `factorial(3)` return value, `24`. `factorial(4)` is popped off the stack, and returns to `factorial(5)`.

Finally `factorial(5)` can return and pop off, after which the call stack is empty and the work is done.

Here's a visual representation of the stack frames being added and removed from the call stack when calling `factorial(5)`:

![Factorial stack frames (pythontutor.com)](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/computer-science/images/StackFramesFactorial.gif)

The call stack occupies memory, just like any other data structure. This means that the recursive `factorial()` function has a space complexity of **O(n)**. In fact, _all_ recursive functions have a minimum space complexity of **O(n)** where _n_ is the depth of calls. If the call stack grows too deep, you will encounter a **stack overflow** error. This is easy to test in JavaScript:

```bash
factorial(100000);  // Uncaught RangeError: Maximum call stack size exceeded
```

If your _n_ is large and space is an issue, it's usually better to use an iterative solution rather than recursion.

```node
function factorialIterative(n) {
  let total = 1;

  for (let i = n; i > 0; i--) {
    total *= n;
  }

  return total;
}
```

This `factorialIterative()` contains three constant variables (`n`, `total` and `i`) and occupies a single stack frame. This remains constant for any value of `n` which gives it a space complexity of **O(1)** unlike the recursive `factorial()` which has a space complexity of **O(n)**.

## What you learned

In this reading, you learned all about _stacks_, including the input/output specification, the standard way of implementing them using arrays, and practical applications including the call stack.
