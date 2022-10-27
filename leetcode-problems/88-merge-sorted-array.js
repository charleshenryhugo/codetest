// 88. https://leetcode.com/problems/merge-sorted-array/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
  // nums1 = [1,2,3,7,0,0,0], m = 4, nums2 = [2,5,6], n = 3
  // 1 2 2 3 5 6 7
  //             i
  // 2 5 6
  //       j

  // 1 2 2 3 5 6 7 9
  //                 i
  // 1 2 3 7 9
  //           j

  // 1 2 2 3 4 5 6 7 0 0
  //                 i
  // 2 4 5 6 7 8
  //         j

  // 1 2 2 3 5 6 7
  //             i
  // 2 5 6
  //       j

  // 1 2 3 5 5 6 9 9
  //               i
  // 5 9 9
  //      j

  let i = 0;
  let j = 0;
  while (j < n && i < m + j) {
    if (nums1[i] <= nums2[j]) {
      i++;
    } else {
      nums1.splice(i, 0, nums2[j]);
      nums1.splice(-1);
      i++;
      j++;
    }
  }
  while (j < n) {
    nums1[i] = nums2[j];
    i++;
    j++;
  }
};

const [_p1, _p2, nums1Input, mInput, nums2Input, nInput] = process.argv;
// node xxx.js 1,2,3,7,0,0,0 4 2,5,6 3
const [ nums1, nums2 ] = [nums1Input, nums2Input].map(input => {
  return input.split(',').map(s => Number.parseInt(s))
})

const [m, n] = [mInput, nInput].map(s => Number.parseInt(s));
merge(nums1, m, nums2, n);
console.log(nums1);