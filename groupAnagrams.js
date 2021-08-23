var groupAnagrams = function (strs) {
  const originalStrs = [...strs];
  const resultPositions = [];
  const result = [];
  //order each word first (compare each letter on the word) = eat ==> aet
  for (let i = 0; i < strs.length; i++) {
    const toWord = strs[i].split("");
    toWord.sort();
    strs[i] = toWord.join("");
  }

  const visited = new Set();
  let currentGroupPositions = [];

  //group in arrays equals words and save the index
  for (let i = 0; i < strs.length; i++) {
    if (visited.has(i)) {
      continue;
    }
    const currentWord = strs[i];
    visited.add(i);
    currentGroupPositions = [i];
    for (let j = i + 1; j < strs.length; j++) {
      if (visited.has(j)) {
        continue;
      }
      const nextWord = strs[j];
      if (currentWord === nextWord) {
        currentGroupPositions.push(j);
        visited.add(j);
      }
    }
    resultPositions.push(currentGroupPositions);
  }
  //for every group of index, get the value in the original array originalStrs
  resultPositions.forEach((array) => {
    let data = [];
    array.forEach((position) => {
      data.push(originalStrs[position]);
    });
    result.push(data);
  });
  return result;
};
