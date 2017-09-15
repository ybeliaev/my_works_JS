//  массив номиналов монет
const arrCoins = [50, 25, 10, 5, 2, 1];
 
// асс. массив выдачи монет 
const objCoins = {};

function amountToCoins(num){
  
  for(let i = 0; i < arrCoins.length; i++){
    if(num >= arrCoins[i]){
      let int = Math.floor(num / arrCoins[i]);
      objCoins[arrCoins[i]] = int;
      let rest = num % arrCoins[i];
      if(rest != 0){
        amountToCoins(rest);
      }
      return objCoins;
    }
    
  }
  
}//amountToCoins
amountToCoins(102)
