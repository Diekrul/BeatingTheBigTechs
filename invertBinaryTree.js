/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }        4           4
          2   7  =>   7   2
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) {
    console.log("no existe");
    const result = new TreeNode();
    return (result.val = null);
  }
  if (root.length === 0) {
    return new TreeNode([]);
  }
  const nodesWithPosition = [];

  const visit = (node, positions) => {
    if (!node) return;
    let currentPosition = [...positions];
    nodesWithPosition.push([node.val, currentPosition]);

    if (node.left) {
      visit(node.left, [...positions, "left"]);
    }

    currentPosition = [...positions];
    if (node.right) {
      visit(node.right, [...positions, "right"]);
    }
  };

  const addToReverseTree = (node, val, positions) => {
    if (positions.length === 0) {
      node = new TreeNode(val);
    } else {
      if (positions[0] === "left") {
        positions.shift();
        if (node.right) {
          addToReverseTree(node.right, val, positions);
        } else {
          node.right = new TreeNode(val);
        }
      } else if (positions[0] === "right") {
        positions.shift();
        if (node.left) {
          addToReverseTree(node.left, val, positions);
        } else {
          node.left = new TreeNode(val);
        }
      }
    }
  };

  visit(root, []);
  let reversedTreeRoot = new TreeNode(nodesWithPosition[0][0]); // add root

  for (let i = 1; i < nodesWithPosition.length; i++) {
    const val = nodesWithPosition[i][0];
    const nodePosition = nodesWithPosition[i][1];
    addToReverseTree(reversedTreeRoot, val, nodePosition);
  }
  return reversedTreeRoot;
};
