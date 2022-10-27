// 219 https://leetcode.com/problems/contains-duplicate-ii/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 const containsNearbyDuplicate = function(nums, k) {
  const lastAppearedIndex = {};
  
  for (const [i, num] of nums.entries()) {
    if (lastAppearedIndex[num] === undefined) {
      lastAppearedIndex[num] = i;
      continue;
    }
    
    if (i - lastAppearedIndex[num] <= k) {
      return true;
    }
    
    lastAppearedIndex[num] = i;
  }
  
  return false;
};