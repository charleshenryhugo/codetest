// 125 https://leetcode.com/problems/valid-palindrome/
/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
  // "  A man, a plan, a canal: Panama "
  //                      i
  //                    j

  // racar
  // i
  //     j

  // "      "
  //        i
  // j

  // "  t    "
  //           i
  // j
  let i = 0;
  let j = s.length - 1;
  while (i <= j) {
    while (!/[A-Za-z0-9]/.test(s[i])) i++;
    while (!/[A-Za-z0-9]/.test(s[j])) j--;

    if (j < 0 || i >= s.length) return true;

    if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;

    i++;
    j--
  }
  return true;
};

const [_p1, _p2, s] = process.argv;
console.log(isPalindrome(s));
