/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(str) {
    // Solving this Question Using Sliding Window Pattern.
    let startPtr = 0
    let endPtr = str.length - 1;

    while (startPtr <= endPtr) {
        let temp = str[startPtr];
        str[startPtr] = str[endPtr];
        str[endPtr] = temp;
        startPtr++;
        endPtr--;
    }
};
