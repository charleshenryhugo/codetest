// 27 https://leetcode.com/problems/remove-element/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// must be O(1) memory
const removeElement = function(nums, val) {
  // 0 1 2 2 3 0 4 2

  // 0 1 3 0 4
  //           i
  //             j
  let i = 0;
  while (i < nums.length) {
    if (nums[i] !== val) {
      i++;
    } else {
      let j = i;
      while (nums[j] === val) {
        j++;
      }
      nums.splice(i, j - i);
    }
  }

  return nums.length;
};

const [_node, _file, numsInput, valInput] = process.argv;
const nums = numsInput.split(',').map(s => Number.parseInt(s));
const val = Number.parseInt(valInput);
removeElement(nums, val);
console.log(nums);