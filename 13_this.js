// const user={
//     username:"Aniruddh",
//     welcomeMessage:function(){
//         console.log(username+" Welcome back"); //will give error this is not defined
//     }
// }
// user.welcomeMessage();

// const user={
//     username:"Aniruddh",
//     callWelcome:function(){this.welcomeMessage()}, //will work fine
//     welcomeMessage:function(){
//         console.log(this.username+" Welcome back"); //this here refers to current object;
//         // console.log(this.welcomeMessage());//endless recursion
//     }
// }
// console.log(this);
// user.welcomeMessage();
// user.username="Semalty";

// user.callWelcome();

//+++++++++++++++++++++++++++++++++This is arrow function++++++++++++++++++++++++++++++++++++
//this in simple fn
// function sayHi(){
//     let username="Aniruddh";
//     console.log(this);
//     console.log("Hi");
//     console.log(this.username); //undefined no this in simple function and arraw function only use inside objects

// }
// // sayHi();



// const name="Neeraj"
// const user={
//     username:"Aniruddh",
//     sayHi:()=>{
//         console.log("hi "+this.username); //undefined no current context inside arrow fns
//         console.log("Hi "+this.name); //undefined
//         console.log(this); // {} refers to empty global object 
//     }
// }
// user.sayHi();
 

//arrow function user case
[12,30,4234,2342,2342].forEach(num=>console.log(num)); 