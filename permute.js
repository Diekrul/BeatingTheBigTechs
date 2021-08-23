var permuteUnique = function (nums) {
  const result = [];

  const visit = (nums, path) => {
    const alreadyVisited = new Set();
    if (nums.length === 0) {
      result.push(path);
    }

    if (nums.length) {
      for (let i = 0; i < nums.length; i++) {
        const element = nums.shift(); // [1,2,3] => 1, [2,3]
        if (alreadyVisited.has(element)) {
          nums.push(element);
          continue;
        }
        alreadyVisited.add(element);
        visit(nums, [element, ...path]);
        nums.push(element);
      }
    }
  };
  visit(nums, []);
  return result;
};
