// 2. https://leetcode.com/problems/add-two-numbers/
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
  // [2,4,3]
  // [5,6,4]
  // [7,0,8]
  // 465 + 342 = 807

  // [2,4,3]
  // [5,6,7,8]
  // 7, 0, 1, 9
  // [7, 0, 1]

  // [2,4,3]
  // [5,6,7,9,9]
  // [7, 0, 1, 0, 0, 1]

  if (l1.val === 0 && !l1.next) return l2;
  if (l2.val === 0 && !l2.next) return l1;

  let resultNodeHeader = null;
  let currentResultNode = null;
  let addition = 0;
  while (l1 !== null && l2 !== null) {
    const res = l1.val + l2.val + addition;
    addition = res >= 10 ? 1 : 0;
    if (resultNodeHeader === null) {
      resultNodeHeader = new ListNode(res % 10);
      currentResultNode = resultNodeHeader;
    } else {
      currentResultNode.next = new ListNode(res % 10);
      currentResultNode = currentResultNode.next;
    }
    l1 = l1.next;
    l2 = l2.next;
  }
  // const len = Math.min(l1.length, l2.length);
  // let i = 0;
  // for (i = 0; i < len; i++) {
  //   const res = l1[i] + l2[i] + addition
  //   result.push(res % 10);
  //   addition = res >= 10 ? 1 : 0
  // }

  if (l1 === null && l2 === null) {
    if (addition === 1) {
      currentResultNode.next = new ListNode(1);
      currentResultNode = currentResultNode.next;
    }
    return resultNodeHeader;
  }

  // if (l1.length === l2.length) {
  //   if (addition === 1) {
  //     result.push(1);
  //   }
  //   return result;
  // }

  let longerListCurrentNode = l1 !== null ? l1 : l2;
  while (longerListCurrentNode !== null) {
    const res = longerListCurrentNode.val + addition;
    currentResultNode.next = new ListNode(res % 10);
    currentResultNode = currentResultNode.next;
    addition = res >= 10 ? 1 : 0;
    longerListCurrentNode = longerListCurrentNode.next;
  }
  // while (i < longerList.length) {
  //   result.push((longerList[i] + addition) % 10);
  //   addition = longerList[i] + addition >= 10 ? 1 : 0
  //   i++;
  // }

  if (addition === 1) {
    currentResultNode.next = new ListNode(1);
    currentResultNode = currentResultNode.next;
  }

  // if (addition === 1) {
  //   result.push(1)
  // }

  return resultNodeHeader;
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

const arguments = process.argv.slice(2);
const [l1Argv, l2Argv] = arguments;
const [_l1, l1Str] = l1Argv.split('=');
const [_l2, l2Str] = l2Argv.split('=');
const l1Array = l1Str.split(',').map(s => Number.parseInt(s)).filter(n => !Number.isNaN(n));
const l2Array = l2Str.split(',').map(s => Number.parseInt(s)).filter(n => !Number.isNaN(n));

const l1 = arrayToList(l1Array);
const l2 = arrayToList(l2Array);

const resultListNode = addTwoNumbers(l1, l2);
console.log(listToArray(resultListNode));