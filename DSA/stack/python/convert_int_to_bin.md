# Exercise: Convert Decimal Integer to Binary

Challenge yourself to solve the problem in this lesson!

In this coding exercise, you are required to use the stack data structure to convert integer values to their binary equivalent.

## Division by 2 Method[#](https://www.educative.io/courses/ds-and-algorithms-in-python/exercise-convert-decimal-integer-to-binary#Division-by-2-Method)

The slides below show how to use the _**division by 2**_ method to compute the binary equivalent for an integer.

### Solution Review: Convert Decimal Integer to Binary

This lesson contains the solution review for the challenge of converting integer values to their binary equivalents.

Let’s analyze the solution to the exercise in the previous lesson.

## Implementation[#](https://www.educative.io/courses/ds-and-algorithms-in-python/solution-review-convert-decimal-integer-to-binary#Implementation)

```python
def convert_int_to_bin(dec_num):

    if dec_num == 0:
        return 0

    s = Stack()

    while dec_num > 0:
        remainder = dec_num % 2
        s.push(remainder)
        dec_num = dec_num // 2

    bin_num = ""
    while not s.is_empty():
        bin_num += str(s.pop())

    return bin_num

print(convert_int_to_bin(56))
print(convert_int_to_bin(2))
print(convert_int_to_bin(32))
print(convert_int_to_bin(10))

print(int(convert_int_to_bin(56),2)==56)
```

### Explanation[](https://www.educative.io/courses/ds-and-algorithms-in-python/solution-review-convert-decimal-integer-to-binary#Explanation)

On **line 3**, we cater to an edge case of `dec_num` being equal to `0`. If `dec_num` is equal to `0`, we return `0` on **line 4** as the binary equivalent for the decimal number 00 is 00.

On **line 6**, we declare a stack and proceed to a `while` loop on **line 8** which executes if `dec_num` is greater than 0.

As stated in the **division by 2** method, we calculate the remainder of the division of `dec_num` by 2 and push it onto the stack (**lines 9-10**). Then we divide `dec_num` by 2 using the `//` operator to `dec_num` which floors the answer of the division, and we update `dec_num` with the answer (**line 11**). We keep executing the code on **lines 9-11** as long as `dec_num` is greater than 0. As soon as `dec_num` becomes equal to or less than 0, the `while` loop terminates.

On **line 13**, `bin_num` is declared as an empty string. The `while` loop on the very next line executes if the stack `s` is _not_ empty. If `s` is not empty, we pop a value from `s` and append it to the `bin_num` string on **line 15**. We keep popping elements from `s` until it becomes empty and the `while` loop is terminated.

The `bin_num` is returned from the function on **line 17**.

#### Check my own implementation within the folder of python and javascript
