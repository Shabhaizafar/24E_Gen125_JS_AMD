// 2. Expression Function : 
/*
Syntax : 
    Step : 1   Function Declaration + Initialization : 
        var/ler/const variablename = function (){
            //code;
        }

    Step : 2  Function Calling/invoked
        variablename();
*/ 

// a. without argument and without return type.
// Function Declaration + Initialization
var sayHello = function (){
    console.log("Hello Everyone !!");
}

// sayHello();  //calling/invoked
// sayHello();

// b. with argument and without return type.
let addition = function (n1,n2){     //n1,n2  Perameters
    console.log(n1,n2);
    console.log(typeof n1,typeof n2);

}

// addition("Zafar",13);   //12,13 Arguments

// c. without argument and with return type.


const givenData = function (){
    //code
    return "Royal Technosoft";
}

// 1st :  direct use
// console.log(givenData());

// 2nd : Stored data then use : 
// var ans = givenData();
// console.log(ans.toUpperCase());



// d. with argument and with return type.

var result = function (marks){
    if(marks>33)
        return "Pass";
    return "Fail";
}
// console.log(result(50));
// console.log(result(20));