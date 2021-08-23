/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let preIndex = 0;
  const root = new TreeNode(preorder[preIndex]);

  const getSubtrees = (root, inorderTree) => {
    let newLeftSubtree = [];
    let newRightSubtree = [];

    if (inorderTree.length === 1) {
      return inorderTree[0];
    }
    if (inorderTree.length === 1) {
      return inorderTree[0];
    }

    let i = 0;
    while (inorderTree[i].val !== root.val) {
      newLeftSubtree.push(inorderTree[i]);
      i++;
    }
    if (inorderTree[i].val === root.val) {
      if (inorderTree[i + 1]) {
        newRightSubtree = inorderTree.splice(i + 1);
      }
    }

    if (newLeftSubtree.length > 0) {
      preIndex = preIndex + 1;
      let nextRoot = new TreeNode(preorder[preIndex]);
      root.left = getSubtrees(nextRoot, newLeftSubtree);
    }
    if (newRightSubtree.length > 0) {
      preIndex = preIndex + 1;
      let nextRoot = new TreeNode(preorder[preIndex]);
      root.right = getSubtrees(nextRoot, newRightSubtree);
    }
    return root;
  };

  let inorderTree = inorder.map((v) => new TreeNode(v));
  getSubtrees(root, inorderTree);
  return root;
};
