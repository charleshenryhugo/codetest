// 103 https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 const zigzagLevelOrder = function(root) {
  const result = [];
  if (root === null) {
    return result;
  }
  
  let leftFirst = true;
  const nodeQueue = [root];
  while (nodeQueue.length > 0) {
    const currentLevelValues = [];
    const currentLevelSize = nodeQueue.length;
    for (let i = 0; i < currentLevelSize; i++) {
      const { left, right, val } = nodeQueue.shift();
      
      if (leftFirst) {
        currentLevelValues.push(val);
      } else {
        currentLevelValues.unshift(val);
      }
      
      left !== null && nodeQueue.push(left);
      right !== null && nodeQueue.push(right);
    }
    result.push(currentLevelValues);
    leftFirst = !leftFirst;
  }
  
  return result;
};

/*
  3
 9 20
  15 7
*/

const node15 = new TreeNode(15);
const node7 = new TreeNode(7);
const node20 = new TreeNode(20, node15, node7);
const node9 = new TreeNode(9);
const root = new TreeNode(3, node9, node20);

const result = zigzagLevelOrder(root);
console.log(result);
