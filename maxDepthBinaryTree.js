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
var maxDepth = function (root) {
  let currentDepth = 0;
  const visit = (node, level = 0) => {
    if (!node) return;
    if (level > currentDepth) currentDepth = level;
    if (node.left) {
      visit(node.left, level + 1);
    }
    if (node.right) {
      visit(node.right, level + 1);
    }
  };

  visit(root);
  return currentDepth;
};
