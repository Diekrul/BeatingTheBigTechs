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
 * @return {number[][]}
 */

var zigzagLevelOrder = function (root) {
  const result = [];
  if (!root) {
    return [];
  }
  const visit = (node, level) => {
    if (result[level]) {
      result[level].push(node.val);
    } else {
      result[level] = [node.val];
    }
    if (node.left) {
      visit(node.left, level + 1);
    }
    if (node.right) {
      visit(node.right, level + 1);
    }
  };

  visit(root, 0);
  for (let i = 0; i < result.length; i++) {
    if (i % 2 !== 0) {
      result[i].reverse();
    }
  }
  return result;
};
