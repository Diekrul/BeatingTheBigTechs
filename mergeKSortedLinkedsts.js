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
  const listsWithData = lists.filter((list) => list !== null);
  if (listsWithData.length === 0) return null;
  if (listsWithData.length === 1) return listsWithData[0];
  let resultLinkedList = new ListNode();
  let resultHead = resultLinkedList;

  const mergeTwoLinkedLists = (l1, l2) => {
    resultLinkedList = new ListNode();
    resultHead = resultLinkedList;
    while (l1 && l2) {
      if (l1.val > l2.val) {
        resultLinkedList.next = new ListNode(l2.val);
        resultLinkedList = resultLinkedList.next;
        l2 = l2.next;
      } else if (l1.val < l2.val) {
        resultLinkedList.next = new ListNode(l1.val);
        resultLinkedList = resultLinkedList.next;
        l1 = l1.next;
      } else {
        resultLinkedList.next = new ListNode(l1.val);
        resultLinkedList = resultLinkedList.next;
        resultLinkedList.next = new ListNode(l2.val);
        resultLinkedList = resultLinkedList.next;
        l1 = l1.next;
        l2 = l2.next;
      }
    }
    l1 && !l2 ? (resultLinkedList.next = l1) : (resultLinkedList.next = l2);
    resultHead = resultHead.next;
  };

  let listsToMerge = [];
  for (let i = 0; i < listsWithData.length; i++) {
    const list = listsWithData[i];
    listsToMerge.push(list);
    if (listsToMerge.length === 2) {
      mergeTwoLinkedLists(listsToMerge[0], listsToMerge[1]);
      listsToMerge = [resultHead];
    }
  }

  return resultHead;
};
