// 112 https://leetcode.com/problems/path-sum/
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
 * @return {boolean}
 */
const hasPathSum_recursive = function(root, targetSum) {
  let pathIsFound = false;
  
  const dfs = function(node, remainingSum) {
    if (node === null) {
      return;
    }

    if (pathIsFound === true) {
      return;
    }

    const { left, right, val } = node;
    if (left === null && right === null) { // if is leaf node
      if (val === remainingSum) { // if equal to the remaining sum
        pathIsFound = true;
        return;
      }
      return;
    }
    
    dfs(left, remainingSum - val);
    dfs(right, remainingSum - val);
  };
  
  dfs(root, targetSum);
  
  return pathIsFound;
};

const hasPathSum = function(root, targetSum) {
  if (root === null) {
    return false;
  }
  const nodeStack = [{ node: root, remainingSum: targetSum }];

  while(nodeStack.length > 0) {
    const { node, remainingSum } = nodeStack.pop();
    const { left, right, val } = node;

    if (left === null && right === null) {
      if (val === remainingSum) {
        return true;
      }
      continue;
    }

    right !== null && nodeStack.push({ node: right, remainingSum: remainingSum - val });
    left !== null && nodeStack.push({ node: left, remainingSum: remainingSum - val });
  }

  return false;
}

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

const root = createBinaryTree([5,4,8,11,null,13,4,7,2,null,null,null,1]);
const result = hasPathSum(root, 22);

console.log(result)