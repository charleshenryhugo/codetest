/*
res  Contains the result of button presses.
btns  A button container that displays all eight calculator buttons.
0  btn0  A button expressing binary digit .
1  btn1  A button expressing binary digit .
C  btnClr  A button to clear the contents of .
=  btnEql  A button to evaluate the contents of the expression in .
+  btnSum  A button for the addition operation.
-  btnSub  A button for the subtraction operation.
*  btnMul  A button for the multiplication operation.
/  btnDiv  A button for the integer division operation.
*/

const decToBin = (dec) => dec.toString(2);
const operations = {
  '+': (a, b) => {
    return decToBin(Number.parseInt(a, 2) + Number.parseInt(b, 2));
  },
  '-': (a, b) => {
    return decToBin(Number.parseInt(a, 2) - Number.parseInt(b, 2));
  },
  '*': (a, b) => {
    return decToBin(Number.parseInt(a, 2) * Number.parseInt(b, 2));
  },
  '/': (a, b) => {
    return decToBin(Number.parseInt(a, 2) / Number.parseInt(b, 2));
  },
}

const btns = document.querySelector('#btns');
const res = document.querySelector('#res');

let equation = '';

btns.addEventListener('click', (event) => {
  if (event.target.textContent === 'C') {
    equation = '';
  } else if (event.target.textContent === '=') {
    const spliterRegex = /\-|\+|\*|\//;
    console.log(equation);
    const [operand1, operand2] = equation.split(spliterRegex);
    const [operator] = equation.match(spliterRegex);
    equation = operations[operator](operand1, operand2);
  } else {
    equation += event.target.textContent;
  }
  res.textContent = equation;
})
