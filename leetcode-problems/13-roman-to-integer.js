// 13. https://leetcode.com/problems/roman-to-integer/
/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
  const symbolValues = {
    ['I']: 1,
    ['V']: 5,
    ['X']: 10,
    ['L']: 50,
    ['C']: 100,
    ['D']: 500,
    ['M']: 1000,
  };
  // M C M X C I V
  //               i
  // 1000, 900, 90, 4

  // L V I I I
  //         i
  // 50, 5, 1, 1

  // M C M X C I
  //           i
  let i = 0;
  let sum = 0;
  while (i + 1 < s.length) {
    if (symbolValues[s[i]] >= symbolValues[s[i + 1]]) {
      sum += symbolValues[s[i]];
      i += 1;
    } else {
      sum += symbolValues[s[i + 1]] - symbolValues[s[i]];
      i += 2;
    }
  }

  if (i < s.length) {
    sum += symbolValues[s[i]]
  }

  return sum;
};

const romanToInt_smarterMapper = function(s) {
  const symbolValues = {
    ['I']: 1,
    ['V']: 5,
    ['X']: 10,
    ['L']: 50,
    ['C']: 100,
    ['D']: 500,
    ['M']: 1000,
    ['IV']: 4,
    ['IX']: 9,
    ['XL']: 40,
    ['XC']: 90,
    ['CD']: 400,
    ['CM']: 900,
  };

  // M C M X C I V
  //               i
  // 1000, 900, 90, 4
  let i = 0;
  let sum = 0;
  while (i < s.length) {
    if (symbolValues[s.slice(i, i + 2)]) {
      sum += symbolValues[s.slice(i, i + 2)];
      i += 2;
    } else {
      sum += symbolValues[s[i]];
      i += 1;
    }
  }
  return sum;
}

const [_p1, _p2, roman] = process.argv;
console.log(romanToInt_smarterMapper(roman));