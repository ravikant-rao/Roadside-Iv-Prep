// ? Objects in Javascript
    const user = {
        name: "Ravikant Rao",
        countary: "india",
        "is a in citizen": true,
        
    }

    user.state = 'Bihar';
    delete user.countary;
    console.log(user);
    console.log(user["is a in citizen"]);
    
    
// * Objects in Javascript ?
    const func = (function(a){
        delete a;
        return a;
    })(5);
    console.log(func);


// * add value dynamically?
    const property = "firstName";
    const name = "sonu";
    const user2 ={
        [property] : name,
    }
    console.log(user2);


// * Loop in Obj?
    for(let key in user){
        console.log(key, ": " + user[key]);
        
    }



// * Q 1. What's the output?
    const obj = {
        a: "one",
        b: "two",
        a: "three",
    }
    console.log(obj);
    
    
// * Q 2. Create a function multiplyByTwo(obj) that myltiplies all numeric property values of obj by 2.
    let nums = {
        a: 100,
        b: 200,
        title: "My nums"
    }    
    function multiplyByTwo(obj){
        for(let key in obj){
            if(typeof obj[key] === 'number'){
                nums[key] = nums[key]*2;
            }
        }
        console.log(nums);
        
    }
    multiplyByTwo(nums);



// * Q 3. What's the Output of the following code?
    const a = {};
    const b = {key: "b"};
    const c = {key: "c"};
    a[b] =123;
    a[c] = 456;

    console.log(a[b]); 


// * 4. What's JSON.strigify and JSON.parse?
    const user3 ={
        name: "Piyush",
        age: 24,
    }   
    const strObj = JSON.stringify(user3);
    console.log(strObj);
    console.log(JSON.parse(strObj));



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
    let newUser = {
        fullName: "Tony",
        age: 22,
    }
    const {fullName} = newUser;
    const {age:curAge} = newUser;
    console.log(fullName,curAge);


    // 2nd
    let user4 = {
        name: "Raghav",
        age: 23,
        fullName: {
            first: "Raghav",
            last: "Yaduvanshi"
        },
    };

    const {fullName:{first}} = user4;
    console.log(first);



// * Q 9. What's the output ?
    let d = {greetings: "hey!"};
    let e;
    e=d;
    d.greetings = "hello";
    console.log(d.greetings);
    

// * Q 10. what's the output?
    console.log({a: 1} == {a: 1});
    console.log({a: 1} === {a: 1});
    

// * Q 11. what's the output?
    let person = {name: "Ranjan"};
    const member = [person];
    person = null;

    console.log(member);



// * Q 12. How to deep copy / clone an object ?
    let usr = {
        name: "Raman",
        age: 22,
    }
    let obClone = Object.assign({},user);
    let objClone = JSON.parse(JSON.stringify(user));
    const usrClone = {...usr};
    obClone.name = "Rahul";
    console.log(usr,objClone);
    

    
    
    

    
    
    
     

    