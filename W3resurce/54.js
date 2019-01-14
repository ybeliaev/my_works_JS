// 54. Write a JavaScript program to count the number of vowels in a given string
// Напишите программу JavaScript, чтобы подсчитать количество гласных в заданной строке A, E, I, O, U

function countNumberVowels(str) {
  const arr = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  let pos = 0;
  for (let i = 0; i < arr.length; i++) {
    
    outer: while (pos < str.length) {
      let foundPos = str.indexOf(arr[i], pos);
      if (foundPos == -1) break outer; 
      console.log(i);     
      pos = foundPos + 1; 
      count++;
    }
  }
  return count;
}
let str = 'Waarte ';
countNumberVowels(str);