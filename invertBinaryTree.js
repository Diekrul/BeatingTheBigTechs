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
var invertTree = function (root) {
  if (!root) return root;

  const visit = (node) => {
    if (!node) return;
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
    if (node.left) visit(node.left);
    if (node.right) visit(node.right);
    return node;
  };

  return visit(root);
};
