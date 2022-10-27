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
const findBottomLeftValue = function(root) {
  let bottomLeftMostValue = null;
  // BFS
  // root is guaranteed not to be null
  const queue = [root];
  
  while (queue.length > 0) {
    const currentLevelSize = queue.length;
    let currentLevelLeftMostVal = null;
    for (let i = 0; i < currentLevelSize; i++) {
      const { left, right, val } = queue.shift();
      currentLevelLeftMostVal ??= val;
      if (left !== null) queue.push(left);
      if (right !== null) queue.push(right);
    }
    bottomLeftMostValue = currentLevelLeftMostVal;
  }
  
  return bottomLeftMostValue;
};