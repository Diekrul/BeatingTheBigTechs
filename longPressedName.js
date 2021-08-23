var isLongPressedName = function (name, typed) {
  let countOnName = 1;
  let countOfTyped = 1;
  let charToCompare = null;
  let result = true;
  let offsetName = name;
  let offsetTyped = typed;

  while (offsetName.length > 0 && offsetTyped.length > 0) {
    countOnName = 1;
    countOfTyped = 1;
    for (let i = 0; i < offsetName.length; i++) {
      charToCompare = offsetName[0];
      if (offsetName[i] === offsetName[i + 1]) {
        countOnName++;
      } else {
        let asArray = offsetName.split("");
        offsetName = asArray.splice(i + 1).join("");
        break;
      }
    }

    for (let i = 0; i < offsetTyped.length; i++) {
      if (charToCompare !== offsetTyped[i]) {
        result = false;
        break;
      }
      if (
        offsetTyped[i] === offsetTyped[i + 1] &&
        offsetTyped[i] === charToCompare
      ) {
        countOfTyped++;
      } else {
        offsetTyped = offsetTyped
          .split("")
          .splice(i + 1)
          .join("");
        break;
      }
    }

    if (countOnName > countOfTyped) {
      result = false;
      break;
    }
  }
  if (offsetTyped.length !== offsetName.length) {
    return false;
  }
  return result;
};
