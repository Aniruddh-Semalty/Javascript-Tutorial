//other types to number
let name=Number("12")
console.log(typeof name);
console.log(name);

name=Number("Aniruddh")
console.log(typeof(name)) //number 
console.log(name); //NaN not a number

name=Number(true);
console.log(typeof(name)) //number
console.log(name); //1

/*
other types to number
"value"=>value|type
"12"=>12 number
"12a"=>NaN number
"true"=>1 number
"false"=>0 number
*/


// other types to string
let score=10;
score=String(score);
console.log(score);
console.log(typeof(score)); //string

score=String(true);
console.log(score); //true
console.log(typeof(score));//string

/*
other to string 
12=>"12" string
true="true" string

*/

//other to booleans
score=Boolean(12);
console.log(score); //true
console.log(typeof(score)); //boolean

score=Boolean(0);
console.log(score); //false
console.log(typeof(score)); //boolean

score=Boolean("");
console.log(score); //false
console.log(typeof(score)); //boolean

score=Boolean("avb");
console.log(score); //true
console.log(typeof(score)); //boolean


/*
other to booleans
12=>true boolean
"abs"=>true boolean
""=>false boolean
0=>false boolean
*/