var minWindow = function (s, t) {
  let tMap = new Map();
  let minimumWindow = "";
  let currentWindow = "";
  let jLastPosition = 0;

  for (let i = 0; i < t.length; i++) {
    if (!tMap.has(t[i])) {
      tMap.set(t[i], 1);
    } else {
      tMap.set(t[i], tMap.get(t[i]) + 1);
    }
  }

  const tTempMap = new Map([...tMap]);
  let elementInMap = tTempMap.size;

  const isValidWindow = (char) => {
    if (tTempMap.has(char)) {
      tTempMap.set(char, tTempMap.get(char) - 1);
    }
    if (tTempMap.get(char) === 0) {
      elementInMap--;
    }
    if (elementInMap === 0) {
      return true;
    }
    return false;
  };

  const checkIsMinimumWindow = (i, j) => {
    if (
      minimumWindow === "" ||
      currentWindow.substring(j, i + 1).length < minimumWindow.length
    ) {
      minimumWindow = currentWindow.substring(j, i + 1);
    }
  };

  const reduceWindowSize = (i) => {
    for (let j = 0 + jLastPosition; j < s.length; j++) {
      checkIsMinimumWindow(i, j);
      if (tTempMap.has(currentWindow[j])) {
        tTempMap.set(currentWindow[j], tTempMap.get(currentWindow[j]) + 1);
        if (tTempMap.get(currentWindow[j]) > 0) {
          elementInMap++;
        }
      }
      if (elementInMap === 0) {
        continue;
      } else {
        jLastPosition = j + 1;
        break;
      }
    }
  };

  for (let i = 0; i < s.length; i++) {
    currentWindow = currentWindow + s[i];
    if (isValidWindow(s[i])) {
      reduceWindowSize(i);
    }
  }

  return minimumWindow;
};
