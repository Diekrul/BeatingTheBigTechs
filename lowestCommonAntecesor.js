/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let pathP = "";
  let pathQ = "";
  let currentPath = "";
  let commonAncestorPath = "";
  let found = false;

  const visit = (node, target, path) => {
    if (node.val === target) {
      found = true;
      return path;
    }
    if (node.left && !found) {
      currentPath = visit(node.left, target, path + "l");
    }
    if (node.right && !found) {
      currentPath = visit(node.right, target, path + "r");
    }
    return currentPath;
  };

  pathP = visit(root, p.val, "o");
  found = false;
  pathQ = visit(root, q.val, "o");

  if (pathP.length <= pathQ.length) {
    for (let i = 0; i < pathP.length; i++) {
      if (pathP[i] !== pathQ[i]) {
        let pathLikeArray = pathP.split("");
        pathLikeArray.splice(i).join("");
        commonAncestorPath = pathLikeArray;
        break;
      }
    }
    //if are equal, de common is the shortest path
    if (commonAncestorPath === "") {
      commonAncestorPath = pathP;
    }
  } else {
    for (let i = 0; i < pathQ.length; i++) {
      if (pathP[i] !== pathQ[i]) {
        let pathLikeArray = pathQ.split("");
        pathLikeArray.splice(i).join("");
        commonAncestorPath = pathLikeArray;
        break;
      }
    }
    if (commonAncestorPath === "") {
      commonAncestorPath = pathQ;
    }
  }

  for (let i = 0; i < commonAncestorPath.length; i++) {
    const moveTo = commonAncestorPath[i];
    if (moveTo === "l") {
      root = root.left;
    } else if (moveTo === "r") {
      root = root.right;
    }
  }
  return root;
};
