// Write a JavaScript program to display the current day and time in the following format. 
// //Today is : Friday. 
// //Current time is : 04 PM : 50 : 22 

let now = new Date();  
 
 let day = now.getDay();
 console.log(day);  
 let dayList = ["Вс","Пн","Вт","Ср ","Чт","Пт","Сб"];
 
console.log( `Сегодня: ${dayList[day ]}` )

 let hours = now.getHours();
 let minutes = now.getMinutes(); 
 let seconds = now.getSeconds();
 let prepand;
 if(hours > 12){
   hours -= 12;
   prepand = 'PM';
 } else {
   prepand = 'AM';
 }
 if (hours < 10){
   hours = '0' + hours;
 } 
console.log(`Текущее время: ${hours} ${prepand} : ${minutes} : ${seconds}  `) 
 

      
