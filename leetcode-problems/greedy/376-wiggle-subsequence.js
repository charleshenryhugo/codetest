/**
 * @param {number[]} nums
 * @return {number}
 */
const wiggleMaxLength = function(nums) {
  let peaks = 0;
  let prevDiff = 0;
  let currDiff = 0;
  
  for (let i = 0; i < nums.length - 1; i++) {
    currDiff = nums[i + 1] - nums[i];
    if (prevDiff >= 0 && currDiff < 0 || prevDiff <= 0 && currDiff > 0) {
      peaks++;
      prevDiff = currDiff;
    }
  }
  
  return peaks + 1;
};
