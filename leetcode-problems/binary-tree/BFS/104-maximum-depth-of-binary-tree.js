// 104 https://leetcode.com/problems/maximum-depth-of-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function(root) {
  let depth = 0;

  if (root === null) {
    return depth;
  }

  const nodeQueue = [root];
  
  while (nodeQueue.length > 0) {
    const currentLevelSize = nodeQueue.length;
    for (let i = 0; i < currentLevelSize; i++) {
      const shiftedNode = nodeQueue.shift();
      const { left, right } = shiftedNode;
      if (left !== null) {
        nodeQueue.push(left);
      }
      if (right !== null) {
        nodeQueue.push(right)
      }
    }

    depth++;
  }

  return depth;
};

const node15 = new TreeNode(15);
const node7 = new TreeNode(7);
const node20 = new TreeNode(20, node15, node7);
const node9 = new TreeNode(9);
const root = new TreeNode(3, node9, node20);

const result = maxDepth(root);
console.log(result);
