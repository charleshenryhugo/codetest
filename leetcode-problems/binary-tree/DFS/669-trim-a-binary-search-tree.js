// 669 https://leetcode.com/problems/trim-a-binary-search-tree/
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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
 const trimBST = function(root, low, high) {
  if (root === null) return null;
  
  if (root.val < low) return trimBST(root.right, low, high);
  
  if (root.val > high) return trimBST(root.left, low, high);
  
  // between low and high
  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);
  
  return root;
};