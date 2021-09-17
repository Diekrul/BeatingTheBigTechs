/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let l1 = head;
  const headL1 = l1;

  const getLength = () => {
    let listLength = 1;
    while (l1.next) {
      l1 = l1.next;
      listLength = listLength + 1;
    }
    return listLength;
  };

  const length = getLength();

  if (length === 1 && n === 1) {
    let empty = new ListNode();
    empty = null;
    return empty;
  }

  if (length === n) {
    return head.next;
  }

  const moveUntilPrevPosition = () => {
    l1 = head; //reset list
    let moves = 0;
    while (moves < length - n - 1) {
      l1 = l1.next;
      moves = moves + 1;
    }
  };

  const removeElement = () => {
    if (l1.next) {
      if (l1.next.next) {
        l1.next = l1.next.next;
      } else {
        l1.next = null;
      }
    }
  };

  moveUntilPrevPosition();
  removeElement();

  return headL1;
};
