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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const paths = [];
  const result = [];
  let pathWithStringFormat = "";

  const visit = (node, nodes = []) => {
    if (!node) return;
    nodes.push(node.val);
    if (node.left) {
      const newNodes = [...nodes];
      visit(node.left, newNodes);
    }
    if (node.right) {
      const newNodes = [...nodes];
      visit(node.right, newNodes);
    }
    if (!node.right && !node.left) {
      paths.push(nodes);
      nodes = [];
    }
  };
  visit(root);

  paths.forEach((path) => {
    pathWithStringFormat = "";
    for (let i = 0; i < path.length; i++) {
      const number = path[i];
      if (i === path.length - 1) {
        pathWithStringFormat = pathWithStringFormat + number.toString();
      } else {
        pathWithStringFormat = pathWithStringFormat + number.toString() + "->";
      }
    }
    result.push(pathWithStringFormat);
  });
  console.log(pathWithStringFormat);
  return result;
};
