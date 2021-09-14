var zigzagLevelOrder = function (root) {
  const queue = [];
  if (root) {
    queue.push(root);
  }
  const result = [];
  let count = 0;
  while (queue.length > 0) {
    const size = queue.length;
    const currentLevel = [];

    for (let i = 0; i < size; i++) {
      const node = queue.pop();
      if (count % 2 === 0) {
        currentLevel.push(node.val);
      } else {
        currentLevel.unshift(node.val);
      }
      if (node.left) {
        queue.unshift(node.left);
      }
      if (node.right) {
        queue.unshift(node.right);
      }
    }
    result.push(currentLevel);
    count++;
  }

  return result;
};
