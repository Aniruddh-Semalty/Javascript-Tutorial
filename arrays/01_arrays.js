// const arr=[2,4,6,10,12,14];
// console.log(typeof arr); //object;
// console.log(arr);

const newArr=new Array("Aniruddh","semalty",1)
console.log( newArr);

// //push value to the end of array
// newArr.push("#");
// newArr.push(["1",2,3]);
// console.log(newArr);

// //removes the last element
// const last=newArr.pop();
// console.log(last)
// console.log(newArr);


// //Add element to start of the array
// newArr.unshift("Start using unshift");
// console.log(newArr);

//Removes the first element and remove it
// const str=newArr.shift();
// console.log(str);
// console.log(newArr);


//slice and splice
let nums=[1,2,3,4,5,6];
const n1=nums.slice(1,5);
console.log(nums);
console.log(n1);
const n2=nums.slice(-2,-5);
console.log(n2);

//splice use to delete element in the original array
const newNums=nums.splice(1,4);
console.log(nums);
console.log(newNums);
nums=[1,2,3,4,5,6];
nums.splice(1,2,[20,30,40,50])
console.log(nums);


//inlcudes
console.log(nums.includes(1));
console.log(nums.includes(""));
console.log(nums.indexOf(1))
console.log(nums.indexOf(""));


//join
nums=[1,2,3];
let numString=nums.join("#**#");
console.log(numString);