// ? Currying in Javascript
// Example f(a,b) into f(a)(b)

function f(a){
    return function (b){
        return (a+b);
        
    } 
}
// console.log(f(5)(5));



// * Q 1. write fn for this currying sum(2)(6)(2)?
    function sum(a){
        return function (b){
            return function (c){
                console.log(a+b+c);
                
            }
        }
    }
    sum(2)(6)(1);



/* //* Q 2.
    evaluate("sum")(4)(2) => 6
    evaluate("multiply")(4)(2) => 8
    evaluate("divide")(4)(2) => 2
    evaluate("substract")(4)(2) => 2
*/
    function evaluate(opetation){
        return function (a){
            return function (b){
                if(opetation==="sum") return a+b;
                 else if(opetation==="multiply") return a*b;
                 else if(opetation==="divide") return a/b;
                 else if(opetation==="substract") return a-b;
                 else return "invalid Opetation"
            }
        }
    }
    console.log(evaluate("multiply")(4)(2));
    const total = evaluate("sum");
    console.log(total(33)(33));



// * Q 3. Infinite Currying -> add(1)(2)(3)(4)....(n)?
    function  add(a){
        return function (b){
            if(b) return add(a+b);
            return a;
        }
    }  
    console.log(add(4)(5)());
    



// * Q 4. Currying vs Partial Application
    function sums(a){
        return function (b,c){
            return a+b+c;
        };
    }
    const x = sums(10);
    console.log(x(5,6));
    //or
    console.log(sums(10)(5,6));

    // Currying
    function sumx(a){
        return function (b){
            return function (c){
                return a+b+c;
            };
        };
    }
    


// * Q 5. Manipulating DOM
    function updateElementText(id){
        return function (content){
            document.querySelector("#"+id).textContent=content;
        }
    }
    const updateHeader = updateElementText('heading');
    updateHeader("Hello, Javascript");



// * Q 6. Curry() implementation . write function to
        // Converts f(a,b,c) into f(a)(b)(c);



