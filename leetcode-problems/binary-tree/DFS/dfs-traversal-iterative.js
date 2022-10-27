// iterative way of DFS traversing

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const preOrderTraversal = function(root) {
  if (root === null) {
    return;
  }
  const nodeStack = [root];
  while (nodeStack.length > 0) {
    const { left, right, val } = nodeStack.pop();
    console.log(val);
    right !== null && nodeStack.push(right);
    left !== null && nodeStack.push(left);
  }
}

const postOrderTraversal = function(root) {
  if (root === null) {
    return;
  }

  const VisitStatus = {
    WHITE: 1,
    GREY: 2,
  }

  const nodeStack = [{ node: root, status: VisitStatus.WHITE }];
  while (nodeStack.length > 0) {
    const { node, status } = nodeStack.pop();
    const { left, right, val } = node;

    if (status === VisitStatus.WHITE) {
      nodeStack.push({ node: node, status: VisitStatus.GREY });
      right !== null && nodeStack.push({ node: right, status: VisitStatus.WHITE });
      left !== null && nodeStack.push({ node: left, status: VisitStatus.WHITE });
    }
    if (status === VisitStatus.GREY) {
      console.log(val);
    }
  }
}

const inOrderTraversal = function(root) {
  if (root === null) {
    return;
  }

  const VisitStatus = {
    WHITE: 1,
    GREY: 2,
  }

  const nodeStack = [{ node: root, status: VisitStatus.WHITE }];
  while (nodeStack.length > 0) {
    const { node, status } = nodeStack.pop();
    const { left, right, val } = node;

    if (status === VisitStatus.WHITE) {
      right !== null && nodeStack.push({ node: right, status: VisitStatus.WHITE });
      nodeStack.push({ node: node, status: VisitStatus.GREY });
      left !== null && nodeStack.push({ node: left, status: VisitStatus.WHITE });
    }
    if (status === VisitStatus.GREY) {
      console.log(val);
    }
  }
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
// const root = createBinaryTree([3,5,1,6,2,0,8,null,null,7,4]);

console.log('preOrder:');
preOrderTraversal(root);

console.log('postOrder:');
postOrderTraversal(root);

console.log('inOrder:');
inOrderTraversal(root);
