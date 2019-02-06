'use strict';
let keyboard = require('readline-sync');

let years = keyboard.question("Сколько дракону лет: ");
let heads = 0;
let eyes = 0;

if (typeof years == "number") {
  for (let i = 1; i <= years; i++) {
    if (i <= 100) {
      heads += 3;
      eyes += 6;
    }

    else {
      heads += 2;
      eyes += 4;
    }
  }

  console.log(
    `
      ДРАКОН
      Лет: ${years}
      Головы: ${heads}
      Глаза: ${eyes}
     `
  );
}

else {
  console.log("Столько лет дракону быть не может!");
}
