// 283 https://leetcode.com/problems/move-zeroes/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// must be O(1) memory
const moveZeroes_easy = function(nums) {
  // 0 1 0 3 2
  
  // 1 2 3 0 0
  //       i
  //           j

  // 1 2 3 4 5
  //           i

  // 1 2 4 3 0
  //         i
  //           j

  let i = 0;
  while (i < nums.length) {
    if (nums[i] === 0) {
      let j = i;
      while (nums[j] === 0) {
        j++;
      } // now nums[j] is non-zero value
      if (nums[j] === undefined) {
        return;
      }
      nums[i] = nums[j];
      nums[j] = 0;
    }
    i++;
  }
};

const moveZeroes_optimal = function(nums) {
  // 1 1 1 1 1 0 0 0 0
  //                   i
  //           j

  // 1 1 1 1 0 0 0
  //               i
  //         j
  let i = 0;
  let j = 0;
  while (i < nums.length) {
    if (nums[i] !== 0) {
      if (i !== j) {
        nums[j] = nums[i];
        nums[i] = 0;
      }
      j++;
    }
    i++;
  }
}

const [_node, _file, numsInput] = process.argv;
const nums = numsInput.split(',').map(s => Number.parseInt(s));
moveZeroes_optimal(nums);
console.log(nums);