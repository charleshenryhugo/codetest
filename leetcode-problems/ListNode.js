const ListNode = function(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

ListNode.prototype.toArray = function() {
  const nums = [];
  let currentNode = this;
  while (currentNode) {
    nums.push(currentNode.val);
    currentNode = currentNode.next;
  }
  return nums;
}

ListNode.fromArray = function(nums) {
  let listHeader = null;
  let currentNode = null;
  for (const num of nums) {
    if (listHeader === null) {
      listHeader = new ListNode(num);
      currentNode = listHeader;
    } else {
      currentNode.next = new ListNode(num);
      currentNode = currentNode.next;
    }
  }
  return listHeader;
}

export default ListNode;
