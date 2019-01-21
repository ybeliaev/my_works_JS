/ Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.

// Напишите программу на JavaScript для сравнения двух объектов, чтобы определить, содержит ли первый значения свойств, эквивалентные второму. Или полностью идентичные поля.

// Object.keys(obj) повертає масив імен особистих
// arr.every(callback[, thisArg]) true якщо callback функція повернула truthy для кожного елементу масиву; в іншому випадку, false. 
// Вызов obj.hasOwnProperty(prop) возвращает true, если свойство prop принадлежит самому объекту obj


const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);

const obj1 = { age: 25, hair: 'long', beard: true };
const obj2 = {          hair: 'long', beard: true };

console.log(matches(obj1, obj2)); 