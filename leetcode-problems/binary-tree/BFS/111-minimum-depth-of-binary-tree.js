// 111 https://leetcode.com/problems/minimum-depth-of-binary-tree/
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
 * @return {number}
 */
 const minDepth = function(root) {
  if (root === null) {
    return 0;
  }
  
  let depth = 1;
  const nodeQueue = [root];

  while (nodeQueue.length > 0) {
    const currentLevelSize = nodeQueue.length;
    for (let i = 0; i < currentLevelSize; i++) {
      const { left, right, val } = nodeQueue.shift();
      if (left === null && right === null) {
        return depth;
      }
      
      left !== null && nodeQueue.push(left);
      right !== null && nodeQueue.push(right);
    }
    
    depth++;
  }
  
  // won't reach this line
  return depth;
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

const result = minDepth(root);
console.log(result);
