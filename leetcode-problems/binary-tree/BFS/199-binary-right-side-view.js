// 199 https://leetcode.com/problems/binary-tree-right-side-view/
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
// idea: collect the last value of each level
const rightSideView = function(root) {
  const result = [];
  if (root === null) {
    return result;
  }

  const nodeQueue = [root];

  while (nodeQueue.length > 0) {
    const currentLevelSize = nodeQueue.length;
    result.push(nodeQueue[0].val);

    for (let i = 0; i < currentLevelSize; i++) {
      const shiftedNode = nodeQueue.shift();

      const { left, right } = shiftedNode;
      
      if (right !== null) {
        nodeQueue.push(right);
      }
      if (left !== null) {
        nodeQueue.push(left);
      }
    }
  }

  return result;
};

const node15 = new TreeNode(15);
const node7 = new TreeNode(7);
const node20 = new TreeNode(20, node15, node7);
const node9 = new TreeNode(9);
const root = new TreeNode(3, node9, node20);

const result = rightSideView(root);
console.log(result);
