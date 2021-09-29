/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length <= 1) return false;

  const stack = [];
  let result = true;
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (element === '(' || element === '[' || element === '{') {
      stack.push(element);
    } else {
      const lastElement = stack[stack.length - 1];
      if (lastElement === '(' && element !== ')') {
        result = false;
        break;
      } else if (lastElement === '[' && element !== ']') {
        result = false;
        break;
      } else if (lastElement === '{' && element !== '}') {
        result = false;
        break;
      } else if (
        lastElement !== '(' &&
        lastElement !== '[' &&
        lastElement !== '{'
      ) {
        result = false;
        break;
      } else {
        stack.pop();
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return result;
};
