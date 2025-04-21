// ?--------------------------All JavaScript Starts From Here -------------------------------

//* Every Epicode Questions are in Their Seperate Folder.

// All The Questions of Epicodes -------->>

    //? ---------------------ep 01 --------------------------
    //* Q. (1). map, filter and reduce. what is map(),filter(),reduce().
    // *Q. (2). write pollyfill for each.
    //* Q. (3). map, filter and reduce - O/P Based Questions
        //* 1. Return Only name of students in Capital
        //* 2. Return only details of those who scored mor than 60 marks
        //* 3. Sum of marks of all students
        //* 4. Find Studen name over marks 60
        //* 5. Return total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60

        // let students = [
        //     {name: "Piyush", rollNumber: 21, marks: 80},
        //     {name: "Raman", rollNumber: 32, marks:58},
        //     {name: "sonu", rollNumber: 44, marks:38},
        //     {name: "Diljit", rollNumber: 77, marks:88},
        // ]  
    // 

    // ?---------------------ep 02 -------------------------
    // *Functions in javascript
    //* Q. 1. What is Function Decrarations?
    //* Q. 2. What is Function Expression?
    //* Q. 3. What are First Class Functions?
    //* Q. 4. What is IIFE?
    //* Q. 5. IIFE - O/P Based Question?
    //* Q. 6. Function Scope - O/P Based Question?
    //* Q. 7. Function Hoisting?
    //* Q. 8. Function Hoisting  O/P Based Question?
    //* Q. 9. Params vs Arguments?
    //* Q. 10.  Spread Vs Rest Operator?
    //* Q. 11. Rest O/P Based?
    //* Q. 12. Callback Function?
    //* Q. 13. Arrow function?
    //* Q. 14. Diff B/w Arrow function and normal function?



    // ?--------------------ep 03 ---------------------------
    // * Closeure in Javascript
    // * Lexical Scope
    // * Scope Channing in Closure
    // * Q 1. What will be logged to console?
    // * Q 2. Write a function that would allow you to do this?
    // ! Q 3. Time Optimization with closure
    // ! Q 4. Block Sope and setTimeout
    // * Q 5. How would u use a closure to create a private counter?
    // * Q 6. What is Module Pattern?  //senior level iv
    // * Q 7. Once Pollyfill?
    // * Q 8. Caching or memoization in javaScript?



    // ?---------------------ep 04 -------------------------
    // * Currying in Javascript
    // * Q 1. write currying fn for sum(2)(6)(2)?
    /* //* Q 2.
    evaluate("sum")(4)(2) => 6
    evaluate("multiply")(4)(2) => 8
    evaluate("divide")(4)(2) => 2
    evaluate("substract")(4)(2) => 2
    */
    // * Q 3. Infinite Currying -> add(1)(2)(3)(4)....(n)?
    // * Q 4. Currying vs Partial Application
    // * Q 5. Manipulating DOM
    // * Q 6. Curry() implementation . write function to
        // Converts f(a,b,c) into f(a)(b)(c);



    // ?-----------------------ep 05 -------------------------
    // ? Objects in Javascript
    // * Q 1. What's the output?
    // const obj = {
    //     a: "one",
    //     b: "two",
    //     a: "three",
    // }
    // console.log(obj);
    // * Q 2. Create a function multiplyByTwo(obj) that myltiplies all numeric property values of obj by 2.
    // * Q 3. What's the Output of the following code?
    // * 4. What's JSON.strigify and JSON.parse?
    // * Q 5. console.log([..."lyrics"]);
    // * Q 6. What's output?
    const song = {name: "Song", type: "lyrics"}
    const details = {admin: true, ...song};
    console.log(details);
    // * Q 7. What's the Output? 
    const settings = {
        username: "Piyush",
        level: 19,
        health: 90,

    };
    const data = JSON.stringify(settings, ["level","health"]);
    console.log(data);   
    // * 8. What's the Output?
    const shape = {
        radius: 10,
        diameter () {
            return this.radius *2;
        },
        perimeter: ()=> 2* Math.PI * this.radius,
    }
    
    console.log(shape.diameter());
    console.log(shape.perimeter());
    // * Q 9. What is destructuring in obj?
    // * Q 10. How to deep copy / clone an object ?



    // ?---------------------------ep 06 -----------------------
    // ? 'this' keyword?
    // * 'this' in object?
    // * 'this' inside Nested function
    // * 'this' inside constructor?
    // * Q 1. what is the Output?
    const user3 = {
        firstName: "Rohit",
        getName() {
            const firstName = "Rohini Roy";
            return this.firstName;

        },
    };
    console.log(user3.getName()); //what is logged?
    // * Q 2. What is the result of accessing its  result?
    function makeUser (){
        return {
            name: "John",
            ref: this,
        };
    }
    let myUser = makeUser();
    console.log(myUser.ref.name);
    // * Q 3. What is the Output?
    const usr = {
        name: "Saurav",
        logMessage(){
            console.log(this.name); // what is logged?
            
        },
    };
    setTimeout(usr.logMessage, 1000);
    //make it working for usr.
    // * Q 4. What is the Output?
    const usr2 = {
        name: "Saurav Ray",
        greet(){
            return `Hello, ${this.name} !`;
        },
        farewell: ()=>{
            return `Goodbye, ${this.name}`;
        },

    }
    console.log(usr2.greet()); //what logged?
    console.log(usr2.farewell()); //what logged?
    // * Q 5. Create and object calculator
    calculator.read(10,15);
    console.log(calculator.sum());
    console.log(calculator.mul());
    // * Q 6. what will be the Output?
    var length = 4;
    function callback(){
        console.log(this.length);
        
    }
    const object = {
        length: 5,
        method(fn){
            fn();
        },
    }

    object.method(callback);
    // * Q 7. Implement this code
    // const result = calc.add(10).multiply(5).subtract(30).add(10);
    console.log(result.total);

