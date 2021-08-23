/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function (strs) {
  const wordSeparator = "¢"; //Not ascii char
  let encoded = [];
  for (let i = 0; i < strs.length; i++) {
    encoded.push(strs[i] + wordSeparator);
  }
  return encoded.join("");
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function (s) {
  let backToOriginal = [];
  const wordSeparator = "¢";
  let temp = "";
  for (let i = 0; i < s.length; i++) {
    temp = temp + s[i];
    const isEmoji = s[i] === wordSeparator;
    if (isEmoji) {
      temp = temp.substring(0, temp.length - 1);
      backToOriginal.push(temp);
      temp = "";
    }
  }
  return backToOriginal;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
