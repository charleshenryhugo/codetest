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
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = function(root) {

  const dfs = function(node) {
    if (node === null) return null;

    const leftEnd = dfs(node.left);
    const rightEnd = dfs(node.right);

    if (leftEnd === null && rightEnd === null){
      return node;
    }
    if (leftEnd !== null && rightEnd === null) {
      node.right = node.left;
      node.left = null;
      return leftEnd;
    }
    if (leftEnd === null && rightEnd !== null) {
      return rightEnd;
    }
    
    // leftEnd and rightEnd both not null
    leftEnd.right = node.right;
    node.right = node.left;
    node.left = null;
    return rightEnd;
  }

  dfs(root);
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

const root = createBinaryTree([1,2,5,3,4,null,6]);
flatten(root);

console.log(root.right.right.right);