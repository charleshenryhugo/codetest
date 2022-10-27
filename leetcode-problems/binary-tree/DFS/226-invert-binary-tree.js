// 226 https://leetcode.com/problems/invert-binary-tree/
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
const invertTree = function(root) {
  if (root === null) return root;
  if (root.left === null && root.right === null) return root;
  
  const leftTree = invertTree(root.left);
  const rightTree = invertTree(root.right);
  root.left = rightTree;
  root.right = leftTree;
  
  return root;
};

