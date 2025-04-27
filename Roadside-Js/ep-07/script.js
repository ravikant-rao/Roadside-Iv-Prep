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
    


// * 4. Find min/max number in an array
  const numbers = [4,5,6,7,8,9,3,2];
  console.log(Math.max.apply(null, numbers));
  console.log(Math.min.apply(null, numbers));



// * 5. Bound Function
  function f(){
    console.log(this);
    
  }

  let user = {
    g: f.bind(null),
  }

  user.g();



// * 6. Bind Chaining
  function fn(){
    console.log(this.name);
    
  }

  fr = fn.bind({name: 'Sohan'}).bind({name: "Saurav"});
  fr();



// * 7. Fix the line  whr checkPassword is calling
  function checkPassword(success,failed){
    let password = prompt("paRRfssword?","");
    if(password== "Coder") success();
    else failed();
  }

  let user2 ={
    name: "Piyush Singh",
    loginSuccessful(){
      console.log(`${this.name} logged in`);
      
    },

    loginFailed(){
      console.log(`${this.name} failed to log in`);
      
    },
  };

  // checkPassword(user.loginSuccessful, user.loginFailed);
  // checkPassword(user2.loginSuccessful.bind(user2), user2.loginFailed.bind(user2));



// * 8. Partial application for login function
  function checkpassword(ok, fail){
    let password = prompt("Password?", "");
    if(password == "Coding") ok();
    else fail();
  }

  let user3 = {
    name: "Sakshi Priya",

    login(result){
      console.log(this.name + (result ? " login successful" : " login failed"));
      
    },
  };
  // ? checkpassword(?,?);
  // checkpassword(user3.login.bind(user3,true), user3.login.bind(user3,false));



// * 9 Explicit Binding with Arrow Function
  const age3 = 10;

  var person2 = {
    name: "sanni",
    age: 22,
    getAgeArrow: ()=> console.log(this.age),
    getAge: function () {
      console.log(this.age);
      
    },
    
  };

  var person3 = { age: 24};
  person2.getAgeArrow.call(person3);
  person2.getAge.call(person3);