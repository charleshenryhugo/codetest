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
 const preorderTraversal = function(root) {
  const result = [];
  
  const dfs = function(node) {
    if (node === null) return;
    result.push(node.val);
    dfs(node.left);
    dfs(node.right);
  };
  
  dfs(root);
  
  return result;
};