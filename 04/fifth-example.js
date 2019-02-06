// Объявлене функции (классический)
function pow (a = 0) {
  console.log(a * a);
}

let func = pow;
func(10);

// Выражение функции (новый метод)
// Сэкономить память
let divide = function (a) {
  console.log(a / 2);
}

// ФУНКЦИЯ - ЭТО ПОДВИД ПЕРЕМЕННОЙ
age = 18;
let checkAge = (age >= 18) ? function() {console.log("Доступ Разрешен")} : function() {console.console.log("Доступ Запрещен");}

checkAge();
