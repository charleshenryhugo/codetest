// 2351 https://leetcode.com/problems/first-letter-to-appear-twice/
/**
 * @param {string} s
 * @return {character}
 */
const firstRepeatedLetter = function(s) {
  const charMap = {}
  // a b c c b a a c z
  // {a: 1, b: 1, c: 2}
  for (const c of s) {
    if (charMap[c] === 1) {
      return c;
    }
    charMap[c] = 1;
  }
  return -1;
};

const [_p1, _p2, s] = process.argv;
console.log(firstRepeatedLetter(s));