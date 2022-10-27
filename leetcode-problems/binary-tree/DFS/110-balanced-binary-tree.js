// 110 https://leetcode.com/problems/balanced-binary-tree/
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
 * @return {boolean}
 */
 const isBalanced = function(root) {
  const dfs = function(node) {
    if (node === null) {
      return {
        isBalanced: true,
        height: 0,
      };
    }
    
    const { left, right } = node;
    if (left === null && right === null) {
      return {
        isBalanced: true,
        height: 1,
      }
    }
    
    const { isBalanced: isLeftBalanced, height: leftHeight } = dfs(left);
    const { isBalanced: isRightBalanced, height: rightHeight } = dfs(right);
    
    return {
      isBalanced: isLeftBalanced && isRightBalanced && Math.abs(leftHeight - rightHeight) <= 1,
      height: Math.max(leftHeight, rightHeight) + 1,
    };
  }

  const { isBalanced } = dfs(root);
  return isBalanced;
};