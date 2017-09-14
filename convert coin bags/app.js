let coins = {qs: 3, ds: 10, ns: 20, ps: 12};// числа монет каждого типа

let rate = {qs: 0.25, ds: 0.1, ns: 0.05, ps: 0.01};
function coinsToAmount(obj) {
  let sum = 0;
  for (let prop in obj){
    sum += obj[prop] * rate[prop];
  } 
    return sum;
}
coinsToAmount(coins);
