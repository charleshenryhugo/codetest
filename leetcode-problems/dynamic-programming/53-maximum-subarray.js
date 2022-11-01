/**
 * @param {number[]} nums
 * @return {number}
 */
 const maxSubArray = function(nums) {
  let maxSum = nums[0];
  const dp = [nums[0]];
  
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    maxSum = Math.max(dp[i], maxSum);
  }
  
  return maxSum;
};

// alternative recursive way:
/**
 * @param {number[]} nums
 * @return {number}
 */
 const maxSubArray_recursive = function(nums) {
  let maxSum = nums[0];
  
  const getMaxSumUntil = function(N) {
    if (N === 0) return nums[0];
    
    const maxSumUntilN = Math.max(
      nums[N],
      getMaxSumUntil(N - 1) + nums[N]
    );
    
    maxSum = Math.max(maxSum, maxSumUntilN);
    
    return maxSumUntilN;
  }
  
  getMaxSumUntil(nums.length - 1);
  
  return maxSum;
};
