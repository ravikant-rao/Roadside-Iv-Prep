// * what is map()?
const nums = [1,2,3,4];

const multiplyTwo = nums.map((num,i,arr)=>{
    return num*2;
});

console.log(multiplyTwo);

// what is filter()?
    const nums2 = [2,3,4,5,6,7,8];
    const moreThanTwo = nums2.filter((num,i,arr)=>{
        return num > 2;
    });

    console.log(moreThanTwo);



// * what is reduce();
    const nums3 = [1,2,3,4];
    const sum = nums3.reduce((acc,curr,i,arr)=>{
        return acc+curr;
    },0)
    console.log(sum);



// * Polyfill for map()
    // Array.map((num,i,arr)=>{ });
    Array.prototype.myMap = function (cb){
        let temp = [];
        for(let i=0; i<this.length; i++){
            temp.push(cb(this[i],i,this));
        }

        return temp;
    };

    const nums4 = [2,3,4,5];
    const multiplyFour = nums4.myMap((num,i,arr) => {
        return num*4;
    })
    console.log(multiplyFour);



// * Pollyfill for filter()

    Array.prototype.myFilter = function (cb){
        const temp = [];
        for(let i=0; i<this.length; i++){
            if(cb(this[i],i,this)) temp.push(this[i]);
        }
        return temp;
    };

    const num5 = [2,3,4,5,6]
    const lessThanFive = num5.myFilter((num,i,arr)=>{
        return num<5;
    });
    console.log(lessThanFive);
    

// * Pollyfill for reduce()
    // arr.reduce((acc,i,arr)=>{}, initialValue);

    Array.prototype.myReduce = function (cb, initialValue){
        var accumulator = initialValue;

        for(let i=0; i<this.length; i++){
            accumulator = accumulator ? cb(accumulator,this[i],this) : this[i];
        }
        return accumulator;
    }
    const nums6 = [1,2,3,4];
    const sumAll = nums6.myReduce((acc, curr, i, arr)=>{
        return acc + curr;
    }, 0);

    console.log(sumAll);




// * map, filter and reduce - O/P Based Questions
// 1. Return Only name of students in Capital

    let students = [
        {name: "Piyush", rollNumber: 21, marks: 80},
        {name: "Raman", rollNumber: 32, marks:58},
        {name: "sonu", rollNumber: 44, marks:38},
        {name: "Diljit", rollNumber: 77, marks:88},
    ]
    // method1
    let studentsName = [];
    for (let i = 0; i<students.length; i++) {
        studentsName.push(students[i].name.toUpperCase());
    }
    console.log(studentsName);

    // method2
    let names = [];
    for(let student of students){
        names.push(student.name.toUpperCase())
    }
    console.log(names);

    // withMap
    names = students.map((details,i,arr)=>{
        return details.name;
    })
    console.log(names);
    
    

// * Q 2. Return only details of those who scored mor than 60 marks
    const filteredStudents = students.filter((stu)=>{
        return stu.marks>60;
    });
    console.log(filteredStudents);

    

//* Q Sum of marks of all students

    const totalMarks = students.reduce((acc,curr)=> acc+curr.marks,0);
    console.log(totalMarks);
    
// * Find Studen name over marks 60;
    const studentsOverMarks60 = students.filter((stu)=> stu.marks>60).map((stu)=> stu.name);
    console.log(studentsOverMarks60);



// * 6. Return total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60.
    const totalmarks = students.map((stu)=>{
        if(stu.marks<60){stu.marks+=20}
        return stu;
        
    }).filter((stu)=> stu.marks>60).reduce((acc,curr)=> acc+curr.marks,0);
    
    console.log(totalmarks);
    
    
    




    
