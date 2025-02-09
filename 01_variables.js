const accountPassword="1234345"
// accountPassword="123"  will give error beacuse const cannot be reinitialized
// const accountPassword="123"; cannont be redeclared of same type

    //-----------------------------var(Dont use it in modern js because of functional and block scope) -------------------------------------

var name="Aniruddh"
name="Semalty" //can be reinitalized 
console.log(name);
var name="Neerraj"; //can be redeclared
console.log(name);

//------------------------------------let -------------------------------------------
let role="Software engineer"
console.log(role);
role="Full stack engineer";
//let role="Backend developer" //cannot be redclared
console.log(role);


//-----------------------------without any keyword---------------------------------------
rollno=12;  //can also decalre variables using let var and const
console.log(rollno);
console.log(typeof(rollno))