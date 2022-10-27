// 437 https://leetcode.com/problems/path-sum-iii/
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
 * @param {number} targetSum
 * @return {number}
 */
 const pathSum = function(root, targetSum) {
  let result = 0;
  if (root === null) {
    return result;
  }
  
  const path = [];
  
  const dfs = function(node) {
    const { left, right, val } = node;
    
    let currentSum = val;
    if (currentSum === targetSum) {
      console.log([val]);
      result++;
    }
    for (let i = path.length - 1; i >= 0; i--) {
      currentSum += path[i];
      if (currentSum === targetSum) {
        console.log([...path.slice(i), val]);
        result++;
      }
    }
    
    path.push(val);

    if (left !== null) {
      dfs(left);
    }
    if (right !== null) {
      dfs(right);
    }
    
    path.pop();
  };
  
  dfs(root);
  return result;
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

const root = createBinaryTree([10,5,-3,3,2,null,11,3,-2,null,1]);
const result = pathSum(root, 6);
console.log(result);
