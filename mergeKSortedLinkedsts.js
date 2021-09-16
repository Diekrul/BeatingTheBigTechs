/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) {
    let emptyNode = new ListNode();
    emptyNode = null;
    return emptyNode;
  }
  if (lists.length < 2) {
    return lists[0];
  }
  const mergeTwoLists = (l1, l2) => {
    let mergedList = new ListNode();
    const head = mergedList;
    while (l1 && l2) {
      if (l1.val <= l2.val) {
        const node = new ListNode(l1.val);
        mergedList.next = node;
        l1 = l1.next;
      } else {
        const node = new ListNode(l2.val);
        mergedList.next = node;
        l2 = l2.next;
      }
      mergedList = mergedList.next;
    }
    if (l1 !== null) {
      mergedList.next = l1;
    } else if (l2 !== null) {
      mergedList.next = l2;
    }
    return head.next;
  };

  let currentMergedList = mergeTwoLists(lists[0], lists[1]);
  const offsetList = lists.splice(2);
  for (let i = 0; i < offsetList.length; i++) {
    currentMergedList = mergeTwoLists(currentMergedList, offsetList[i]);
  }
  return currentMergedList;
};
