// 26 https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// must be O(1) extra memory
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  // 0 0 1 1 1 2 2 3 3 4

  // 0 1 2 3 4
  //         i
  //           j

  let i = 0;
  let j = 0;

  while (nums[j] !== undefined) {
    if (j === i) {
      j++;
      continue;
    }
    if (nums[i] === nums[j]) {
      nums.splice(j, 1);
      continue;
    } else {
      i++;
      continue;
    }
  }

  return nums.length;
};

const [_p1, _p2, numsInput] = process.argv;
const nums = numsInput.split(',').map(s => Number.parseInt(s));
// console.log(nums);
removeDuplicates(nums);
console.log(nums);