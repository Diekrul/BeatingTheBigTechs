/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  const dictionary = "abcdefghijklmnopqrstuvwxyz";
  let number = 2;
  let letters = "";
  let window = 0;
  const numberMap = new Map();

  function addToMapAndReset() {
    numberMap.set(number.toString(), letters);
    letters = "";
    number++;
    window = 0;
  }

  for (let i = 0; i < dictionary.length; i++) {
    letters = letters + dictionary[i];
    window++;
    if (number === 7 || number === 9) {
      if (window === 4) {
        addToMapAndReset();
      }
    } else if (window === 3) {
      addToMapAndReset();
    }
  }
  const result = [];
  const cache = new Set();

  const combinations = (path, position) => {
    if (path.length === digits.length) {
      result.push(path);
      return;
    }
    for (let i = position; i < digits.length; i++) {
      if (!cache.has(path)) {
        const currentLetters = numberMap.get(digits[i]);
        for (let j = 0; j < currentLetters.length; j++) {
          cache.add(path);
          combinations(path + currentLetters[j], position + 1);
        }
      }
    }
  };

  combinations("", 0);
  return result;
};
