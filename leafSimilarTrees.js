/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const root1Leafs = [];
  const root2Leafs = [];
  let areSimilarTrees = true;

  const visit = (node, leafs) => {
    if (!node) return;
    if (!node.left && !node.right) {
      leafs.push(node.val);
    }
    if (node.left) {
      visit(node.left, leafs);
    }
    if (node.right) {
      visit(node.right, leafs);
    }
  };

  visit(root1, root1Leafs);
  visit(root2, root2Leafs);
  if (root1Leafs.length !== root2Leafs.length) {
    areSimilarTrees = false;
  }
  for (let i = 0; i < root1Leafs.length; i++) {
    const element = root1Leafs[i];
    if (element !== root2Leafs[i]) {
      areSimilarTrees = false;
      break;
    }
  }
  return areSimilarTrees;
};
