// 69. https://leetcode.com/problems/sqrtx/;
/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
  if (x < 2) {
    return x;
  }

  // 100000
  // i j
  let i = 0;
  let j = x;
  let mid = 0;

  // 0 1 2 3 4 5 6 7 8
  //     i      
  //       j
  //     m

  // 0 1 2 3 4 5 6 7 8 9 10
  //       i
  //         j
  //         m

  // 0 1 2
  //   i
  // .   j
  //   m
  while (i + 1 < j) {
    mid = Number.parseInt((i + j) / 2);
    const midmid = mid * mid;
    if (midmid > x) {
      j = mid;
    } else if (midmid < x) {
      i = mid;
    } else {
      return mid;
    }
  }

  return i;
};

const [_p1, _p2, xInput] = process.argv;
const x = Number.parseInt(xInput);
console.log(mySqrt(x));