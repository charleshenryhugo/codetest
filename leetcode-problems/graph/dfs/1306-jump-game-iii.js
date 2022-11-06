// 1306 https://leetcode.com/problems/jump-game-iii/
/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
 const canReach_dfs = function(arr, start) {
  let zeroIsFound = false;
  let visited = Array(arr.length).fill(false);
  
  const dfs = function(index) {
    if (index < 0 || index >= arr.length || visited[index] || zeroIsFound) return;
    
    visited[index] = true;
    
    if (arr[index] === 0) zeroIsFound = true;
    
    dfs(index - arr[index]);
    
    dfs(index + arr[index]);
  };
  
  dfs(start);
  
  return zeroIsFound;
};

const canReach_bfs = function(arr, start) {
  let visited = [];
  const queue = [start];
  
  while (queue.length > 0) {
    const index = queue.shift();
    if (arr[index] === 0) return true;
    
    visited[index] = true;
    
    const jumpBack = index - arr[index];
    const jumpForward = index + arr[index];
    
    if (jumpBack >= 0 && jumpBack < arr.length && !visited[jumpBack]) {
      queue.push(jumpBack);
    }
    if (jumpForward >= 0 && jumpForward < arr.length && !visited[jumpForward]) {
      queue.push(jumpForward);
    }
  }
  
  return false;
}