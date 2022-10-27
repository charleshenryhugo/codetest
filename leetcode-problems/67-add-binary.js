// 67. https://leetcode.com/problems/add-binary/
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
  // 1 1
  // 1
  // i
  //j
  // acc: '0'
  // inc: 1

  // 1 0 1 0
  //i
  // 1 0 1 1
  //j
  // acc: '10101'
  // inc: 1


  let i = a.length - 1;
  let j = b.length - 1;
  let inc = 0;
  let acc = '';
  while (i >= 0 && j >= 0) {
    const res = +a[i] + +b[j] + inc; // 1 0 2
    acc = `${res % 2}${acc}`;
    inc = res > 1 ? 1 : 0;
    i--;
    j--;
  }

  if (i < 0 && j < 0) {
    if (inc > 0) {
      acc = `${inc}${acc}`;
      return acc;
    }
  }

  const longerStr = j < 0 ? a : b;
  let index = j < 0 ? i : j;
  while (index >= 0) {
    const res = +longerStr[index] + inc
    acc = `${res % 2}${acc}`;
    inc = res > 1 ? 1 : 0;
    index--;
  }
  if (inc > 0) {
    acc = `${inc}${acc}`;
  }
  return acc;
};

// cannot deal with large numbers
const addBinary_easyCheat = function(a, b) {
  const numA = Number.parseInt(a, 2);
  const numB = Number.parseInt(b, 2);
  return Number(numA + numB).toString(2);
}
const [_p1, _p2, a, b] = process.argv;
console.log(addBinary(a, b));