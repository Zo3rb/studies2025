/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // Prefix to return.
  let res = "";

  // If no strings array We'll return the res.
  if (strs.length === 0) return res;

  // We'll take the first string as a reference
  for (let i = 0; i < strs[0].length; i++) {
    // A referrence of the first character of first string.
    const char = strs[0][i];

    // Iterate over the rest of strings.
    for (let j = 1; j < strs.length; j++) {
      // If we crossed the string boundary or not common character.
      if (i >= strs[j].length || strs[j][i] !== char) return res;
    }
    // Else we'll add the character to the rest of prefix.
    res += char;
  }

  // Finally we'll return the prefix
  return res;
};
