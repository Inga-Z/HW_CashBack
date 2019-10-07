console.log('worked');

const regularAmount = 15000;
const increasCashbackAmount = 20000;
const specialAmount = 30000;

const regularPercent = 0.01;
const increasCashbackPercent = 0.05;
const specialPercent = 0.3;

const cashback = regularAmount * regularPercent + increasCashbackAmount * increasCashbackPercent + specialAmount * specialPercent;

const maxCashback = 3000;

let itogCashbak;

if (cashback <= 3000) {  
    itogCashbak = cashback;
} else if (cashback <= 3000) {  
    itogCashbak = cashback; 
} else {
    itogCashbak = 3000;
};

console.log(itogCashbak);