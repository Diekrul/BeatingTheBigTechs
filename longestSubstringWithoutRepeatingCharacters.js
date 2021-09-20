/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longest = 0;
  const getSubstring = (s) => {
    const visited = new Set();
    let currentLength = 0;
    for (let i = 0; i < s.length; i++) {
      if (visited.has(s[i])) {
        break;
      }
      visited.add(s[i]);
      currentLength = currentLength + 1;
    }
    if (currentLength > longest) {
      longest = currentLength;
    }
  };

  for (let i = 0; i < s.length; i++) {
    getSubstring(s.substring(i));
  }
  return longest;
};
