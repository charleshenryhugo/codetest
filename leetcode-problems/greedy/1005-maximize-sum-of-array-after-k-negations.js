/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const largestSumAfterKNegations = function(nums, k) {
  nums.sort((a, b) => a - b);
  let sum = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 && k > 0) {
      nums[i] = -nums[i];
      k--;
    }
    sum += nums[i];
  }
  
  if (k === 0 || k % 2 === 0) return sum;

  return sum - 2 * Math.min(...nums);
};