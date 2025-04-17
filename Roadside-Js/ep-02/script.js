// ?Functions in Javascript
//* Q. 1. What is Function Decrarations?
    function square(num){
        return num*num;
    }


//* Q. 2. What is Function Expression?
// When we store a function inside a variable is known as function expression.
    const square1 = function(num){
        return num*num;
    }


//* Q. 3. What are First Class Functions?
    function square2(num){
        return num*num;
    }

    function displaySquare(fn){
        console.log("Square is " + fn(5));
        
    }
    displaySquare(square2);


//* Q. 4. What is IIFE?
    (function square3(num){
        console.log(num*num);
        
    })(6);


//* Q. 5. IIFE - O/P Based Question?
    (function (x){
        return ( function (y){
            console.log(x);
            
        })(2);
    })(1);


//* Q. 6. Function Scope - O/P Based Question?
    for(var i=0; i<5; i++){
        setTimeout(function (){
            console.log(i);
            
        }, i*1000);
    }


//* Q. 7. Function Hoisting?
    myFunc();
    console.log(x);
    function myFunc(){
        console.log("i am function");
        
    }
    var x=6;
    console.log(x);


//* Q. 8. Function Hoisting  O/P Based Question?
    var z=21;
    var fun = function (){
        console.log(z);
        var z=20;
        
    }
    fun();


//* Q. 9. Params vs Arguments?
    function myfun(num){ //Params
        console.log(num+num);
        
    }
    myfun(3); //Arguments


//* Q. 10.  Spread Vs Rest Operator?
    function multi(...nums){ //Rest 
        console.log(nums[0]*nums[1]);
        
    }
    let arr = [4,5];
    multi(...arr); //Spread


//* Q. 11. Rest O/P Based?
    const funct = (a,x,y,...nums)=>{
        console.log(x,y,nums);
        
    }
    funct(2,3,4,5,6,6,7,8);


//* Q. 12. Callback Function
    function print(name){
        console.log("My name is ",name);
        
    }
    function printName(cb){
        let name = "Ravikant";
        cb(name);
    }
    printName(print);


//* Q. 13. Arrow function?
    const myFunction = ()=>{
        console.log("Arrow Function");
        
    }


//* Q. 14. Diff B/w Arrow function and normal function?
    // - syntax diff.
    // - arguments
    function fns(){
        console.log(arguments);
        
    }
    fns(1,2,3);
    const fnArr = ()=>{
        console.log(arguments);
        
    }
    fnArr(2,3,4,5);

    // this -keyword value
    const obj = {
        name: "Ravikant Rao",
        fn1: ()=>{
            console.log("Hello",this.name);
            
        },
        fn2(){
            console.log("Hello",this.name);
            
        }
    }
    obj.fn1();
    obj.fn2();
    