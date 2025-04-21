// ? Explain 'this' keyword?
this.a = 5;
function func() {
    console.log(this.a);
    
}
func();
console.log('hi');


// * 'this' in object?
    let user = {
        name: "Rohan",
        getDetails(){
            console.log(this.name,this);
            
        },
        getDetails2: ()=>{
            console.log(this);
            
        }
    }

    // user.getDetails();
    user.getDetails2();


    // * 'this' inside Nested function
    let user2 = {
        name: "piyush",
        age: 23,
        getDetails(){
            const nestedArrow = ()=> console.log(this.name);
            nestedArrow();
            
        },
    };
    user2.getDetails();



// * 'this' inside constructor?
    class newUser {
        constructor(n){
            this.name = n;
        }

        getName(){
            console.log(this.name);
            
        }
    }

    const User = new newUser("sonu");
    User.getName();



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
    setTimeout(function (){
        usr.logMessage();
    },1000)



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
    let calculator = {
        read(a,b){
            console.log(a,b);
            this.a = a;
            this.b = b;
        },
        sum(){
            return this.a+this.b;
            
        },
        mul(){
            return this.a*this.b;
        }
    }
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
    let calc = {
        total: 0,
        add(a){
             this.total+=a;
             return this;
        },
        multiply(val){
             this.total*=val;
             return this;
        },
        subtract(a) {
            this.total-= a;
            return this;
        },
    }
    const result = calc.add(10).multiply(5).subtract(20).add(10)
    console.log(result.total);


    
    
    

    
