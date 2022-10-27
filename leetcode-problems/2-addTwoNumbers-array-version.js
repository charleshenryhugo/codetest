// 2. https://leetcode.com/problems/add-two-numbers/
/**
 * @param {Array} l1
 * @param {Array} l2
 * @return {Array}
 */
const addTwoNumbers = function(l1, l2) {
  // [2,4,3]
  // [5,6,4]
  // [7,0,8]
  // 465 + 342 = 807

  // [2,4,3]
  // [5,6,7,8]
  // 7, 0, 1, 9
  // [7, 0, 1]

  // [2,4,3]
  // [5,6,7,9,9]
  // [7, 0, 1, 0, 0, 1]

  // [0,1,1]
  // [1,2,2]

  if (l1.length === 1 && l1[0] === 0) return l2;
  if (l2.length === 1 && l2[0] === 0) return l1;

  const result = [];
  let addition = 0;
  const len = Math.min(l1.length, l2.length);
  let i = 0;
  for (i = 0; i < len; i++) {
    const res = l1[i] + l2[i] + addition
    result.push(res % 10);
    addition = res >= 10 ? 1 : 0
  }

  if (l1.length === l2.length) {
    if (addition === 1) {
      result.push(1);
    }
    return result;
  }

  const longerList = l1.length > l2.length ? l1 : l2;
  while (i < longerList.length) {
    result.push((longerList[i] + addition) % 10);
    addition = longerList[i] + addition >= 10 ? 1 : 0
    i++;
  }

  if (addition === 1) {
    result.push(1)
  }

  return result;
};

const arguments = process.argv.slice(2);
const [l1Argv, l2Argv] = arguments;
const [_l1, l1Str] = l1Argv.split('=');
const [_l2, l2Str] = l2Argv.split('=');
const l1 = l1Str.split(',').map(s => Number(s));
const l2 = l2Str.split(',').map(s => Number(s));

console.log(addTwoNumbers(l1, l2));
//console.log(addTwoNumbers([0,8,6,5,6,8,3,5,7], [6,7,8,0,8,5,8,9,7]));