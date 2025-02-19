//iife using normal fns
(function connectToDb(){
    console.log("Db connected");
})(); //always use semicolons after iife so that js knows where iife gets terminated unless you will get error;


//iife using arrow fns
( ()=>{
    console.log("Print");
}
)(); 

//pass args to iffe

((...nums)=>{
    let res=0;
    for (let num of nums){
        res+=num;
    }
    console.log(res);
})(1,2,3,4,5,6,10);