// 404 https://leetcode.com/problems/sum-of-left-leaves/
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
 const sumOfLeftLeaves = function(root) {
  let sum = 0;
  
  const dfs = function(node, role) {
    if (node === null) return;

    if (node.left === null && node.right === null) {
      if (role === 'left') {
        sum += node.val;
      }
      return;
    }
    
    if (node.left !== null) dfs(node.left, 'left');
    if (node.right !== null) dfs(node.right, 'right');
  }
  
  dfs(root.left, 'left');
  dfs(root.right, 'right');
  
  return sum;
};
