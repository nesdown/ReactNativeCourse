// прерывает цикл - ключевое слово break;

let i = 0;
while (true) {
  console.log(i);
  i++;

  if (i >= 50) break;
}

// перескочить на одну итерацию вперед - continue
for (let i = 0; i < 50; i++) {
  if (i % 2 == 0) continue;
  console.log(i);
}

// перескочить на одну итерацию вперед - continue
for (let i = 0; i < 50; i++) if (i % 2 != 0) console.log(i);
