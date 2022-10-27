// 222 https://leetcode.com/problems/count-complete-tree-nodes/
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
const countNodes = function(root) {
  if (root === null) return 0;
  
  let leftSubTreeHeight = 0;
  let leftSubTreeCurrNode = root.left;
  while (leftSubTreeCurrNode !== null) {
    leftSubTreeHeight++;
    leftSubTreeCurrNode = leftSubTreeCurrNode.left;
  }
  
  let rightSubTreeHeight = 0;
  let rightSubTreeCurrNode = root.right;
  while (rightSubTreeCurrNode !== null) {
    rightSubTreeHeight++;
    rightSubTreeCurrNode = rightSubTreeCurrNode.right;
  }
  
  if (leftSubTreeHeight === rightSubTreeHeight) {
    return (1 << (leftSubTreeHeight + 1)) - 1;
  }
  
  return 1 + countNodes(root.left) + countNodes(root.right);
};
