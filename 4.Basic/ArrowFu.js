// // 3. Arrow Function : 
// /*
// Syntax : 
//     Step : 1   Function Declaration + Initialization : 
//         var/ler/const variablename =  ()=>{
//             //code;
//         }

//     Step : 2  Function Calling/invoked
//         variablename();
// */ 

// // a. without argument and without return type.
// // Function Declaration + Initialization
// var sayHello =  () => {
//     console.log("Hello Everyone here !!");
// }

// // sayHello();  //calling/invoked
// // sayHello();

// // b. with argument and without return type.
// let addition =  (n1,n2)=>{     //n1,n2  Perameters
//     console.log(n1,n2);
//     console.log(typeof n1,typeof n2);

// }

// // addition("Zafar",13);   //12,13 Arguments

// // c. without argument and with return type.


// const givenData =  ()=>{
//     //code
//     return "Royal Technosoft";
// }

// // 1st :  direct use
// // console.log(givenData());

// // 2nd : Stored data then use : 
// // var ans = givenData();
// // console.log(ans.toUpperCase());



// // d. with argument and with return type.

// var result =  (marks) => {
//     if(marks>33)
//         return "Pass";
//     return "Fail";
// }
// // console.log(result(50));
// // console.log(result(20));





// name Function
// function printNumber(n){
//     console.log(n);
// }
// printNumber(12);


// // expresstion Function 
// var printNumber = function (n){
//     console.log("expresstion : ",n);
// }
// printNumber(12);



// Arrow Function 
// var printNumber =  (n) => {
//     console.log("Arrow : ",n);
// }
// printNumber(12);


// var printNumber =  n => {
//     console.log("Arrow1 : ",n);
// }
// printNumber(12);



// var printNumber =  a => console.log("Arrow2 : ",n);
// printNumber(12);


// var withrtn = () =>{    return  "Hello";}


// console.log(withrtn());





// var printNumber =  (n1,n2) => console.log("Addition : ",n1+n2);
// printNumber(12,13);



/*

Q1. Arrow Function (Real-Life Scenario)

You are building a shopping cart system. Write an **arrow function** `calculateTotal` that takes an array of item prices and returns the total sum of all items.
Example Input: `[199, 299, 499]`
Expected Output: `997`

Q2. Function Expression (Real-Life Scenario)

A food delivery app needs to check if a restaurant is open or closed. Write a **function expression** `isOpen` that takes the current hour (0–23) and returns `"Open"` if the hour is between 10 AM and 11 PM (10–23), otherwise `"Closed"`.
Example Input: `9`
Expected Output: `"Closed"`


*/




