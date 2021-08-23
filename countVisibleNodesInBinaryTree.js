function solution(T) {
  const nodesBiggerThanRoot = [];

  const visit = (node) => {
    if (!node) return;
    if (node.x >= T.x) {
      nodesBiggerThanRoot.push(node.x);
    }
    if (node.l) {
      visit(node.l);
    }
    if (node.r) {
      visit(node.r);
    }
  };

  visit(T);

  return nodesBiggerThanRoot.length;
}

const binaryTree = {
  x: 5,
  l: {
    x: 3,
    l: {
      x: 20,
      l: null,
      r: null,
    },
    r: {
      x: 21,
      l: null,
      r: null,
    },
  },
  r: {
    x: 10,
    l: {
      x: 1,
      l: null,
      r: null,
    },
    r: null,
  },
};

const binaryTree2 = {
  x: -1,
  l: null,
  r: {
    x: -2,
    l: null,
    r: {
      x: -3,
      l: null,
      r: null,
    },
  },
};

console.log(solution(binaryTree2));
