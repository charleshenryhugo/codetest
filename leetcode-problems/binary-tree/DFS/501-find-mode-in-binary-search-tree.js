// 501 https://leetcode.com/problems/find-mode-in-binary-search-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 const findMode = function(root) {
  const result = { 1: [] }; // { 1: [10], 2: [25], 3: [32,38]}
  let maxAppearedTimes = 1;
  let previousValueAppearedTimes = 1;
  let previousNode = null;
  
  const inorderDfs = function(node) {
    if (node === null) return;
    
    if (node.left !== null) inorderDfs(node.left);
    
    if (previousNode !== null) {
      if (node.val === previousNode.val) {
        previousValueAppearedTimes++;
        // console.log(node.val, previousValueAppearedTimes);
      } else {

        if (maxAppearedTimes === previousValueAppearedTimes) {
          result[previousValueAppearedTimes].push(previousNode.val);
        } else if (maxAppearedTimes < previousValueAppearedTimes) {
          delete result[maxAppearedTimes];
          maxAppearedTimes = previousValueAppearedTimes;
          result[previousValueAppearedTimes] = [previousNode.val];
        }

        previousValueAppearedTimes = 1;
      }
    }
    previousNode = node;
    
    if (node.right !== null) inorderDfs(node.right);
  }
  
  inorderDfs(root);
  
  if (maxAppearedTimes === previousValueAppearedTimes) {
    result[previousValueAppearedTimes].push(previousNode.val);
  } else if (maxAppearedTimes < previousValueAppearedTimes) {
    delete result[maxAppearedTimes];
    maxAppearedTimes = previousValueAppearedTimes;
    result[previousValueAppearedTimes] = [previousNode.val];
  }
  
  // console.log(result);
  
  return result[maxAppearedTimes]; // [32, 38]
};