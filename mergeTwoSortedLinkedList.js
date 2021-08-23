/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**   L1 => 2-->4
 *    L2 =>1-->3-->4
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let mergedList = new ListNode();
  const head = mergedList;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      const newNode = new ListNode(l2.val);
      mergedList.next = newNode;
      mergedList = mergedList.next;
      l2 = l2.next; //remove first node
    } else if (l1.val < l2.val) {
      const newNode = new ListNode(l1.val);
      mergedList.next = newNode;
      mergedList = mergedList.next;
      l1 = l1.next;
    } else {
      mergedList.next = new ListNode(l1.val);
      mergedList = mergedList.next;
      mergedList.next = new ListNode(l2.val);
      mergedList = mergedList.next;
      l1 = l1.next;
      l2 = l2.next;
    }
  }

  if (l1 && !l2) {
    mergedList.next = l1;
  } else if (!l1 && l2) {
    mergedList.next = l2;
  }
  return head.next;
};
