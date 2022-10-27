// 82 https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function(head) {
  const preHead = new ListNode(Number.MIN_SAFE_INTEGER, head)
  let previous = preHead;
  let current = preHead.next;

  while (current !== null) {
    if (current.next?.val === current.val) {
      const duplicatedValue = current.val;
      while (current !== null && current.val === duplicatedValue) {
        current = current.next;
      }
      previous.next = current;
    } else {
      previous = current;
      current = current.next;
    }
  }
  return preHead.next;
};