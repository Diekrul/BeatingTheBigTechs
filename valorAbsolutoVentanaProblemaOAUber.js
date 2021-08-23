function validate() {
  let counter = 0;
  const minB = Math.min(...b);
  const maxB = Math.max(...b);
  //9 > 5 || 9 <  -1
  //9 > 16 || 9 < 10
  for (let i = 0; i < a.length; i++) {
    if (
      (a[i] > minB + d || a[i] < minB - d) &&
      (a[i] > maxB + d || a[i] < maxB - d)
    ) {
      counter++;
    }
  }
  return console.log(counter);
}

const a = [3, 5, 9];
const b = [2, 4, 13];
const d = 3;
validate(a, b, d);
