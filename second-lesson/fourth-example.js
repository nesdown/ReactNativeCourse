// Любая часть цикла for может быть пропущена
let i = 0; // Заранее создал с целью сохранить память
for (; i < 150; i++)
  console.log("Hello");

let i = 0; // Заранее создал с целью сохранить память
for ( ; i < 150; ) {
  console.log("Hello");
  i += 1;
}

for( ; ; ) console.log("Hello");
while(true) console.log("Hello");
