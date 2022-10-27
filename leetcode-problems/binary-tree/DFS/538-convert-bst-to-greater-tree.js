// 538 https://leetcode.com/problems/convert-bst-to-greater-tree/
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
 * @return {TreeNode}
 */
// [0,1,2,3,4,5,6,7,8]
// [36, 36, 35, 33, 30, 26, 21, 15, 8]
// reverse inorder traversal
const convertBST = function(root) {
  let currentSum = 0;

  const dfs = function(node) {
    if (node === null) return;
    
    dfs(node.right);
    
    node.val += currentSum;
    currentSum = node.val;
    
    dfs(node.left);
  }
  
  dfs(root);
  return root;
};