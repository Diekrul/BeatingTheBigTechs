/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function (l1, l2) {
  if (l1 == null && l2 == null) {
    let empty = new ListNode();
    empty = null;
    return empty;
  }
  if (l1 && !l2) {
    return l1;
  } else if (!l1 && l2) {
    return l2;
  }

  let mergedList = new ListNode();
  const headToMergedList = mergedList;
  while (l1 && l2) {
    const l1NodeVal = l1.val;
    const l2NodeVal = l2.val;
    if (l1NodeVal <= l2NodeVal) {
      mergedList.next = new ListNode(l1NodeVal);
      mergedList = mergedList.next;
      l1 = l1.next;
    } else {
      mergedList.next = new ListNode(l2NodeVal);
      mergedList = mergedList.next;
      l2 = l2.next;
    }
  }
  l1 !== null ? (mergedList.next = l1) : (mergedList.next = l2);
  return headToMergedList.next;
};
