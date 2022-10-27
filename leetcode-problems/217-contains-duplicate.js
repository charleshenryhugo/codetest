// 217 https://leetcode.com/problems/contains-duplicate/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 const containsDuplicate = function(nums) {
  const appeared = {};
  
  for (const n of nums) {
    if (appeared[n]) return true;
    
    appeared[n] = true;
  }
  
  return false;
};
