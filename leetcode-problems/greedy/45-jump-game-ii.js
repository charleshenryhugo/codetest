// 45. https://leetcode.com/problems/jump-game-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function(nums) {
  let jumpTimes = 0;
  let maxJumpRange = 0;
  let i = 0;
  
  while (maxJumpRange < nums.length - 1) {
    const currentRange = maxJumpRange;
    for (; i <= currentRange; i++) {
      if (i + nums[i] > maxJumpRange) {
        maxJumpRange = i + nums[i];
      }
    }
    jumpTimes++; 
  }
  
  return jumpTimes;
};
