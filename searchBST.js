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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  let nodeFound = null;

  const search = (node, val) => {
    if (node == null) return [];
    if (node.val === val) {
      nodeFound = node;
      return;
    } else {
      if (!nodeFound && node.left != null) {
        search(node.left, val);
      }
      if (!nodeFound && node.right != null) {
        search(node.right, val);
      }
    }
  };

  search(root, val);
  return nodeFound;
};
