// 342 https://leetcode.com/problems/power-of-four/
/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = function(n) {
  let current = 1;

  while (current < n) {
    current *= 4
  }

  if (current === n) return true;

  return false;
  
};

const [_p1, _p2, n] = process.argv;
console.log(isPowerOfFour(Number(n)));
