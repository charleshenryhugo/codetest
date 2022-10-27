// 4 https://leetcode.com/problems/median-of-two-sorted-arrays/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// (m+n)log(m+n)
const findMedianSortedArrays_1 = function(nums1, nums2) {
  // 1 2 3
  // 2 4 5
  const nums = [...nums1, ...nums2].sort((a, b) => a - b);

  const lastIndex = nums.length - 1;

  return (nums[Math.floor(lastIndex / 2)] + nums[Math.ceil(lastIndex / 2)]) / 2
};

// (m+n)
const findMedianSortedArrays_2 = function(nums1, nums2) {
  // 1 2 3 4 8 9
  // 1 2 4 5 6

  // 1 1 2 2 3 [4] 4 5 6 8 9
  // 1 1 2 2 3 [4 4] 5 6 8 9 9

  // 1 1 2 2 3 4 4

  const lastIndex = nums1.length + nums2.length - 1;
  const medianIndexLower = Math.floor(lastIndex / 2);
  const medianIndexUpper = Math.ceil(lastIndex / 2);

  const nums = [];
  let i = 0;
  let j = 0;
  while (i < nums1.length && j < nums2.length && nums.length - 1 < medianIndexUpper) {
    if (nums1[i] < nums2[j]) {
      nums.push(nums1[i++]);
    } else {
      nums.push(nums2[j++]);
    }
  }

  while (nums.length - 1 < medianIndexUpper && i < nums1.length) {
    nums.push(nums1[i++]);
  }
  while (nums.length - 1 < medianIndexUpper && j < nums2.length) {
    nums.push(nums2[j++]);
  }

  return (nums[medianIndexLower] + nums[medianIndexUpper]) / 2;
}

// binary search
// log(m+n)
const findMedianSortedArrays_3 = function(nums1, nums2) {
  // 1 3 5 6 7 8 9 11    1 4 6 8 12 14 15 17
  // i                                     j

  const createExpandArray = (array) => {
    const expand = (x) => {
      if (x === 0) return Number.MIN_SAFE_INTEGER;
      if (x === array.length + 1) return Number.MAX_SAFE_INTEGER;
      return array[x - 1];
    };
    expand.len = array.length + 2;
    return expand;
  };

  const largerArray = nums1.length > nums2.length ? nums1 : nums2;
  const smallerArray = nums1.length > nums2.length ? nums2: nums1;
  const M = createExpandArray(smallerArray);
  const N = createExpandArray(largerArray);

  const totalLength = M.len + N.len;
  const finalLeftLength = Math.floor(totalLength / 2);

  let i = 0;
  let j = M.len - 1;
  let midm = 0;
  let midn = 0;
 
  while (1) {
    midm = Math.floor((i + j) / 2);
    midn = finalLeftLength - (midm + 1) - 1;
    // console.log(midm, midn);
    // console.log(M(midm), N(midn));

    if (M(midm) <= N(midn + 1) && N(midn) <= M(midm + 1)) {
      break;
    }

    if (N(midn) > M(midm + 1)) {
      i = midm + 1;
      continue;
    }
    if (M(midm) > N(midn + 1)) {
      j = midm - 1;
      continue;
    }
  }

  if (totalLength % 2 === 1) {
    return Math.min(M(midm + 1), N(midn + 1));
  }

  return (Math.max(M(midm), N(midn)) + Math.min(M(midm + 1), N(midn + 1))) / 2;
}

// const [_p1, _p2, nums1Input, nums2Input] = process.argv;
// const [nums1, nums2] = [nums1Input, nums2Input].map(input => input.split(',').map(s => Number.parseInt(s)));

// console.log(findMedianSortedArrays_3(nums1, nums2));

const bigArray1 = Array.from({ length: 9_000_000 }, () => 100 * Math.random());
const bigArray2 = Array.from({ length: 9_000_000 }, () => 100 * Math.random());

// const bigArray1 = [1,2,3,4,5,6,7,8,9,10];
// const bigArray2 = [1,2,3,4,5,6,7,8,9,10];


console.time('timer3');
console.log(findMedianSortedArrays_3(bigArray1, bigArray2));
console.timeEnd('timer3');
// timer3: 4.192ms

console.time('timer2');
console.log(findMedianSortedArrays_2(bigArray1, bigArray2));
console.timeEnd('timer2');
// timer2: 169.419ms

console.time('timer1');
console.log(findMedianSortedArrays_1(bigArray1, bigArray2));
console.timeEnd('timer1');
// timer1: 17802ms