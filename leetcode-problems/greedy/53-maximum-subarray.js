/**
 * @param {number[]} nums
 * @return {number}
 */
 const maxSubArray = function(nums) {
  let maxSum = nums[0];
  let currentSum = Math.max(nums[0], 0);
  
  for (let i = 1; i < nums.length; i++) {
    const sum = currentSum + nums[i];
    if (sum <= 0) {
      currentSum = 0;
    } else {
      currentSum = sum;
    }
    maxSum = Math.max(maxSum, sum);
  }
  
  return maxSum;
  
};