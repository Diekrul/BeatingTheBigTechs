var isSameTree = function (p, q) {
  const pTreeNodes = [];
  const qTreeNodes = [];
  let areTheSame = true;

  const visit = (node, treeNodes) => {
    if (!node) return;
    treeNodes.push(node.val);
    if (node.left) {
      visit(node.left, treeNodes);
    } else {
      treeNodes.push(null);
    }
    if (node.right) {
      visit(node.right, treeNodes);
    } else {
      treeNodes.push(null);
    }
  };

  visit(p, pTreeNodes);
  visit(q, qTreeNodes);

  if (pTreeNodes.length !== qTreeNodes.length) {
    areTheSame = false;
  } else {
    pTreeNodes.forEach((pNode, index) => {
      if (pNode !== qTreeNodes[index]) {
        areTheSame = false;
      }
    });
  }

  return areTheSame;
};
