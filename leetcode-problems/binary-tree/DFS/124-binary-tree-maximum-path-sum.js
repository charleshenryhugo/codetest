// 124 https://leetcode.com/problems/binary-tree-maximum-path-sum/;
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
const maxPathSum = function(root) {
  let globalMaxSum = root.val;

  const getMaxPathSum = function(treeNode) {
    if (treeNode === null) {
      return 0;
    }

    const leftMaxSum = getMaxPathSum(treeNode.left);
    const rightMaxSum = getMaxPathSum(treeNode.right); 

    globalMaxSum = Math.max(
      globalMaxSum,
      treeNode.val,
      treeNode.val + leftMaxSum,
      treeNode.val + rightMaxSum,
      treeNode.val + leftMaxSum + rightMaxSum, 
    );

    return treeNode.val + Math.max(
      0,
      leftMaxSum,
      rightMaxSum,
    );
  }

  getMaxPathSum(root);

  return globalMaxSum;
};

/**
 * build a binary tree from array
 * @param {(number|null)[]} values 
 * @return {TreeNode | null}
 */
const createBinaryTree = function(values) {
  if (values.length === 0) {
    return null;
  }

  const treeNodes = Array(values.length).fill(null);
  for (let i = values.length - 1; i >= 0; i--) {
    const treeNode = values[i] === null ? null : new TreeNode(values[i]);

    if (2 * i + 1 < values.length && treeNodes[2 * i + 1] !== null) {
      treeNode.left = treeNodes[2 * i + 1];
    }
    if (2 * i + 2 < values.length && treeNodes[2 * i + 2] !== null) {
      treeNode.right = treeNodes[2 * i + 2];
    }
    treeNodes[i] = treeNode;
  }

  return treeNodes[0];
}

const root = createBinaryTree([-10,9,20,null,null,15,7]);

const root2 = createBinaryTree([5,4,8,11,null,13,4,7,2,null,null,null,1]);

const result = maxPathSum(root2);
console.log(result);
