var mergeTwoLists = function (l1, l2) {
  let result = new ListNode();
  const head = result;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      result.next = l1;
      result = result.next;
      l1 = l1.next;
    } else {
      result.next = l2;
      result = result.next;
      l2 = l2.next;
    }
  }
  const l = l1 || l2;
  if (l) {
    result.next = l;
  }
  return head.next;
};
