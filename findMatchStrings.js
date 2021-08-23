function findmatch(p, t) {
  let j,
    m,
    n = 0;
  m = p.length;
  n = t.length;
  for (let i = 0; i < n; i++) {
    j = 0;
    while (j < m && t.charAt(i + j) == p.charAt(j)) {
      j = j + 1;
      if (j == m) return i;
    }
  }
  return -1;
}

console.log(findmatch("Skiena", "AAasd Skiena e"));
