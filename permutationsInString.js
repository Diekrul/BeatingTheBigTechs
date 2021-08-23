**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;
  if (s2.includes(s1)) return true;
  let s1Map = new Map();
  let s2Map = new Map();
 
  const stringToMap = (string, map) => {
    for (let i = 0; i < string.length; i++) {
      if (map.has(string[i])) {
        map.set(string[i], map.get(string[i]) + 1);
      } else {
        map.set(string[i], 1);
      }
    }
  };
 
  const compareMaps = (map1, map2) => {
    for (const [k, v] of map2) {
      if (map1.get(k) !== v) {
        return false;
      }
    }
    return true;
  };
 
  const windowSize = s1.length;
  stringToMap(s1, s1Map);
 
  for (let i = 0; i <= s2.length - windowSize; i++) {
    let substring = "";
    s2Map = new Map();
    for (let j = i; j < windowSize + i; j++) {
      substring = substring + s2[j];
    }
    stringToMap(substring, s2Map);
    if (compareMaps(s1Map, s2Map)) {
      return true;
    }
  }
  return false;
};
 
/*
recordar que: si tienen la misma cantidad de letras, entonces es permutaion
*/