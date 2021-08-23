/**
 * 
 * Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2


 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function (haystack, needle) {
  let areEqualAtPosition = null;
  if (needle.length === 0 || (haystack.length === 0 && needle.length === 0))
    return 0;
  for (let i = 0; i < haystack.length; i++) {
    const char = haystack.charAt(i);
    const firstLetterOfNeedle = needle.charAt(0);
    if (char === firstLetterOfNeedle) {
      areEqualAtPosition = i;
      for (let j = 0; j < needle.length; j++) {
        const needleChar = needle.charAt(j);
        if (haystack.charAt(i + j) !== needleChar) {
          areEqualAtPosition = null;
          break;
        }
      }
    }
    if (areEqualAtPosition != null) {
      break;
    }
  }
  if (areEqualAtPosition === null) {
    areEqualAtPosition = -1;
  }
  return areEqualAtPosition;
};
