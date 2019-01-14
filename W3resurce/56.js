// Write a JavaScript program to divide two numbers and return a array with properly formatted commas.
// разделить два числа и вернуть array с правильно отформатированными запятыми.
const n1 = 80;
const n2 = 6;

function divideNum(n1, n2){
  const div = Math.round(n1 / n2).toString();
  return div.split('');
}

divideNum(n1, n2)