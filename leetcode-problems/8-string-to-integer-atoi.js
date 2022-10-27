// 8 https://leetcode.com/problems/string-to-integer-atoi/
/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function(s) {
  const minimum = -1 * 2 ** 31; // 10 digits
  const maximum = -1 + 2 ** 31; // 10 digits

  const regex = /^([ ]*)([\+]{0,1}|[\-]{0,1})([0-9]+)/;
  const matchResult = regex.exec(s);
  if (!matchResult) {
    return 0;
  }

  const sign = matchResult[2] === '-' ? -1 : 1;
  const digits = matchResult[3];

  const digitsRemovedPrefixZeros = /^([0]*)([0-9]*)/.exec(digits)[2];
  if (digitsRemovedPrefixZeros.length === 0) {
    return 0;
  }
  if (digitsRemovedPrefixZeros.length > 10) {
    // num has more than 10 digits
    return sign > 0 ? maximum : minimum;
  }

  const result = sign * Number.parseInt(digitsRemovedPrefixZeros);

  if (result < minimum) {
    return minimum;
  }

  if (result > maximum) {
    return maximum;
  }

  return result;
};

const [_p1, _p2, s] = process.argv;
console.log(myAtoi(s));

