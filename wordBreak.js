var wordBreak = function (s, wordDict) {
  let result = false;
  let cache = new Set();

  const checkSubstring = (offset) => {
    cache.add(offset);

    if (!offset) {
      result = true;
      return;
    }

    let substring = "";
    for (let i = 0; i < offset.length; i++) {
      substring = substring + offset[i];
      if (wordDict.includes(substring)) {
        if (!cache.has(offset.substring(i + 1))) {
          checkSubstring(offset.substring(i + 1));
        }
      }
    }
  };

  checkSubstring(s);
  return result;
};
