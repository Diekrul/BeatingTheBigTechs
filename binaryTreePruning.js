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
 * @return {TreeNode}
 */

var pruneTree = function (root) {
  let shouldCheckAgain = false;

  const visit = (node) => {
    if (!node) return;
    if (!node.left && !node.right && node.val === 0) {
      shouldCheckAgain = true;
      return null;
    }
    if (node.left) {
      node.left = visit(node.left);
    }
    if (node.right) {
      node.right = visit(node.right);
    }
    return node;
  };

  visit(root);
  while (shouldCheckAgain) {
    shouldCheckAgain = false;
    visit(root);
    if (!root.left && !root.right && root.val === 0) {
      //In case that all the tree is zeros including root
      root = null;
      break;
    }
  }
  return root;
};
