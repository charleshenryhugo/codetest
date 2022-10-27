// 701 https://leetcode.com/problems/insert-into-a-binary-search-tree/ 
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
 * @param {number} val
 * @return {TreeNode}
 */
 const insertIntoBST = function(root, val) {
  if (root === null) return new TreeNode(val);
  
  if (val < root.val) {
    if (root.left === null) {
      root.left = new TreeNode(val);
    } else {
      root.left = insertIntoBST(root.left, val);
    }
  }
  
  if (val > root.val) {
    if (root.right === null) {
      root.right = new TreeNode(val);
    } else {
      root.right = insertIntoBST(root.right, val);
    }
  }
  
  return root;
};

const insertIntoBST_iterative = function(root, val) {
  if (root === null) return new TreeNode(val);
  
  let currentNode = root;
  
  while (currentNode !== null) {
    if (val < currentNode.val) {
      if (currentNode.left === null) {
        currentNode.left = new TreeNode(val);
        break;
      } else {
        currentNode = currentNode.left;
        continue;
      }
    }
    
    if (val > currentNode.val) {
      if (currentNode.right === null) {
        currentNode.right = new TreeNode(val);
        break;
      } else {
        currentNode = currentNode.right;
        continue;
      }
    }
  }
  
  return root;
};