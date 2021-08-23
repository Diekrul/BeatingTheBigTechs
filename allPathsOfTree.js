var allPaths = function (root) {
  const totalPaths = [];
  const visit = (node, path) => {
    if (!node) {
      return;
    }
    path.push(node.val);

    if (node.left) {
      visit(node.left, [...path]);
    }
    if (node.right) {
      visit(node.right, [...path]);
    }
    if (!node.left && !node.right) {
      totalPaths.push(path);
      path = [];
    }
  };
  visit(root, []);
  console.log(totalPaths);
};
