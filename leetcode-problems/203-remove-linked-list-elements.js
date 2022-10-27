// 203 https://leetcode.com/problems/remove-linked-list-elements/
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

ListNode.prototype.toArray = function() {
  const nums = [];
  let currentNode = this;
  while (currentNode) {
    nums.push(currentNode.val);
    currentNode = currentNode.next;
  }
  return nums;
}

ListNode.fromArray = function(nums) {
  let listHeader = null;
  let currentNode = null;
  for (const num of nums) {
    if (listHeader === null) {
      listHeader = new ListNode(num);
      currentNode = listHeader;
    } else {
      currentNode.next = new ListNode(num);
      currentNode = currentNode.next;
    }
  }
  return listHeader;
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function(head, val) {
  // [1,2,6,3,4,5,6] 6
  // 6 -> 1 -> 2 -> 3 -> 4 -> 5 -> null
  //                          p
  //                                 c
  //      h

  // 1 -> null
  // p
  // c
  if (head === null) {
    return head;
  }

  let prevNode = head;
  let currNode = prevNode.next;
  while (currNode !== null) {
    if (currNode.val === val) {
      prevNode.next = currNode.next;
      currNode = prevNode.next;
    } else {
      prevNode = currNode;
      currNode = currNode.next;
    }
  }

  if (head.val === val) {
    head = head.next
  }

  return head;
};


// node xxx.js 6,1,2,3,6,4,6,5,6 6
const [_node, _file, listInput, valInput] = process.argv;
const listArray = listInput.split(',').map(s => Number.parseInt(s));
const val = Number.parseInt(valInput);

const header = ListNode.fromArray(listArray);
const resultheader = removeElements(header, val);
const resultArray = resultheader?.toArray() ?? [];
console.log(resultArray);

