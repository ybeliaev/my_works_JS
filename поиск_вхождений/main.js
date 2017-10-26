let str = "Ослик Иа-Иа посмотрел на виадуки"; // ищем в этой строке
let target = "и"; // цель поиска
let pos = 0;
let sum = 0;

for(let i = 0; i<str.length; i++){
  let targetPos = str.indexOf(target, pos);
  if(targetPos != -1){
    pos = targetPos + 1;
    sum++;
    }
  
}
console.log(sum);
//********************************

str = "Ослик Иа-Иа посмотрел на виадук"; // ищем в этой строке
target = "Иа"; // цель поиска

pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  console.log( foundPos ); // нашли на этой позиции
  pos = foundPos + 1; // продолжить поиск со следующей
}
//или
pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  console.log( pos );
}


//********************************
//charAt возвращает строку, состоящую из выбранного символа.
let str1 = "jQuery";
console.log( str1.charAt(0) ); // "j"

function checkChar(str, char){
  let res = 0;
  for(let i = 0; i<str.length; i++){
    if(str.charAt(i) == char){
      res++;
    }
  }
  console.log(res);
}
checkChar('asdasdsdasdas', 'a')

