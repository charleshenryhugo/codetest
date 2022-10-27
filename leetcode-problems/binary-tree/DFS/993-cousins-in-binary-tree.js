// 993 https://leetcode.com/problems/cousins-in-binary-tree/
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
 const isCousins = function(root, x, y) {
  if (root.val === x || root.val === y) return false;
  
  let xDepth = null;
  let yDepth = null;
  let xParent = null;
  let yParent = null;
  
  const dfs = function(node, depth) {
    if (node === null) return;
    
    if (node.left && node.left.val === x) {
      xDepth = depth + 1;
      xParent = node;
    }
    if (node.left && node.left.val === y) {
      yDepth = depth + 1;
      yParent = node;
    }
    
    if (node.right && node.right.val === x) {
      xDepth = depth + 1;
      xParent = node;
    }
    if (node.right && node.right.val === y) {
      yDepth = depth + 1;
      yParent = node;
    }
    
    if (xDepth === null || yDepth === null) {
      dfs(node.left, depth + 1);
      dfs(node.right, depth + 1);
    }
  }
  
  dfs(root, 0);

  return xDepth === yDepth && xParent !== yParent;
};