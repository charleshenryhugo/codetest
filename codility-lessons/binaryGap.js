// https://app.codility.com/programmers/lessons/1-iterations/binary_gap/
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  const binN = N.toString(2);
  // '100110100100000000'
  // '100110100100000001'

  // const oneZerosOne = binN.match(/1[0]+1/g);
  // console.log(oneZerosOne);
  // return !oneZerosOne ? 0 : oneZerosOne.reduce((prev, curr) => Math.max(prev, curr.length), 0) - 2
  /* the problem of using regex here is that:
    '101001000'.match(/1[0]+1/g) will return only ['101'], but the correct one should be ['101', '1001']
  */


  let zeros = binN.split('1');
  if (binN.slice(-1) !== '1') {
    zeros = zeros.slice(0, -1);
  }
  return zeros.reduce((prev, curr) => Math.max(prev, curr.length), 0);
}

const arguments = process.argv.slice(2);
console.log(solution(Number(arguments[0])));
