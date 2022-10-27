// 66 https://leetcode.com/problems/plus-one/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
  // 1 2 3 4 9
  // 
  let i = digits.length - 1;
  let addition = digits[i] + 1 >= 10 ? 1 : 0
  digits[i] = (digits[i] + 1) % 10;
  i--;

  while (i >= 0) {
    const res = digits[i] + addition;
    digits[i] = res % 10;
    addition = res >= 10 ? 1 : 0
    i--;
  }

  if (addition === 1) {
    return [1, ...digits];
  }
  return [...digits];
};

const [_p1, _p2, digitsInput] = process.argv;
const digits = digitsInput.split(',').map(s => Number.parseInt(s));
console.log(plusOne(digits));
