console.log('worked');

const regularAmount = 1000;
const increasCashbackAmount = 1500;
const specialAmount = 2000;

const regularPercent = 0.01;
const increasCashbackPercent = 0.05;
const specialPercent = 0.3;

const cashback = regularAmount * regularPercent + increasCashbackAmount * increasCashbackPercent + specialAmount * specialPercent;

console.log(cashback);

const factcashback = cashback;
const maxCashback = 3000;

let ItogCashbak;
if (factcashback <= 3000) 
{    ItogCashbak = cashback;  }
    else (factcashback <= 3000) 
    {  ItogCashbak = 3000; }

console.log(ItogCashbak);