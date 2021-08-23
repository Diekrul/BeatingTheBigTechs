/**?
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * /
Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

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

var reverseList = function (head) {
  if (!head) return [];
  let currentListNode = head; //1
  let links = 0;
  let lastNode = null;

  const findNumberOfLinks = () => {
    while (currentListNode.next) {
      links++;
      currentListNode = currentListNode.next;
    }
  };

  const pointHeadToLastNode = () => (lastNode = currentListNode);

  findNumberOfLinks();
  pointHeadToLastNode();

  currentListNode = head;
  while (links != 0) {
    let visitedNode = head;
    let prevNode = null;
    currentListNode = head;
    for (let i = 0; i < links; i++) {
      prevNode = currentListNode;
      visitedNode = currentListNode.next;
      currentListNode = currentListNode.next;
    }
    prevNode.next = null;
    visitedNode.next = prevNode;
    links--;
  }
  return lastNode;
};
