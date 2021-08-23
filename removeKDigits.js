/**
 * Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.

 

Example 1:

Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.

 */
var removeKdigits = function (num, k) {
  //Greedy algorithm
  //Delete always the best higher possible value
  if (k === num.length) return "0";
  const stack = [];
  let i = 0;

  for (let i = 0; i < num.length; i++) {
    while (k > 0 && stack.length && stack[stack.length - 1] > num[i]) {
      stack.pop();
      k--;
    }
    stack.push(num[i]);
  }

  while (k > 0) {
    stack.pop();
    k--;
  }

  let result = null;
  for (let i = 0; stack.join("").length; i++) {
    const char = stack.join("")[i];
    if (char !== "0") {
      result = stack.join("").substring(i);
      break;
    } else {
      result = stack.join("").substring(i + 1);
    }
  }
  return result === "" ? "0" : result;
};
