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
 * @param {number} key
 * @return {TreeNode}
 */
const deleteNode_1 = function(root, key) {
  const deleteMaxValueOfLeftTree = function(node, parentNode, role) {
    if (node.right === null) {
      parentNode[role] = node.left;
      return node.val;
    }
    
    return deleteMaxValueOfLeftTree(node.right, node, 'right');
  }
  
  const deleteMinValueOfRightTree = function(node, parentNode, role) {
    if (node.left === null) {
      parentNode[role] = node.right;
      return node.val;
    }
    
    return deleteMinValueOfRightTree(node.left, node, 'left');
  }
  
  const rootParent = new TreeNode(Number.MAX_SAFE_INTEGER, root);
  let foundPair = null;
  let deletionDone = false;

  const search = function(node) {
    if (node === null) return;
    if (deletionDone === true) return;
    if (foundPair !== null) return;
    if (node.left === null && node.right === null) return;

    if (key < node.val) {
      if (key === node.left?.val) {
        foundPair = { node: node.left, parentNode: node, role: 'left' };
      } else {
        search(node.left);
      }
    }

    if (key > node.val) {
      if (key === node.right?.val) {
        foundPair = { node: node.right, parentNode: node, role: 'right' };
      } else {
        search(node.right);
      }
    }

    if (foundPair !== null && deletionDone === false) {
      const { node: foundNode, parentNode: foundParentNode, role } = foundPair;
      if (foundNode.left === null && foundNode.right === null) {
        // if the foundNode is a leaf node
        foundParentNode[role] = null;
      } else if (foundNode.left !== null && foundNode.right !== null) {
        // if the foundNode has both left and right child, replace the foundNode with the maxValue of it's left tree
        const maxValueOfLeftTree = deleteMaxValueOfLeftTree(foundNode.left, foundNode, 'left');
        foundNode.val = maxValueOfLeftTree;
      } else if (foundNode.left !== null) {
        // if the foundNode only has left child
        foundParentNode[role] = foundNode.left;
      } else {
        // if the foundNode only has right child
        foundParentNode[role] = foundNode.right;
      }
      deletionDone = true;
    }
  }

  search(rootParent);
  //console.log(foundPair);
  return rootParent.left;
};

/*--------------------------------------------------------------*/
const findAndDeleteMin = function(node, parentNode, role) {
  if (node.left === null) {
    parentNode[role] = node.right;
    return node.val;
  }
  
  return findAndDeleteMin(node.left, node, 'left');
}

// less code, but maybe not more efficient than deleteNode_1
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
const deleteNode = function(root, key) {
  if (root === null) return null;
  if (key < root.val) root.left = deleteNode(root.left, key);
  if (key > root.val) root.right = deleteNode(root.right, key);

  if (key === root.val) {
    if (root.left === null && root.right === null) {
      return null;
    }
    if (root.left === null) { // has only right child
      return root.right;
    }
    if (root.right === null) { // has only left child
      return root.left;
    }
    // has both left and right child
    root.val = findAndDeleteMin(root.right, root, 'right');
  }

  return root;
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

const root = createBinaryTree([5,3,6,2,4,null,7]);
const newRoot = deleteNode(root, 3);
// console.log(findMin(root));
console.log(newRoot);
