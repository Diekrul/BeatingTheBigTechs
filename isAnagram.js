/*

Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?

*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let charMapS = new Map();
  let charMapT = new Map();
  let isAnagram = true;

  const addCharsToMap = (str) => {
    const tempMap = new Map();
    const chars = str.split("");
    for (let i = 0; i < chars.length; i++) {
      const element = chars[i];
      if (!tempMap.get(element)) {
        tempMap.set(element, 1);
      } else {
        tempMap.set(element, tempMap.get(element) + 1);
      }
    }
    return tempMap;
  };

  charMapS = addCharsToMap(s);
  charMapT = addCharsToMap(t);

  const traverseAndCompare = (mapS, mapT) => {
    if (mapS.size !== mapT.size) {
      isAnagram = false;
    } else {
      for (const [k, v] of mapS) {
        if (v !== mapT.get(k)) {
          isAnagram = false;
          break;
        }
      }
    }
  };

  traverseAndCompare(charMapS, charMapT);
  return isAnagram;
};

console.log(isAnagram("anagram", "nagaram"));
