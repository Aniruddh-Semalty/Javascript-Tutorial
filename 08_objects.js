//singleton always a single object from constructor (Object.create())

const user={
    "name":"Aniruddh",
    "full name":"Aniruddh semalty", //you cannot access space seperated keys using dot notation always use bracket notation
    age:24,
    location:"Dehradun",
    email:"ani@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"],
}
console.log(user.email);
console.log(user.name);
console.log(user["name"]);
console.log(user["full name"]);



//define a symbol as key in object
let mySym=Symbol("Aniruddh");
const obj={
    name:"Neeraj",
    [mySym]:"This is my symbol",
}

console.log(obj[mySym]);
console.log(typeof obj[mySym]);
obj.name="Aniruddh semalty"; //change property of object
console.log(obj);

//freeze the object

Object.freeze(obj);
obj.name="Ankit"; //doesnt give error in freeze
console.log(obj);


//add function in ob;
const newObj={
    name:"Abhishek",
    greeting:()=>{
        console.log("Hello");
    },
    sayBye:function(){
        console.log(`${this.name} bye`);
    }
}
newObj.greeting()
console.log(newObj.sayBye);
newObj.sayBye();
