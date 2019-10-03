console.log('worked');

const regularAmount = 10000;
const increasCashbackAmount = 15000;
const specialAmount = 20000;

const regularPercent = 0.01;
const increasCashbackPercent = 0.05;
const specialPercent = 0.3;

const cashback = regularAmount * regularPercent + increasCashbackAmount * increasCashbackPercent + specialAmount * specialPercent;

console.log(cashback);

const maxCashback = cashback;
const marginCashback = 3000;

let bonusesPerOneThousand;
if (maxCashback <= 3000) {
    bonusesPerOneThousand = maxCashback;  }

console.log(bonusesPerOneThousand);