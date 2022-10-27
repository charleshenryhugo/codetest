// 572 https://leetcode.com/problems/subtree-of-another-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const isSameTree = function(p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;

  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtree = function(root, subRoot) {
  if (isSameTree(root, subRoot)) return true;
  
  if (root === null) return false;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};