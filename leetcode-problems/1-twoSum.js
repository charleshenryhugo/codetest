// 1. https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const pair = target - nums[i];
    const indexOfPair = nums.indexOf(pair);
    if (indexOfPair >= 0 && indexOfPair !== i) {
      return [i, indexOfPair];
    }
  }
};

// map {'3': 0, '2': 1; }
// 6, [3,2,4]
const twoSumUsingHashmap = function(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const pair = target - nums[i];
    if (map[pair] !== undefined && map[pair] !== i) {
      return [map[pair], i]
    }
    map[nums[i]] = i;
  }
}

const arguments = process.argv.slice(2).map(str => Number(str));

const target = arguments.slice(0, 1);
const nums = arguments.slice(1);

const result = twoSumUsingHashmap(nums, target);
console.log(result);
