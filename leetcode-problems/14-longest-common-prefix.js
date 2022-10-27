// 14. https://leetcode.com/problems/longest-common-prefix/
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    // ["flower","flow","flight"]
    // flower
    // flow
    // flight
    // i

    let i = 0;
    let commonPrefix = ''
    let exit = false;
    while (!exit) {
      if (i >= strs[0].length) {
        exit = true;
        break;
      }
      const currentChar = strs[0][i]
      for (const str of strs) {
        if (i >= str.length || str[i] !== currentChar) {
          exit = true;
        }
      }
      if (exit) {
        break;
      }
      commonPrefix += currentChar;
      i++;
    }
    return commonPrefix;
};

const [_p1, _p2, ...strs] = process.argv;
console.log(longestCommonPrefix(strs));