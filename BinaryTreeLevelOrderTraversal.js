/*
Given the root of a binary tree, return the level order traversal of its nodes' values.
 (i.e., from left to right, level by level).

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
 */

var levelOrder = function (root) {
  const nodesPerLevel = [];

  const visit = (node, level) => {
    const nodes = [];
    if (!node) return;
    if (node.left) {
      nodes.push(node.left.val, level + 1);
    }
    if (node.right) {
      nodes.push(node.right.val, level + 1);
    }
    nodesPerLevel[level]
      ? nodesPerLevel[level].push([...nodes])
      : nodesPerLevel.push(nodes);
  };

  if (root) {
    nodesPerLevel.push([root.val]);
    visit(root, 0);
  }
};
