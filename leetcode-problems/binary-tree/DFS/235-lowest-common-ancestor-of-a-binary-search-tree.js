// 235 https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 const lowestCommonAncestor = function(root, p, q) {
  const min = Math.min(p.val, q.val);
  const max = Math.max(p.val, q.val);
  
  const search = function(node) {
    if (node === null) return null;
    if (node === p || node === q) return node;
    
    if (node.val < min) return search(node.right);
    if (node.val > max) return search(node.left);
    
    const ancestorFromLeft = search(node.left);
    const ancestorFromRight = search(node.right);
    
    if (ancestorFromLeft !== null && ancestorFromRight !== null) return node;
    
    if (ancestorFromLeft !== null) return ancestorFromLeft;
    
    if (ancestorFromRight !== null) return ancestorFromRight;
    
    return null;
  }
  
  return search(root);
  
};