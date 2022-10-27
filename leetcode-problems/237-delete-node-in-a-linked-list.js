// 237 https://leetcode.com/problems/delete-node-in-a-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const ListNode = function(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = function(node) {
  // ListNode(5)
  // ? -> ? -> 4 -> 5 -> 9 -> null
  // copy the next node val to current node
  // then delete next node

  node.val = node.next.val;
  node.next = node.next.next;
};