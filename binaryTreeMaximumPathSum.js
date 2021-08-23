var maxPathSum = function (root) {
  let result = -1000;

  const visitAndSum = (node) => {
    let leftSum = 0;
    let rightSum = 0;
    if (node.left) {
      leftSum = visitAndSum(node.left); //-2
    }
    if (node.right) {
      rightSum = visitAndSum(node.right); //3
    }
    result = Math.max(result, node.val + leftSum + rightSum);
    return Math.max(0, leftSum + node.val, rightSum + node.val); //0 para evitar negativos
  };
  visitAndSum(root);

  return result;
};
