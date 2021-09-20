/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let startWindow = 0;
  let longestResult = 0;
  let cache = new Map();
  let mostRepeatedChar = 0;

  const addCharToMap = (currentChar) => {
    if (!cache.has(currentChar)) {
      cache.set(currentChar, 1);
    } else {
      cache.set(currentChar, cache.get(currentChar) + 1);
    }
  };

  for (let endWindow = 0; endWindow < s.length; endWindow++) {
    const currentChar = s[endWindow];
    addCharToMap(currentChar);

    //Check if the currentChar is the most repeated
    mostRepeatedChar = Math.max(mostRepeatedChar, cache.get(currentChar));

    //endWindow - startWindow + 1 is the definition of a window size
    while (endWindow - startWindow + 1 > k + mostRepeatedChar) {
      // if we are here, is because we have more elements that we can remove that are different than the most repeated

      const charFromStartPointerWindow = s[startWindow];
      cache.set(
        charFromStartPointerWindow,
        cache.get(charFromStartPointerWindow) - 1,
      );
      startWindow++;
      //We move the start one position
      //and we update the map
    }
    longestResult = Math.max(longestResult, endWindow - startWindow + 1);
  }
  return longestResult;
};
