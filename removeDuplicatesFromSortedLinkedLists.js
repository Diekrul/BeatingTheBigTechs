/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return null;
  let resultLinkedList = new ListNode();
  const resultHead = resultLinkedList;
  let removeFirstPosition = head.val !== 0;
  while (head) {
    if (resultLinkedList.next == null && resultLinkedList.val !== head.val) {
      resultLinkedList.next = new ListNode(head.val);
      resultLinkedList = resultLinkedList.next;
    }
    head = head.next;
  }
  return removeFirstPosition ? resultHead.next : resultHead;
};
