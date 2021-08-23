/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function (s) {
  let sum = 0;
  let beautyMap = new Map();
  let minimum = 0;
  let maximum = 0;

  const addToMap = (value) => {
    if (!beautyMap.has(value)) {
      beautyMap.set(value, 1);
    } else {
      beautyMap.set(value, beautyMap.get(value) + 1);
    }
    minimum = 0;
    maximum = 0;
    for (const [k, v] of beautyMap) {
      if (maximum === 0 && minimum === 0) {
        maximum = v;
        minimum = v;
      } else if (v > maximum) {
        maximum = v;
      } else if (v < minimum) {
        minimum = v;
      }
    }
  };

  for (let i = 0; i < s.length; i++) {
    let sstring = s[i];
    addToMap(s[i]);
    for (let j = i + 1; j < s.length; j++) {
      addToMap(s[j]);
      sstring = sstring + s[j];
      if (sstring.length >= 3) {
        if (beautyMap.size === 1) {
          continue;
        } else {
          sum = sum + (maximum - minimum);
        }
      }
    }
    if (sstring.length >= 3) {
      beautyMap = new Map();
    }
  }

  return sum;
};
