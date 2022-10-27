// 28. https://leetcode.com/problems/implement-strstr
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// 1 <= haystack.length, needle.length <= 10^4
// 72ms
const strStr_bruteForce = function(haystack, needle) {
  // 0 1 2 3 4
  // h e l l o
  // l l
  for (let i = 0; i + needle.length <= haystack.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) {
      return i;
    }
  }
  return -1;
};

const strStr_linear = function(haystack, needle) {
  // 0 1 2 3 4 5 6 7 8 9
  // h e l l o w o r l d
  // i
  //
  // o r l
  // j

  // 0 1 2 3 4 5 6 7 8 9
  // h e l l o w o r l d
  //                     i
  //
  // o r k
  // j

  // h e l l o
  // e

  // h e l l o
  //           i
  //
  // l o k
  //     j

  // h e l l o
  //           i
  // 
  // h e l l o
  //           j

  // h e l l o
  //           i
  //
  // l l o k
  //       j

  // h e l l o
  //           i
  //
  // h e l l o k
  //           j

  // 0 1 2 3 4 5 6 7 8 9 10
  //         M
  // m i s s i s s i p p i
  //                 i
  //
  // i s s i p
  //         j

  // i s s i s s i s s i p
  //                     i
  //
  // i s s i p
  //         j
  let lastMatchIndex = -1;
  let i = 0;
  let j = 0;
  while (i < haystack.length && j < needle.length) {
    if (haystack[i] !== needle[j]) {
      if (lastMatchIndex === -1) {
        i++;
      } else {
        i = lastMatchIndex + 1;
      }
      lastMatchIndex = -1;
      j = 0;
    } else {
      if (lastMatchIndex === -1) {
        lastMatchIndex = i;
      }
      i++;
      j++;
    }
  }
  if (j < needle.length) {
    return -1
  }
  return lastMatchIndex;
};

// 73ms
const strStr_regex = function(haystack, needle) {
  const regex = new RegExp(needle);
  const match = haystack.match(regex);
  if (!match) {
    return -1;
  }
  return match.index;
}

// needle.length * (haystack.length - needle.length)
const [_p1, _p2, haystack, needle] = process.argv;
const index = strStr_regex(haystack, needle);
console.log(haystack, needle);
console.log(index);