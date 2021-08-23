//USING QUEUE!!!!

var topKFrequent = function (nums, k) {
  const numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    numsMap.set(value, numsMap.get(value) ? numsMap.get(value) + 1 : 1);
  }

  const queue = [];
  const enqueue = (k, v) => {
    const element = { k: k, priority: v };
    let added = false;
    if (queue.length === 0) {
      queue.push(element);
      return;
    }

    for (let i = 0; i < queue.length; i++) {
      if (queue[i].priority > element.priority) {
        //inserto element en la posicion i, sin reemplazar.
        queue.splice(i, 0, element);
        added = true;
        break;
      }
    }
    if (!added) {
      queue.push(element);
    }
  };

  for (const [k, v] of numsMap) {
    enqueue(k, v);
  }
  let count = 0;
  const output = [];
  for (let i = queue.length - 1; i >= 0; i--) {
    if (count === k) {
      break;
    }
    output.push(queue[i].k);
    count++;
  }

  return output;
};
