// 55 https://leetcode.com/problems/jump-game/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// calculate from the last index, gradually reduce the target index
const canJump = function(nums) {
  let targetPos = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= targetPos) {
      targetPos = i;
    }
  }

  if (targetPos > 0) return false;

  return true;
};

// calculate from the first index, gradually increase the possible jump cover range
const canJump_2 = function(nums) {
  let maxJumpRange = 0; // maximum possible jump cover range
  let i = 0;

  while (i <= maxJumpRange) {
    maxJumpRange = Math.max(maxJumpRange, i + nums[i]);

    if (maxJumpRange >= nums.length - 1) return true;

    i++;
  }

  return false;
}
