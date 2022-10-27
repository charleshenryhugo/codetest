// 559 https://leetcode.com/problems/maximum-depth-of-n-ary-tree/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
const maxDepth = function(root) {
  if (root === null) {
    return 0;
  }

  if (root.children.length === 0) {
    return 1;
  }
  
  const childrenMaxDepths = root.children.map(child => {
    return maxDepth(child);
  });
  
  return 1 + Math.max(...childrenMaxDepths);
};