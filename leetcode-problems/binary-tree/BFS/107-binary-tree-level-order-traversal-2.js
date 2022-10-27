// 107 https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
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
 * @return {number[][]}
 */
/*
   3
  9 20
   15 7
*/
const levelOrderBottom = function(root) {
  const result = [];
  if (root === null) {
    return result;
  }

  const queue = [root];
  while (queue.length > 0) {
    const currentLevelSize = queue.length;
    const currentLevelVals = [];
    for (let i = 0; i < currentLevelSize; i++) {
      const shiftedNode = queue.shift();
      currentLevelVals.push(shiftedNode.val);
      if (shiftedNode.left !== null) {
        queue.push(shiftedNode.left);
      }
      if (shiftedNode.right !== null) {
        queue.push(shiftedNode.right);
      }
    }
    result.unshift(currentLevelVals);
  }

  return result;
};

const node15 = new TreeNode(15);
const node7 = new TreeNode(7);
const node20 = new TreeNode(20, node15, node7);
const node9 = new TreeNode(9);
const root = new TreeNode(3, node9, node20);

const result = levelOrderBottom(root);
console.log(result);