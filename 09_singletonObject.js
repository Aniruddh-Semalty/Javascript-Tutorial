// let obj1=new Object();
// console.log(obj1);
// obj1.name="Aniruddh";
// obj1.last="Semalty";
// console.log(obj1);
// let obj2={
//     name:"a",
//     class:'2'
// }
// obj2.gender="m";
// console.log(obj2);


// let obj3=Object.assign(obj1,obj2);
// console.log(obj1);
// console.log(obj3);

//or
// let obj3={...obj1,...obj2};
// console.log(obj3);

let user={
    name:"Aniruddh",
    tech:"MERN",
    exp:2,
}
console.log(Object.keys(user)); //return array of keys
console.log(Object.values(user));
console.log(Object.entries(user)); //return array of key and values

console.log(user.hasOwnProperty("exp"));
console.log(user.hasOwnProperty("expi"));
