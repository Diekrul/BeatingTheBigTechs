/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let allPaths = [];
  let allNodes = [];

  const visit = (node, path) => {
    if (!node) return;
    if (!node.left && !node.right) {
      return path;
    }
    let maxLeft = 0;
    let maxRight = 0;
    if (node.left) {
      maxLeft = visit(node.left, path + 1);
    }
    if (node.right) {
      maxRight = visit(node.right, path + 1);
    }
    return Math.max(maxLeft, maxRight);
  };

  const checkSubtree = (node) => {
    let leftPath = 0;
    let rightPath = 0;
    if (node.left) {
      leftPath = 1 + visit(node.left, 0);
    }
    if (node.right) {
      rightPath = 1 + visit(node.right, 0);
    }
    allPaths.push(leftPath + rightPath);
  };

  const inOrderTraverse = (node) => {
    if (node) {
      inOrderTraverse(node.left);
      allNodes.push(node);
      inOrderTraverse(node.right);
    }
  };

  inOrderTraverse(root);
  for (let i = 0; i < allNodes.length; i++) {
    checkSubtree(allNodes[i]);
  }

  allPaths.sort((a, b) => b - a);
  return allPaths[0];
};
