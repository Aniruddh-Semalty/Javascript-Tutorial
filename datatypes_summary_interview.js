//BASED ON THE MEMORY AND ACCESSBILITY THERE ARE TWO TYPES IN JS I.E PRIMITIVE AND NON-PRIMITIVE DATA TYPE 
// PRIMITIVE TYPES OR PASS BY VALUE                  STORE IN STACK MEMORY
/*
- Number
- Boolean
- String
- null
- undefined
- Symbol
- Bignint
*/

let id=Symbol("123");
console.log(id);
console.log(typeof id);
let otherId=Symbol("123");
console.log(id);
console.log(id===otherId);

let bigNumber=3289548978912758245n;
console.log(typeof bigNumber)



//NON-PRIMITIVE OR PASS BY REFERENCE  //STORE IN HEAP MEMORY
/*
-OBJECT
-ARRAY
-FUNCTION
*/  
let arr=[1,2,3,43];
console.log(typeof arr);  //object
let obj={
    1:"Aniruyddh",
    2:"Semalty",
}
console.log(typeof obj); //object


let func=function(){
    console.log("Hi");
}
console.log(func);
console.log(typeof func); //function object
console.log(typeof null); //object null is also treated as object




//stack and heap memory 

console.log("                           MEMORY          ")
let user="Aniruddh";
let anotheruser=user; //new copy of memory is created in stack
anotheruser="Neeraj";
console.log(user);
console.log(anotheruser);

let userOne={
    name:"Aniruddh"
}
let userTwo=userOne;
console.log(userOne.name);
console.log(userTwo.name);
userTwo["name"]="Abhishek"; //will change both objects beacuse memory is shared
console.log(userOne.name);
console.log(userTwo.name);
