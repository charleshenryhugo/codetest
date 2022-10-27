// 34. https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function(nums, target) {
  // if (nums.length === 2) {
  //   // 1 1, 1
  //   if (nums[0] === target) {
  //     if (nums[1] == target) {
  //       return [0, 1];
  //     } else {
  //       return [0, 0];
  //     }
  //   } else {
  //     if (nums[1] == target) {
  //       return [1, 1];
  //     } else {
  //       return [-1, -1];
  //     }
  //   }
  // }

  let left = -1;
  let right = -1;
  
  let i = 0;
  let j = nums.length - 1;
  let mid = 0;

  // first element that is >= 6
  // first element that is >= target
  // 1 2 2 3 4 5 6 8 9
  //           i
  //             j

  // 1 2 2 3 4 5 6 8 9, 12
  //               i
  //                 j

  // 1 2 3 4 5 6, 1
  // i
  //   j

  while (i + 1 < j) {
    mid = Number.parseInt((i + j) / 2);
    if (nums[mid] >= target) {
      j = mid;
    } else {
      i = mid;
    }
  }
  if (target !== nums[j] && target !== nums[i]) {
    return [-1, -1];
  }
  if (target === nums[i]) {
    left = i;
  } else {
    left = j;
  }
  
  
  i = 0;
  j = nums.length - 1;
  mid = 0;
  
  // first element that is >= 6 + 1
  // 1 2 2 3 4 5 6 8 9
  //             i
  //               j

  // first element that is >= target + 1
  // 1 2 2 4 4 5 6 8 9, 2
  //     i
  //       j

  // 1 1 2 4 5 6, 1
  //   i
  //     j

  // 1 1
  // i
  //   j
  while (i + 1 < j) {
    mid = Number.parseInt((i + j) / 2);
    if (nums[mid] >= target + 1) {
      j = mid;
    } else {
      i = mid;
    }
  }
  if (nums[i] === nums[j]) {
    right = j;
  } else if (target === nums[i]) {
    right = i;
  } else {
    right = j;
  }

  return [left, right];
};


const [_p1, _p2, numsInput, targetInput] = process.argv;
const nums = numsInput.split(',').map(s => Number.parseInt(s));
const target = Number.parseInt(targetInput);

console.log(searchRange(nums, target));