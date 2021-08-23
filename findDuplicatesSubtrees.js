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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  const pathsMap = new Map();
  const result = new Set();

  const visit = (node) => {
    if (!node) return;
    if (!pathsMap.has(JSON.stringify(node))) {
      pathsMap.set(JSON.stringify(node), 1);
    } else {
      result.add(JSON.stringify(node));
    }
    if (node.left) {
      visit(node.left);
    }
    if (node.right) {
      visit(node.right);
    }
  };

  visit(root);
  const toNode = [];
  for (let k of result.keys()) {
    toNode.push(JSON.parse(k));
  }

  return toNode;
};
