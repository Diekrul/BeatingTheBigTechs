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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return [];

  let currentMaxLevel = 0;
  const values = [];

  const visit = (node, level) => {
    if (level > currentMaxLevel) {
      currentMaxLevel = level;
      values.push(node.val);
    }

    if (node.right) {
      visit(node.right, level + 1);
    }
    if (node.left) {
      visit(node.left, level + 1);
    }
  };
  values.push(root.val);
  visit(root, 0);
  return values;
};
