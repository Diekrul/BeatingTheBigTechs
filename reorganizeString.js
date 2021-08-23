var reorganizeString = function (S) {
  let reorderedString = "";

  const checkBetween = (currentChar) => {
    let j = 0;
    const insertBetween = () => {
      let leftPart = reorderedString.slice(0, j + 1);
      let rightPart = reorderedString.slice(j + 1);
      reorderedString = leftPart + currentChar + rightPart;
    };
    while (j < reorderedString.length) {
      let notEqualToCurrent = reorderedString[j] !== currentChar;
      let notEqualToNext = reorderedString[j + 1] !== currentChar;
      let nextIsNull = reorderedString[j + 1] == undefined;
      if (
        (notEqualToCurrent && notEqualToNext) ||
        (notEqualToCurrent && nextIsNull)
      ) {
        insertBetween();
        break;
      }
      j++;
    }
  };

  const checkInsert = (i, currentChar) => {
    //insert beginning
    if (reorderedString === "") {
      reorderedString = currentChar;
      return;
    }

    if (reorderedString[0] !== currentChar) {
      reorderedString = currentChar + reorderedString.slice(0);
      return;
    }
    //check Between
    checkBetween(currentChar);
  };

  const traverseString = (currentString) => {
    let usedChars = new Set();
    let notUsedSubstring = "";
    if (currentString === "") {
      return;
    }
    for (let i = 0; i < currentString.length; i++) {
      let currentChar = currentString[i];
      if (!usedChars.has(currentChar)) {
        usedChars.add(currentChar);
        checkInsert(i, currentChar);
      } else {
        notUsedSubstring = notUsedSubstring + currentChar;
      }
    }
    traverseString(notUsedSubstring);
  };

  traverseString(S);
  if (reorderedString.length !== S.length) {
    return "";
  }
  return reorderedString;
};
