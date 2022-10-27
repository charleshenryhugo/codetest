// https://leetcode.com/problems/search-insert-position/

/**
 * find the first element in array which meets the condition
 * return the found element's index
 * if not found, return -1
 * use binary search
 * 
 * array must have been sorted based on the condition, for example:
 * 
 *  x x x x x o o o o o
 * 
 * o: condition true;
 * x: condition false
 * @param {array} array 
 * @param {function} condition 
 * @return {number}
 */
const indexOf = function(array, condition) {
  // x x x o o o o o o o
  // 0 1 2 3 4 5 6 7 8 9
  //     i
  //       j

  // x o o o o o o o o o
  // 0 1 2 3 4 5 6 7 8 9
  // i
  //   j
  if (condition(array[0])) {
    return 0;
  }

  if (!condition(array[array.length - 1])) {
    return -1;
  }
  

  let i = 0;
  let j = array.length - 1;
  let mid = 0;

  while (i + 1 < j) {
    mid = Number.parseInt((i + j) / 2);
    if (condition(array[mid])) {
      j = mid;
    } else {
      i = mid;
    }
  }

  return j;
}


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
    // 1 3 4 6, 10
    //         i
    //       j
    //       m

    // 1 3 5 6, 2
    // i
    //j
    // m

    // 1 3 4 6 7, 4
    //   i
    //     j
    //   m

    // 1 3 5 6, 7
    //     i
    //       j
    //     m

    // 3 5 6 8 9, 2
    // i
    //   j
    // m

    const condition = k => k >= target;

    const index = indexOf(nums, condition);

    if (index === -1) {
      return nums.length;
    }

    return index;
};

const [_p1, _p2, numsInput, targetInput] = process.argv;
const nums = numsInput.split(',').map(s => Number.parseInt(s));
const target = Number.parseInt(targetInput);

console.log(searchInsert(nums, target));