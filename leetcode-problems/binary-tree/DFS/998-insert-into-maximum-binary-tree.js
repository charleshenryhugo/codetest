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
 const insertIntoMaxTree = function(root, val) {
  const targetNode = new TreeNode(val);
  const rootParent = new TreeNode(Number.MAX_SAFE_INTEGER, null, root);
  
  let parentNode  = rootParent;
  let currentNode = root;
  
  while (true) {
    if (currentNode === null) {
      parentNode.right = targetNode;
      break;
    }
    
    if (val > currentNode.val) {
      targetNode.left = currentNode;
      parentNode.right = targetNode;
      break;
    }
    
    parentNode = currentNode;
    currentNode = currentNode.right;
  }
  
  return rootParent.right;
};

// recursive way
const insertIntoMaxTree_recursive = function(root, val) {
  if (root === null) return new TreeNode(val);
    
  if (val > root.val) return new TreeNode(val, root);

  root.right = insertIntoMaxTree(root.right, val);
  
  return root;
};