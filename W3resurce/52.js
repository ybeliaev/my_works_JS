// 52. Write a JavaScript program to convert the letters of a given string in alphabetical order.
// Напишите программу JavaScript для расстановки букв заданной строки в алфавитном порядке.

function convertLetters(str){
  return str.split('').sort().join('');

}

convertLetters('JavaScript')// => 'JSaaciprtv'