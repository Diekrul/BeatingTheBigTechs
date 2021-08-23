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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let hasPath = false;

  const visit = (node, currentPath) => {
    if (!node) return;
    if (node.left) {
      visit(node.left, currentPath + node.val);
    }
    if (node.right) {
      visit(node.right, currentPath + node.val);
    }
    if (!node.left && !node.right) {
      if (currentPath + node.val === targetSum) {
        hasPath = true;
        return;
      }
    }
  };
  visit(root, 0);
  return hasPath;
};
