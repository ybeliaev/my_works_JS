let coins = {qs: 3, ds: 10, ns: 20, ps: 12} // числа монет каждого типа


function coinsToAmount(obj) {
  let sum = 0;
  for(let prop in obj){
    if(prop == 'qs'){
      obj[prop] *= 0.25;
    } else if (prop == 'ds'){
      obj[prop] *= 0.1;
    } else if (prop == 'ns'){
      obj[prop] *= 0.05;
    } else {
      obj[prop] *= 0.01;
    }
      sum += obj[prop]
    }
    
  return sum
}

console.log(coinsToAmount(coins)) // 1 ($)