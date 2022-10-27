// 101. https://leetcode.com/problems/symmetric-tree/
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
 * @return {boolean}
 */
// root is not null
const isSymmetric_iterative1 = function(root) {
  const nodeQueue = [root];

  while (nodeQueue.length > 0) {
    const currentLevelSize = nodeQueue.length;
    const nextLevelValues = [];

    for (let i = 0, j = 0; i < currentLevelSize; i++) {
      const { left, right } = nodeQueue.shift();

      if (left !== null) {
        nodeQueue.push(left);
      }

      const leftChildValue = left === null ? -10000 : left.val;
      if (j >= currentLevelSize) {
        if (nextLevelValues[nextLevelValues.length - 1] === leftChildValue) {
          nextLevelValues.pop();
        } else {
          return false;
        }
      } else {
        nextLevelValues.push(leftChildValue);
      }
      j++;

      if (right !== null) {
        nodeQueue.push(right);
      }

      const rightChildValue = right === null ? -10000 : right.val;
      if (j >= currentLevelSize) {
        if (nextLevelValues[nextLevelValues.length - 1] === rightChildValue) {
          nextLevelValues.pop();
        } else {
          return false;
        }
      } else {
        nextLevelValues.push(rightChildValue);
      }
      j++;
    }

    console.log(nextLevelValues);
  }

  return true;
};

const isSymmetric_iterative2 = function(root) {
  if (root === null || (root.left === null && root.right === null)) return true;
  
  const nodeQueue = [root.left, root.right];
  
  while (nodeQueue.length > 0) {
    const node1 = nodeQueue.shift();
    const node2 = nodeQueue.shift();
    
    if (node1 === null && node2 === null) continue;
    if (node1 === null && node2 !== null) return false;
    if (node1 !== null && node2 === null) return false;
    if (node1.val !== node2.val) return false;
    
    nodeQueue.push(node1.left, node2.right);
    nodeQueue.push(node1.right, node2.left);
  }
  
  return true;
}

const isSymmetric_recursive = function(root) {
  if (root === null) {
    return true;
  }

  const treeEqual = (root1, root2) => {
    if (root1 === null && root2 === null) {
      return true;
    }
    if (root1 === null || root2 === null) {
      return false;
    }
    return root1.val === root2.val && treeEqual(root1.left, root2.right) && treeEqual(root1.right, root2.left);
  }

  return treeEqual(root.left, root.right);
}

/**
   1
  2  2
 3  3
 */
const root = new TreeNode(1);
const node1 = new TreeNode(2);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(3);

root.left = node1;
root.right = node2;
node1.left = node3;
node2.left = node4;


// const result_recursive = isSymmetric_recursive(root);
const result_iterative = isSymmetric(root)
console.log(result_iterative);
