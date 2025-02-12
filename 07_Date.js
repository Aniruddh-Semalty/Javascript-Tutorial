const date=new Date(); //date object of type object

console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(date.toJSON());
console.log(Date.now());

let birthDate=new Date(2002,1,6,12,6,20);
console.log(birthDate.toDateString());
console.log(birthDate.toLocaleString());
console.log(birthDate.getDay());
console.log(birthDate.getDate());
console.log(birthDate.getMonth());
console.log(birthDate.getTime());


const time=Date.now();
console.log(Math.floor(time/1000)); //in seconds

console.log(birthDate.toLocaleString("default",{
    weekday: "long",
    year:"numeric",

}));