const odd=[1,3,5,6,9];
const even=[2,4,6,8,10];
//push the whole array
// odd.push(even);
// console.log(odd);

//concat all the elements
// const whole=odd.concat(even);
// console.log(whole);

//or using spread syntax
// const whole=[...even,...odd];
// console.log(whole);


//  flat array
// const messy=[1,2,3,[4,5,6,[7,8,9,[10,11,12,[13,14]]]]];
// const flattenArr=messy.flat(Infinity);
// console.log(flattenArr);
// const depthArr=messy.flat(3);
// console.log(depthArr);

console.log(Array.isArray("ani")); //false
//make a array
console.log(Array.from("Aniruddh"));
console.log(Array.from({name:"Aniruddh"})) // [] intresting


//make a array of different variables
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3,10,20,"Bye"));