/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let currentLongest = 0;
  let result = '';

  const isPalindrome = (s) => {
    let i = 0;
    let j = s.length - 1;
    let isStillPalindrome = true;
    while (isStillPalindrome && i <= j) {
      if (s[i] !== s[j]) {
        isStillPalindrome = false;
        break;
      }
      i++;
      j--;
    }
    if (isStillPalindrome && s.length >= currentLongest) {
      currentLongest = s.length;
      result = s;
    }
  };
  if (s.length == 1) {
    return s;
  }

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      if (s.substring(i, j).length <= currentLongest) {
        //Performance improve
        continue;
      }
      isPalindrome(s.substring(i, j));
    }
  }
  return result;
};
