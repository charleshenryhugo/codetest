// 5. https://leetcode.com/problems/longest-palindromic-substring/
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindromeSubstring = function(s) {
  // d a k a a b a a k b b u p


};

const longestPalindromeSubstring_recursive = function(s) {
  //     0 1 2 3 4 5 6
  //     k a a b a a k
  // 0 k 1 0 0 0 0 0 1
  // 1 a   1 
  // 2 a 
  // 3 b       
  // 4 a         
  // 5 a           
  // 6 k             
  // i
  //             j
  // const isPalindromeMat = Array.from({ length: s.length }, () => {
  //   return Array.from({ length: s.length }, () => undefined);
  // });

  const isPalindromeMat = Array.from({ length: s.length }, () => []);

  const isPalindrome = (i, j) => {
    if (isPalindromeMat[i][j] !== undefined) {
      return isPalindromeMat[i][j];
    }
    if (i >= j - 1) {
      isPalindromeMat[i][j] = s[i] === s[j];
    } else {
      isPalindromeMat[i][j] = s[i] === s[j] && isPalindrome(i + 1, j - 1);
    }
    return isPalindromeMat[i][j];
  }

  let longest = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      isPalindromeMat[i][j] = isPalindrome(i, j);
      if (isPalindromeMat[i][j] && longest.length < j - i + 1) {
        longest = s.slice(i, j + 1);
      }
    }
  }

  return longest;
}

// n^2
const longestPalindromeSubstring_expandFromMiddle = function(s) {
  // g e e k s
  //           i
  //       o
  // pivotSize: 2
  // max: 2

  // g e e e k s
  //     i
  // 

  // a a b a a
  //     i
  let longest = '';
  for (let i = 0; i < s.length; i++) {
    let pivotSize = 1;
    if (s[i + 1] !== undefined && s[i] === s[i + 1]) {
      pivotSize = 2;
    }
    let offset = 0;
    while(s[i - offset] !== undefined) {
      if (s[i - offset] === s[i + pivotSize - 1 + offset]) {
        if (longest.length < pivotSize + offset * 2) {
          longest = s.slice(i - offset, i + pivotSize - 1 + offset + 1);
        }
        offset++;
        continue;
      }

      if (pivotSize === 2) {
        pivotSize = 1;
        offset = 0;
        continue;
      } else {
        break;
      }
    }
  }

  return longest;
}

const [_p1, _p2, s] = process.argv;
console.log(longestPalindromeSubstring_recursive(s));