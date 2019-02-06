// a - Пункт а,
// b - Пункт б,
// oil - Объем бензина
// oilPerKilo - Потребление бензина на километр

let a = 40;
let b = 50;
let oil = 150;
let oilPerKilo = 5;

// Деструктурированное присвоение
// let [a, b, oil, oilPerHour] = [40, 50, 150, 5];

let distance = oil / oilPerKilo

if (distance > (b-a))
  console.log("Доедет");
else
  console.log("Не доедет");

// 1. Цикл может повторятся до определенного условия
// 2. Цикл может выполнится определенное кол-во раз
