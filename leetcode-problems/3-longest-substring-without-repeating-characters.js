// 3. https://leetcode.com/problems/longest-substring-without-repeating-characters
/**
 * @param {string} s
 * @return {boolean}
 */
const hasRepeatedCharacters = function (s) {
  const isCharAppeared = {};
  for (const c of s) {
    if (isCharAppeared[c]) {
      return true;
    }
    isCharAppeared[c] = true;
  }
  return false;
}

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstringWithoutRepeatingCharacters_slideWindow = function(s) {
  if (s.length <= 1) return s.length;
  
  // map: { '2': 'ab', '3': 'abc', '4': '' }
  //  0 1 2 3 4 5 6 7
  // "a b c a b c b b"
  // abc
  const map = {};
  let testWindowWidth = 2;
  while (testWindowWidth <= s.length) {
    for (let l = 0; l + testWindowWidth <= s.length; l++) {
      const subStrToTest = s.slice(l, l + testWindowWidth);
      if (!hasRepeatedCharacters(subStrToTest)) {
        map[testWindowWidth] = subStrToTest;
        break;
      }
    }
    if (!map[testWindowWidth]) {
      return testWindowWidth - 1;
    }
    testWindowWidth++;
  }
  
  return testWindowWidth - 1;
};

const lengthOfLongestSubstringWithoutRepeatingCharacters_bruteForce = function(s) {
  //  0 1 2 3 4 5 6 7
  // "a b c a b c b b"
  if (s.length <= 1) return s.length;

  let maxSubStrLength = 1;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      const subStr = s.slice(i, j);
      if (!hasRepeatedCharacters(subStr)) {
        maxSubStrLength = Math.max(maxSubStrLength, subStr.length);
      }
    }
  }
  return maxSubStrLength;
}

// https://www.interviewbit.com/blog/longest-substring-without-repeating-characters
const lengthOfLongestSubstringWithoutRepeatingCharacters_optimizedSlideWindow = function(s) {
  if (s.length <= 1) return s.length;
  
  let maxSubStrLength = 1;
  //  0 1 2 3 4 5 6 7 8
  //  a b c a a b a c a
  //                l
  //                  r

  // 0 1 2 3 4 5 6 7 8 9 10
  // a b c d e f g h i j k
  // l
  //                     r
  // isCharVisited: {a: true, b: false, c: true }
  let l = 0, r = 1;
  const isCharVisited = {};
  isCharVisited[s[l]] = true;
  while (l < s.length && r < s.length) {
    const currentChar = s[r];
    if (!isCharVisited[currentChar]) {
      isCharVisited[currentChar] = true;
      r++;
    } else {
      maxSubStrLength = Math.max(maxSubStrLength, r - l);
      isCharVisited[s[l]] = false;
      l++;
    }
  }
  return Math.max(maxSubStrLength, r - l);
}

const [_p1, _p2, S] = process.argv;
console.log(lengthOfLongestSubstringWithoutRepeatingCharacters_optimizedSlideWindow(S));