// Write a JavaScript program to converts a comma-separated values (CSV) string to a 2D array.
// Напишите программу на JavaScript для преобразования строки значений, разделенных запятыми (CSV), в двумерный массив.

const csv_to_array = (data, delimiter = ',', omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0) // если omitFirstRow = true то выполнится data.indexOf('\n') + 1
    .split('\n')
    .map(v => v.split(delimiter));

console.log(csv_to_array('a,b\nc,d')); 