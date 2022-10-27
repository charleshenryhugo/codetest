// 21. https://leetcode.com/problems/merge-two-sorted-lists/
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(list1, list2) {
  let list1CurrentNode = list1;
  let list2CurrentNode = list2;
  let resultListHeaderNode = null;
  let resultListCurrentNode = null;

  // list1: 1 2 4 7
  //                i
  // list2: 1 3 9
  //            j
  // result: 1 2 3 4 7
  while (list1CurrentNode && list2CurrentNode) {
    let smallerValue;
    if (list1CurrentNode.val < list2CurrentNode.val) {
      smallerValue = list1CurrentNode.val;
      list1CurrentNode = list1CurrentNode.next;
    } else {
      smallerValue = list2CurrentNode.val;
      list2CurrentNode = list2CurrentNode.next;
    }

    if (resultListHeaderNode === null) {
      resultListHeaderNode = new ListNode(smallerValue);
      resultListCurrentNode = resultListHeaderNode;
    } else {
      resultListCurrentNode.next = new ListNode(smallerValue);
      resultListCurrentNode = resultListCurrentNode.next;
    }
  }

  const validNode = list1CurrentNode ?? list2CurrentNode;
  if (resultListHeaderNode === null) {
    return validNode;
  }

  resultListCurrentNode.next = validNode;
  return resultListHeaderNode;
};

/**
 * @param {Array} nums
 * @return {ListNode}
 */
 const arrayToList = (nums) => {
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
 * @param {ListNode} listNode
 * @return {Array}
 */
const listToArray = (listNode) => {
  const nums = [];
  let currentNode = listNode;
  while (currentNode) {
    nums.push(currentNode.val);
    currentNode = currentNode.next;
  }
  return nums;
}

const [_p1, _p2, l1Argv, l2Argv] = process.argv;
const [_l1, l1Str] = l1Argv.split('=');
const [_l2, l2Str] = l2Argv.split('=');
const l1Array = l1Str.split(',').map(s => Number.parseInt(s)).filter(n => !Number.isNaN(n));
const l2Array = l2Str.split(',').map(s => Number.parseInt(s)).filter(n => !Number.isNaN(n));

const l1 = arrayToList(l1Array);
const l2 = arrayToList(l2Array);
const resultListNode = mergeTwoLists(l1, l2);
console.log(listToArray(resultListNode));

