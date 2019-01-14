// Write a JavaScript program to check if a given string contains equal number of p's and t's present.
// Напишите программу на JavaScript, чтобы проверить, содержит ли данная строка одинаковое количество литер p и t.

// шаг 1 . Преобразование в массив
// const str = 'passta patato';
// function comparisonLiters(str){
//   const arr = str.split('');
//   return arr;
// }
// comparisonLiters(str)

// шаг 2 . Перебор элементов массива и формирование нового
const str = 'potatto';
function comparisonLiters(str){
  const arr = str.split('');
  const arrForP = arr.filter(elem => elem == 'p');
  const arrForT = arr.filter(elem => elem == 't');
  
  return arrForP.length == arrForT.length;
}
comparisonLiters(str)