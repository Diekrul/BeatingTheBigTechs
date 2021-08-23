/**
 * Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[15,7],[9,20],[3]]




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
var levelOrderBottom = function (root) {
  let values = [];
  let maxLevel = 0;

  const getMaxLevel = (node, level) => {
    if (level > maxLevel) {
      maxLevel = level;
    }
    if (!node) return;
    if (node.left) {
      getMaxLevel(node.left, level + 1);
    }
    if (node.right) {
      getMaxLevel(node.right, level + 1);
    }
  };

  getMaxLevel(root, 0);

  const visit = (node, level) => {
    values[level] = values[level] ? [...values[level], node.val] : [node.val];
    if (node.left) {
      visit(node.left, level - 1);
    }
    if (node.right) {
      visit(node.right, level - 1);
    }
  };
  if (root) {
    visit(root, maxLevel);
  }
  return values;
};
