// 278 https://leetcode.com/problems/first-bad-version/
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    // o o x x x x x x x x
    // 0 1 2 3 4 5 6 7 8 9, 2
    //   i
    //     j
    //   m

    // 1
    // i
    // j

    let i = 0;
    let j = n;
    let mid = 0;

    while (i + 1 < j) {
      mid = Number.parseInt((i + j) / 2);
      if (isBadVersion(mid)) {
        j = mid;
      } else {
        i = mid;
      }
    }

    return j;
  };
};

const [_p1, _p2, nInput, badInput] = process.argv;
const [n, bad] = [Number.parseInt(nInput), Number.parseInt(badInput)];

const isBadVersion = k => k >= bad;
console.log(solution(isBadVersion)(n));