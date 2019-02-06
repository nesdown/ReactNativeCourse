let old_car = {
  number : "AA2525OO",
  marka : "ZAZ",
  to_crash: true
}

console.log(old_car);

old_car.marka = "Bentley";

// ИДЕНТИЧНЫ
console.log(old_car.marka);
console.log(old_car["marka"]);

old_car.speed = 300;
delete old_car.to_crash;

console.log(old_car)
