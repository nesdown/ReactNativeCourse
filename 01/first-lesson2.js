'use strict'

// Переменная - коробка, в которую можно положить что-то одно

let value1 = "Hello World!"; // переменная-строка (String)
let value2 = 14; // переменная-целочисельная (Integer)
let value3 /* Hello */ = 3.8; // переменная с плавающей запятой (float)
let value4 = true; // Boolean, Логическая переменная

+ - конкатенация
console.log("");
console.log(value1 + value4);
console.log(value2 + value3);
console.log(value3 + value4);
console.log(value1 + value3);
console.log("");

// \n = переход на новую строку
console.log("\n" + value1 + value4 + "\n" + value2 + value3 + "\n");

// Шаблонная строка
console.log(
  `
    The result of the first try: ${ value1 + value4 };
    The result of second try: ${ value2 + value3 };
    The result of the third try: ${ value3 + value4 };
    The result of the fourth try: ${ value1 + value3 };
  `
);
