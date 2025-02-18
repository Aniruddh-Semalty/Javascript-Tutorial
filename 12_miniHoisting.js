addOne(10) //functions are hoisted in js you can access function before there declaration
function addOne(num){
    console.log(num+1);
}
// addTen(100); will giver error because function expressions are not hoisted 
const addTen=function(num){
    console.log(num+10);
}
addTen(20);

// console.log(a); ERROR  will give error because cariables declared using let and const are not hoisted
// console.log(b);ERROR will give error because cariables declared using let and const are not hoisted
console.log(c); // UNDEFINED will give undefined but not error beacuse varibles declare using var are hoisted but there initialization in not hoisted so it will give undefined
let a=10;
const b=20;
var c=30