// 387 https://leetcode.com/problems/first-unique-character-in-a-string/
/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
  // l o v e l e e t c o d e
  // { l: -1, o: -1, v: 2, e: -1, t: 7, c: 8, d: 10,  }
  const uniqueCharMap = new Map();
  for (let i = 0; i < s.length; i++) {
    if (uniqueCharMap.has(s[i])) {
      uniqueCharMap.set(s[i], -1);
    } else {
      uniqueCharMap.set(s[i], i)
    }
  }

  for (const pos of uniqueCharMap.values()) {
    if (pos > -1) {
      return pos;
    }
  }
  return -1;
};

const [_p1, _p2, s] = process.argv;
console.log(firstUniqChar(s));