console.log('worked');

const regularAmount = 15000;
const increasCashbackAmount = 20000;
const specialAmount = 300000;

const regularPercent = 0.01;
const increasCashbackPercent = 0.05;
const specialPercent = 0.3;

const cashback = regularAmount * regularPercent + increasCashbackAmount * increasCashbackPercent + specialAmount * specialPercent;

const maxCashback = 3000;

let possibleCashbak = cashback;

if (possibleCashbak > maxCashback) {  
    possibleCashbak = maxCashback;
};

console.log(possibleCashbak);