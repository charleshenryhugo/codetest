// 94. https://leetcode.com/problems/binary-tree-inorder-traversal/
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
 const inorderTraversal = function(root) {
  const result = [];
  if (root === null) return result;
  
  const dfs = function(node) {
    if (node === null) return;
    
    if (node.left !== null) dfs(node.left);
    
    result.push(node.val);
    
    if (node.right!== null) dfs(node.right);
    
  }
  
  dfs(root);
  
  return result;
};