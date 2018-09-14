'strict mode';
// 1. GOOGLE. Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

function checkArrForNumber(arr, k) {
  var res;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 1; j < arr.length; j++) {
      res = arr[i] + arr[j];
      if (res == k) {
        return true;
      }
    }
  }
  return false;// объясни почему тут место return а не в else после if
}
var arr1 = [10, 15, 3, 7];
//checkArrForNumber(arr1, 13)

//11111111111111111111111111111111111111111111111111111111111111111111111111111

// 2. UBER. Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6]. т.е. получаем произведение всех чисел и делим на arr[i] исходного массива

function getMultArray(arr) {
  let res = 1;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    res *= arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    newArr.push(res / arr[i]);
  }
  return newArr;
}
var arr2 = [1, 2, 3, 4, 5];
getMultArray(arr2)
//22222222222222222222222222222222222222222222222222222222222222222

// 3. by Stripe
// Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3. Найти наименьшее полож. число, которого нет в массиве

function getMinPositivNum(arr) {
  // сортирую массив. сртировка sort() даёт только 'строковую сортировку'
  arr.sort(function (a, b) {
    return a - b;
  });
  console.log(arr);
  //let minNumber = Math.min.apply(null,arr);
  for (let i = 0; i < arr.length; i++) {

    // проверка положительного числа и 
    if (arr[i] > 0 && arr[i - 1] != undefined && arr[i] - 1 > 0) {

      minNumber = arr[i] - 1;

      if (arr[i - 1] !== minNumber) {
        return minNumber;
      }
    }
  }
}
let arr3 = [13, 4, -1, 10];
getMinPositivNum(arr3);
