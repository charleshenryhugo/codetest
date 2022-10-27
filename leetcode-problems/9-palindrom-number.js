// 9. https://leetcode.com/problems/palindrome-number/
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindromeNumber = function(x) {
    // 1234321
    if (x < 0) {
      return false;
    }
    // 1 2 3
    // 3 2 1
    //     i
    // j

    const digits = [];
    let left = x;
    while (left > 0) {
      digits.push(left % 10);
      left = Number.parseInt(left / 10);
    }

    let i = 0;
    let j = digits.length - 1;
    while (i <= j) {
      if (digits[i] !== digits[j]) {
        return false;
      }
      i++;
      j--;
    }

    return true;
};

const [_p1, _p2, x] = process.argv;
console.log(isPalindromeNumber(x));