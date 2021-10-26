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
var levelOrder = function (root) {
  if (!root) return [];
  const stack = [];
  const result = [];
  stack.push(root);

  while (stack.length > 0) {
    const currentLevel = [];
    const size = stack.length;
    for (let i = 0; i < size; i++) {
      const element = stack.shift();
      currentLevel.push(element.val);
      if (element.left) {
        stack.push(element.left);
      }
      if (element.right) {
        stack.push(element.right);
      }
    }
    result.push([...currentLevel]);
  }
  return result;
};
