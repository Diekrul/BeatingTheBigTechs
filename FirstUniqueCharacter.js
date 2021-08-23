/*Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.*/

var firstUniqChar = function (s) {
  let result = -1;
  const uniqueElementsMap = new Set();
  const elementsAddedBefore = new Set();
  for (let i = 0; i < s.length; i++) {
    const element = s.charAt(i);
    if (!elementsAddedBefore.has(element)) {
      elementsAddedBefore.add(element);
      uniqueElementsMap.add(element);
    } else if (uniqueElementsMap.has(element)) {
      uniqueElementsMap.delete(element);
    }
  }
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (uniqueElementsMap.has(char)) {
      result = i;
      break;
    }
  }
  return result;
};

firstUniqChar("aadadaad");
