// ? Lexical Scope

// global scope
function local(){
    // local scope
    var username = "JavaScript";
}
// console.log(username);
local();

// ? Closeure in Javascript
    function myFun(){
        var name = "Ravikant Rao";
        function displayName(){
            console.log(name);
            
        }
       return displayName;
    }
    var Func = myFun();
    Func();  // or
     myFun()();


// * Scope Channing in Closure
    // global scope
    var e=10;
    function sum(a){
        return function (b){
            return function (c){
                // outer functions scope
                return function (d){
                    // local scope
                    return a+b+c+d+e;
                }
            }
        }
    }

    console.log(sum(1)(2)(3)(4)); //log 20



// * Q 1. What will be logged to console?
    let count = 0;
    (function printCount(){
        if(count==0){
            let count = 1; // shadowing
            console.log(count);
            
        }
        console.log(count);
        
    })();


// * Q 2. Write a function that would allow you to do this?
    var addSix = createBase(6);
    addSix(10); //returns 16
    addSix(21); //returns 27

    function createBase(a){
        return function (b){
            console.log(a+b);
            
        }
    }
    addSix = createBase(10);
    addSix(10);

console.log("closure");

// ! Q 3. Time Optimization with closure
    function find(index){
        let a =[];
        for(let i=0; i<1000000; i++){
            a[i] = i*i;
        }
        console.log(a[index]);
        
    }
    console.time("6"); //measuring the time it takes
    find(6);
    console.timeEnd("6");
    console.time("12");
    find(12);
    console.timeEnd("12");
    
    // * Optimize with closure
    function finds(){
        let a=[];
        for(let i=0; i<1000000; i++){
            a[i] = i*i;
        }
        return function (index){
            console.log(a[index]);
        }
        
    }
    var closure = finds();
    console.time("6"); //measuring the time it takes
    closure(6);
    console.timeEnd("6");
    console.time("12");
    closure(12);
    console.timeEnd("12");


// ! Q 4. Block Sope and setTimeout
    function a(){
     for(var i=0; i<3; i++){
        setTimeout(function log(){
            // console.log(i); //what is logged
            
        },i*1000)
     }
    }
    a();
    // we can fix it 👆  using let. because let is block scope
    var a=10;
    {
        var a=122;
        console.log(a);  
    }
    console.log(a);

    // ? print 0,1,2 whitout let
        for(var i=0; i<3; i++){
            function inner(i){
                setTimeout(function log(){
                     console.log(i); //what is logged
            
                },i*1000)
            }
            inner(i);
        }



// ? Q 5. How would u use a closure to create a private counter?
    function counter(){
        var _counter = 0;
        function add(increment){
            _counter+=increment;
        }

        function retrive(){
           console.log("Counter = "+_counter);
            
        }

        return {
            add,
            retrive,
        }
    }
    const c = counter();
    c.add(5);
    c.add(10);
    c.retrive();



// * Q 6. What is Module Pattern?  //senior level iv
    var Module = (function (){
        function privateMethod() {
            console.log("private");
            
        }

        return {
            publicMethod: function () {
                console.log("Public");
                
            },
        };
    })();

    Module.publicMethod();
    Module.privateMethod();



// * Q 7. Once Pollyfill? (write a fn that run only once )
// * Q 8. Caching or memoization in javaScript?


    
