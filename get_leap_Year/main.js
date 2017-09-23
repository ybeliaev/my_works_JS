year = 2100;
x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
console.log(x);



  
function leapYear(year) {
return (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) ;
}
leapYear(year);