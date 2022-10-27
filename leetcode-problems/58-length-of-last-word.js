// 58. https://leetcode.com/problems/length-of-last-word/
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord_regex = function(s) {
  return s.trim().split(/\s+/).slice(-1)[0].length;
};

const lengthOfLastWord_loop = function(s) {
  // "  fly me  to the  moon  "
  //                           c
  // ['fly', 'me', 'to', 'the', 'moon']
  // 

  // "abc ab acc"
  //            c
  let words = [];
  let currentWord = '';
  for (const c of s) {
    if (!/\s/.test(c)) {
      currentWord += c;
    } else if (currentWord.length > 0) {
      words.push(currentWord);
      currentWord = '';
    }
  }
  if (currentWord.length > 0) {
    return currentWord.length
  }
  return words[words.length - 1].length
}

const lengthOfLastWord_justSearchFromEnd = function(s) {
  // "abd sad dasdas  "
  //         c
  let lastWordLength = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (!/\s/.test(s[i])) {
      lastWordLength++;
    } else if (lastWordLength > 0) {
      return lastWordLength;
    }
  }
  return lastWordLength;
}

const maxLengthOfWord = function(s) {
  return s.split(/\s+/).reduce((maxLen, curr) => Math.max(maxLen, curr.length), 0);
}


const [_p1, _p2, s] = process.argv;
console.log(lengthOfLastWord_justSearchFromEnd(s));