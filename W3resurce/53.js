// 53. Write a JavaScript program to check if the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.
// Напишите программу JavaScript, чтобы проверить, будут ли символы a и b разделены ровно на 3 места в любом месте (хотя бы один раз) в заданной строке.

function checkThreePlaces(str) {
  let indexA = str.indexOf('a');
  let indexB = str.indexOf('b');

  return Math.abs(indexA - indexB) > 2 ? true : false



}

checkThreePlaces('Chainsbreak')