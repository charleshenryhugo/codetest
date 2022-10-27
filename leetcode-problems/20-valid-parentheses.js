/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const rightParentheses = [')', ']', '}'];
  const pairs = {
    ['[']: ']',
    [']']: '[',
    ['(']: ')',
    [')']: '(',
    ['{']: '}',
    ['}']: '{',
  };
  //                   c
  // [ { } ( ) ] [ ] ( )
  // 

  // [ ( ]
  // [ ( ]

  // ( ) { } } {
  // 
  // 
  const parenthesesStack = [];
  for (const parenthese of s) {
    if (rightParentheses.includes(parenthese) && pairs[parenthese] === parenthesesStack.slice(-1)[0]) {
      parenthesesStack.pop();
    } else {
      parenthesesStack.push(parenthese);
    }
  }
  return parenthesesStack.length === 0;
};

const [_p1, _p2, str] = process.argv;
console.log(isValid(str));