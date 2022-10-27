// 7 https://leetcode.com/problems/reverse-integer/
/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  const minimum = -1 * 2 ** 31;
  const maximum = -1 + 2 ** 31;
  // - 1 2 3 4 5 6 8 9 9 9 9 9 9
  //   c
  // 999999654321

  let num = 0;
  let strX = String(x);
  let sign = strX[0] === '-' ? -1 : 1;

  for (let i = strX.length - 1; i >= 0; i--) {
    if (strX[i] !== '-') {
      num = num * 10 + Number(strX[i]);
      if (sign * num > maximum || sign * num < minimum) {
        return 0;
      }
    }
  }

  return sign * num;
};

const [_p1, _p2, xInput] = process.argv;
const x = Number.parseInt(xInput);
console.log(reverse(x));