// 637 https://leetcode.com/problems/average-of-levels-in-binary-tree/
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
 * @return {number[]}
 */
const averageOfLevels = function(root) {
  const result = [];
  if (root === null) {
    return result;
  }

  const queue = [root];
  while (queue.length > 0) {
    const currentLevelSize = queue.length;
    let currentLevelSum  = 0;
    for (let i = 0; i < currentLevelSize; i++){
      const shiftedNode = queue.shift();
      currentLevelSum += shiftedNode.val;
      if (shiftedNode.left !== null) {
        queue.push(shiftedNode.left);
      }
      if (shiftedNode.right !== null) {
        queue.push(shiftedNode.right);
      }
    }
    result.push(currentLevelSum / currentLevelSize);
  }

  return result;
};

const node15 = new TreeNode(15);
const node7 = new TreeNode(7);
const node20 = new TreeNode(20, node15, node7);
const node9 = new TreeNode(9);
const root = new TreeNode(3, node9, node20);

const result = averageOfLevels(root);
console.log(result);