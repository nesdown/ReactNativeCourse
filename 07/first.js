'use strict';

let keyboard = require('readline-sync');

function checkAge(age) {
  if(age > 18) {
    return true;
  }

  else {
    let answer = keyboard.question("Родители разрешили? ");
    if (answer == "Да") {
      return true;
    }

    else {
      return false;
    }
  }
}

let age = (keyboard.question("Ваш возраст: "));

if (checkAge(age)) {
  console.log("Доступ разрешен.");
}

else {
  console.log("В доступе отказано.")
}
