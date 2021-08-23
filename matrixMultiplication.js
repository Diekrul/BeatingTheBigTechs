function matrixMult(A, B) {
  const x = A[0].length;
  const y = A.length;
  const z = B.length;
  const c = [];
  for (let i = 0; i < x; i++) {
    c[i] = [];
    for (let j = 0; j < y; j++) {
      c[i][j] = 0;
      for (let k = 0; k < z; k++) {
        c[i][j] += A[i][k] * B[k][j];
      }
    }
  }
  console.log(c);
}

matrixMult(
  [
    [1, 2, 3],
    [1, 2, 3],
    [5, 2, 0],
  ],
  [
    [1, 3, 2],
    [2, 4, 2],
    [1, 2, 2],
  ]
);
