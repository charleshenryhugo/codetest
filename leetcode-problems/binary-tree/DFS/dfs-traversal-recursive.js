// recursive way of doing DFS of binary-tree

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

const preOrderTraversal = function(root) {
  if (root === null) {
    return;
  }
  console.log(root.val);
  preOrderTraversal(root.left);
  preOrderTraversal(root.right);
}

const postOrderTraversal = function(root) {
  if (root === null) {
    return;
  }
  postOrderTraversal(root.left);
  postOrderTraversal(root.right);
  console.log(root.val);
}

const inOrderTraversal = function(root) {
  if (root === null) {
    return;
  }
  inOrderTraversal(root.left);
  console.log(root.val);
  inOrderTraversal(root.right);
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

const root = createBinaryTree([1, 2, 4, null, 3, null, 5, null, null, null, null, null, null, 6, null]);

console.log('preOrder:');
preOrderTraversal(root);

console.log('postOrder:');
postOrderTraversal(root);

console.log('inOrder:');
inOrderTraversal(root);
