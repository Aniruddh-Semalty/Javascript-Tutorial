//BASED ON THE MEMORY AND ACCESSBILITY THERE ARE TWO TYPES IN JS I.E PRIMITIVE AND NON-PRIMITIVE DATA TYPE
// PRIMITIVE TYPES OR PASS BY VALUE
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



//NON-PRIMITIVE OR PASS BY REFERENCE 
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
