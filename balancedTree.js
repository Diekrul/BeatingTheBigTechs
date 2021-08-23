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
 * @return {boolean}
 */
var isBalanced = function (root) {
  let isBalan = true;

  const getHeight = (node) => {
    let height = null;
    let leftHeight = null;
    let rightHeight = null;

    if (node.left === null) {
      leftHeight = -1;
    }
    if (node.right === null) {
      rightHeight = -1;
    }
    if (node.left) {
      leftHeight = getHeight(node.left);
    }
    if (node.right) {
      rightHeight = getHeight(node.right);
    }
    if (leftHeight - rightHeight > 1 || -leftHeight + rightHeight > 1) {
      isBalan = false;
      return;
    }

    height = Math.max(leftHeight, rightHeight) + 1;
    return height;
  };

  if (root != null) {
    getHeight(root);
  }
  return isBalan;
};
