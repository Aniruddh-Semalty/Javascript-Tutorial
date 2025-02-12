const name="Aniruddh";
const age=24;
// console.log(typeof name);

//modern syntax or string interpolation
// console.log(`Hello my name is ${name} and my age is ${age}`);

const gameName=new String("God of war");
console.log(typeof gameName);//string object;
// console.log(gameName.__proto__);
// console.log(gameName.length); //10
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2)); //d
// console.log(gameName.charAt(12)); //""
// console.log(gameName.indexOf("w")); //7
// console.log(gameName.indexOf("v")); //-1
// console.log(gameName.concat(" is a fantastice"));
// console.log(gameName.endsWith("war"));
// console.log(gameName.startsWith("God"));
// console.log(gameName.includes("of"));
// console.log(gameName.includes("fo"));
// console.log(gameName.replace("God","Devil")); //does not replace in original string

const praise="Aniruddh semalty is genius";
const arr=praise.split(" ");
console.log(arr);
const nameArr=praise.split(" ",2);
console.log(nameArr);

const temp="                      hi my      love            ";
console.log(temp);
console.log(temp.trimStart());
console.log(temp.trimEnd());
console.log(temp.trim());

const bhai="Abhishek";
console.log(bhai.slice(0,4));
console.log(bhai.substring(0,4));
console.log(bhai.slice(-7,-2));
console.log(bhai.slice(3,-2));
console.log(bhai.substring(3,-2));


