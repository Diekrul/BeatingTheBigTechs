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

const getMax = (node) => {
  let currentMax = node.val;
  visit(node.left);
  visit(node.right);
  return currentMax;

  function visit(node) {
    if (!node) return;
    if (node.val > currentMax) {
      currentMax = node.val;
    }
    if (node.left) {
      visit(node.left);
    }
    if (node.right) {
      visit(node.right);
    }
  }
};

const getMin = (node) => {
  let currentMin = node.val;
  visit(node.left);
  visit(node.right);
  return currentMin;

  function visit(node) {
    if (!node) return;
    if (node.val < currentMin) {
      currentMin = node.val;
    }
    if (node.left) {
      visit(node.left);
    }
    if (node.right) {
      visit(node.right);
    }
  }
};

var isValidBST = function (root) {
  if (!root) return true;
  const leftNode = root.left;
  const rightNode = root.right;
  if (leftNode) {
    if (getMax(leftNode) >= root.val) {
      return false;
    }
  }
  if (rightNode) {
    if (getMin(rightNode) <= root.val) {
      return false;
    }
  }

  if (!isValidBST(root.left) || !isValidBST(root.right)) {
    return false;
  }
  return true;
};
