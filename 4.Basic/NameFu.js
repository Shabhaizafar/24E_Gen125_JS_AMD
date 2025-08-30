// 1. Name Function : 
/*
Syntax : 
    Step : 1   Function Declaration + Initialization : 
        function functioname(){
            //code;
        }

    Step : 2  Function Calling/invoked
        functioname();
*/ 

// a. without argument and without return type.
// Function Declaration + Initialization
function sayHello(){
    console.log("Hello Everyone !!");
}

// sayHello();  //calling/invoked
// sayHello();

// b. with argument and without return type.
function addition(n1,n2){     //n1,n2  Perameters
    console.log(n1,n2);
    console.log(typeof n1,typeof n2);

}

// addition("Zafar",13);   //12,13 Arguments

// c. without argument and with return type.


function givenData(){
    //code
    return "Royal Technosoft";
}

// 1st :  direct use
// console.log(givenData());

// 2nd : Stored data then use : 
// var ans = givenData();
// console.log(ans.toUpperCase());



// d. with argument and with return type.

// function result(marks){
//     if(marks>33)
//         return "Pass";
//     return "Fail";
// }
// console.log(result(50));
// console.log(result(20));



/*
a) Without argument & without return type
1. Write a named function to display numbers 1 to 5.

b) With argument & without return type
2) Write a named function that prints the multiplication table of a given number.

c) Without argument & with return type
3) Write a named function that returns a random number between 1–100.

d) With argument & with return type
4) Write a named function that returns the square of a given number.
5) Write a named function that checks if a string is palindrome and returns true/false.

*/

// function ispalindrome(str){
//     var revstr = "";
//     for (let i = str.length-1; i >=0 ; i--) {
//         revstr+=str[i];   //revstr = ""     //revstr = revstr+str[2] = ""+"j" = j
//             //  revstr = revstr+str[1] = "j"+"a" = ja
//             //  revstr = revstr+str[0] = "ja"+"r" = jar
//     }
//     if(revstr==str)
//         return true;
//     return false;
// }

// console.log(ispalindrome("madam"));














