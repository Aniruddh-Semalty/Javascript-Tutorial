function greet()
{
    const username="Aniruddh";
    function greetUsername(){
        const greetMessage="Hello";
        console.log(greetMessage+" "+username) //child function can take variable from its parent but parent cant take variables from its child
    }
    // console.log(greetMessage);  //this is in greetUsername function scope so greet can access that
    greetUsername();
}
greet(); 


//ex->parents apne bachon se ice cream nhi le skte lekin bache apne parents ki ice cream le skte hai
//Everything inside {} is a scope i.e for defining a scope you can use {} like if statement scope is different from else statement scope
