// 374 https://leetcode.com/problems/guess-number-higher-or-lower/
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

let pickedNum = 6;
const guess = function(num) {
  if (num > pickedNum) return -1;
  if (num < pickedNum) return 1;
  return 0;
}

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = function(n) {
  // 0 1 2 3 4 5 6 7 8 9
  //               i
  //                   j

  let i = 0;
  let j = n;
  let mid = 0;

  while (i + 1 < j) {
    mid = Number.parseInt((i + j) / 2);
    if (guess(mid) === 0) {
      return mid;
    }
    if (guess(mid) === -1) {
      j = mid;
    } else {
      i = mid;
    }
  }
  return j;
};

const [_p1, _p2, nInput, pickedNumInput] = process.argv;
const n = Number.parseInt(nInput);
pickedNum = Number.parseInt(pickedNumInput);

console.log(guessNumber(n));