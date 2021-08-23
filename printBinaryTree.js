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
 * @return {string[][]}
 */
var printTree = function (root) {
  if (!root) return [""];

  let height = 0;
  let numberOfNodes = 0;
  const nodes = [];
  const leftNodes = [];
  const rightNodes = [];

  const visit = (node, level) => {
    if (!node) {
      return;
    }
    nodes.push(node.val);
    numberOfNodes++;
    if (level > height) {
      height = level;
    }
    if (node.left) {
      leftNodes.push(node.left.val);
      visit(node.left, level + 1);
    }
    if (node.right) {
      rightNodes.push(node.right.val);
      visit(node.right, level + 1);
    }
  };

  visit(root, 0);

  function fillMatrixWithNodes(node, level, c) {
    if (level === 0) {
      matrix[0][c] = root.val.toString();
    }
    if (node.left) {
      let i = level + 1;
      let j = c - Math.pow(2, height - level - 1);
      matrix[i][j] = node.left.val.toString();
      fillMatrixWithNodes(node.left, i, j);
    }
    if (node.right) {
      let i = level + 1;
      let j = c + Math.pow(2, height - level - 1);
      matrix[i][j] = node.right.val.toString();
      fillMatrixWithNodes(node.right, i, j);
    }
  }

  const numberOfColumns = Math.pow(2, height + 1) - 1;
  const numberOfRows = height + 1;
  const matrix = Array(numberOfRows).fill("");
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = Array(numberOfColumns).fill("");
  }

  fillMatrixWithNodes(root, 0, (numberOfColumns - 1) / 2);
  return matrix;
};
