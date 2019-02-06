// Объект, или словарь
// Расширенное создание
let person = {
  // Это все - свойства/поля
  name: "Bohdan",
  city: "Kyiv",
  profession: "Developer",
  street: 49,
  male: true
}

// Обычная инициализация
let obj = {}
obj.a = "Hello";
obj.b = "World",

console.log(person["name"]);
console.log(person.city);

// Мы можем добавить новые свойства в объект
person.birthplace = "Poltava";
delete person.city;
console.log(person)
