// ? Call, Bind and Apply in JavaScript (Explicit Binding)

// * What is Call?
var obj = {
  name: "Sohan",
};

function sayHello(age, profession) {
  return "Hello " + this.name + " is " + age + " and is an " + profession;
}

console.log(sayHello.call(obj, 22, "software Engineer"));

// * What is Apply?
console.log(sayHello.apply(obj, [24, "software Engineer"]));

// * What is bind?
const bindFunc = sayHello.bind(obj);
console.log(bindFunc(23, "Youtuber"));

// * Q 1. Output Based Question?
const person = { name: "Rohan" };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 22));
console.log(sayHi.bind(person, 32));

// * Call With function inside object
const age = 10;

var person2 = {
  name: "Piyush",
  age: 20,
  getAge: function () {
    return this.age;
  },
};

var person3 = { age: 24 };
let age2 = person2.getAge.call(person3);
console.log(age2);

// * Q 2. Call printAnimals such that it prints all animals
const animals = [
  { species: "Lion", name: "King" },
  { species: "Whale", name: "Queen" },
];

function printAnimals(i) {
  this.print = function () {
    console.log("#" + i + " " + this.species + ": " + this.name);
  };
  this.print();
}

for (let i = 0; i < animals.length; i++) {
  printAnimals.call(animals[i], i);
}


// * Q 3. Append an array to another array
    const array = ['a', 'b'];
    const elements = [1,2,3];

    array.push.apply(array,elements);
    console.log(array);
    