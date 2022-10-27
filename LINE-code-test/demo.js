// find the smallest positive integer that doesn't appear in the given array
function solution(A) {
  // 1 3 6 4 1 2
  // { '0': false, '1': true, '2': true, '3', true, '4': true, '5': false, '6': true}
  const appeared = Array.from({length: A.length}, () => false);
  
  for (const a of A) {
    if (a > 0) {
      appeared[a] = true;
    }
  }
  let i = 1;
  for (i = 1; i < appeared.length; i++) {
    if (!appeared[i]) return i;
  }

  return i;
}

const [_p1, _p2, ...A] = process.argv;
console.log(solution(A));
