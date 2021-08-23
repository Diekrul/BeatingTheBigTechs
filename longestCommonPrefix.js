/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
*/

var longestCommonPrefix = function (strs) {
  let smallestString = "";
  let commonPrefix = "";
  strs.forEach((element) => {
    if (element.length < smallestString.length || smallestString === "") {
      smallestString = element;
    }
  });

  const arrayWithoutSmallestString = strs.filter((v) => v !== smallestString);
  for (let i = 0; i < smallestString.length; i++) {
    let existsInAllStrings = true;
    for (let j = 0; j < arrayWithoutSmallestString.length; j++) {
      const string = arrayWithoutSmallestString[j];
      if (smallestString.charAt(i) !== string.charAt(i)) {
        existsInAllStrings = false;
        break;
      }
    }
    if (existsInAllStrings) {
      commonPrefix = commonPrefix + smallestString.charAt(i);
    } else {
      break;
    }
  }
  return commonPrefix;
};

longestCommonPrefix(["flower", "flow", "flight"]);
