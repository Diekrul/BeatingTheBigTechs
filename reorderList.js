var reorderList = function (head) {
  let temp = head;
  const values = [];
  while (temp) {
    values.push(temp.val);
    temp = temp.next;
  }
  temp = head;

  let i = 0;
  while (values.length > 0) {
    if (i % 2 === 0) {
      temp.val = values.shift();
    } else {
      temp.val = values.pop();
    }
    temp = temp.next;
    i++;
  }

  return temp;
};
