// 1325 https://leetcode.com/problems/delete-leaves-with-a-given-value/
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
 * @param {number} target
 * @return {TreeNode}
 */
// beat 100% other javascript solutions!
const removeLeafNodes = function(root, target) {
  const rootParent = new TreeNode(-1, root);
  
  // role: 'left', 'right'
  const dfs = function(node, parentNode, role) {
    if (node === null) {
      return;
    }
    
    if (node.left === null && node.right === null) { // is a leaf
      if (node.val === target) {
        parentNode[role] = null; // delete the current leaf node
      }
      return;
    }
    
    if (node.left !== null) {
      dfs(node.left, node, 'left');
    }
    
    if (node.right !== null) {
      dfs(node.right, node, 'right');
    }
    
    if (node.left === null && node.right === null && node.val === target) {
      parentNode[role] = null;
    }
  }
  
  dfs(root, rootParent, 'left');
  return rootParent.left;
};
