// 530 https://leetcode.com/problems/minimum-absolute-difference-in-bst/
// same as 783
// 783 https://leetcode.com/problems/minimum-distance-between-bst-nodes/
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
 * @return {number}
 */
 const getMinimumDifference = function(root) {
  let prevNode = null;
  let minDiff = Number.MAX_SAFE_INTEGER;
  
  const inorderDfs = function(node) {
    if (node.left !== null) inorderDfs(node.left);
    
    if (prevNode !== null) {
      minDiff = Math.min(minDiff, node.val - prevNode.val);
    }
    prevNode = node;
    
    if (node.right !== null) inorderDfs(node.right);
  }
  
  inorderDfs(root);
  
  return minDiff;
};
