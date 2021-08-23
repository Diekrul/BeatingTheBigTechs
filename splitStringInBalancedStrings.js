/*Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

Given a balanced string s, split it in the maximum amount of balanced strings.

Return the maximum amount of split balanced strings.

 

Example 1:

Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
Example 2:

Input: s = "RLLLLRRRLR"
Output: 3
Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.
Example 3:

Input: s = "LLLLRRRR"
Output: 1
Explanation: s can be split into "LLLLRRRR".
Example 4:

Input: s = "RLRRRLLRLL"
Output: 2
Explanation: s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'
*/

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  const stackOfChars = s.split("");
  let numberOfSubstrings = 0;
  let tempSubstring = [];

  while (stackOfChars.length > 0) {
    const lastArrayElement = stackOfChars[stackOfChars.length - 1];
    if (
      tempSubstring.length === 0 ||
      lastArrayElement === tempSubstring[tempSubstring.length - 1]
    ) {
      tempSubstring.push(stackOfChars.pop());
    } else if (lastArrayElement !== tempSubstring[tempSubstring.length - 1]) {
      tempSubstring.pop();
      stackOfChars.pop();
      if (tempSubstring.length === 0) {
        numberOfSubstrings++;
      }
    }
  }
  return numberOfSubstrings;
};

balancedStringSplit("RLRRLLRLRL");
