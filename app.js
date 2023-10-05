// Assignment 1
let fruits = [];

fruits.push("apple", "banana", "orange");

fruits.splice(0, 1);

fruits.push("grape");

fruits.splice(1, 1, "pear");
console.log("fruits", fruits);

// Assignment 2
let person = {};
person = {
  name: "Jhon",
  age: 30,
  city: "New York",
};
delete person.age;
person.job = "Engineer";
person.city = "San Francisco";
console.log("Person", person);

// Assignment 3
let cars = [];

let car = {
  make: "Toyota",
  model: "Camry",
  year: 2018,
};

let car1 = { ...car };
let car2 = { ...car };
let car3 = { ...car };
cars.push(car1, car2, car3);
cars.splice(0, 1);
const car4 = {
  make: "Honda",
  model: "Civic",
  year: 2020,
};

cars.push(car4);
cars[1].model = "Accord";

console.log("cars", cars);
