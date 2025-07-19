/*

Arithmetic  + unary 
+,-,*,/,%,++,--

conditional/relational  : 
<,>,<=,>=,==,!=     , ===,!==

logical  :
 && ,|| ,!

assignment  : 
+=,-=,*=,/=,%=


ternary  
(condition) ? code1 : code2;
*/

/*
Arithmetic  + unary 
+,-,*,/,%,++,--
var n1 = 12;
var n2 = 13;

console.log(n1+n2);    // 25

var n1 = 12;
var n2 = 13;

console.log(n1-n2);   // -1

var n1 = 12;
var n2 = "13";
var n2 = "Zafar";

console.log(n1+n2); //1213  (concatination)  (if any variable type string and oprator +)

var n1 = 12;
var n2 = "Zafar";

console.log(n1-n2);   // -1   (all operation) (if any variable type string but that value like a number) 
                                            (except +)
return NaN     if  variable type string with char value


var n1 = 12;
var n2 = true;  //1
console.log(n1+n2); //13 


var n1 = 12;
var n2 = true;  //1
console.log(n1-n2); //11

var n1 = 12;
var n2 = "true";
console.log(n1-n2);  // NaN

var n1 = 12;
var n2 = "true";
console.log(n1+n2);  //12true

var n1 = 12;
var n2 = [11,12];
console.log(n1+n2);  //1211,12


var n1 = 12;
var n2 = [11,12];
console.log(n1-n2);  // NaN



var n1 = "12";
var n2 = '13';
console.log(n1+n2); // 1213

var n1 = "12";
var n2 = '13';
console.log(n1-n2);  // -1 


var n1 = "12";
var n2 = true;
console.log(n1+n2); //12true

var n1 = "12";
var n2 = true; //1
console.log(n1-n2); // 11


var a = 12 ;
a++ ;
console.log(a);

var a = 12 ;
a-- ;
console.log(a);
*/


// conditional/relational  :  
// <,>,<=,>=,==,!=     , ===,!==
// var n1 = 12;
// var n2 = 13;
// console.log(n1>n2); //false
// console.log(n1<n2); //true


// var n1 = 12;
// var n2 = "13";
// console.log(n1>n2); //false
// console.log(n1<n2); //true



// var n1 = "12";
// var n2 = "13";
// console.log(n1>n2); // false
// console.log(n1<n2); // true



// var n1 = 12;
// var n2 = 12;
// console.log(n1==n2);  // true
// console.log(n1!=n2);  // false



// var n1 = 12;
// var n2 = "12";
// console.log(n1==n2);  // t
// console.log(n1!=n2);  // f



// var n1 = 12;
// var n2 = "12";
// console.log(n1===n2);  //  f
// console.log(n1!==n2);  //  t




// logical  :
//  && ,|| ,!

// var n1 = 12;
// var n2 = 13;
// console.log(n1<n2 && n1==12);  //t
// console.log(n1<n2 && n1=="12");//t 


// var n1 = 12;
// var n2 = 13;
// console.log(n1 && n2);  // 13  
// console.log(0 && n2);   // 0
// console.log(n1 && 0);  // 0
// console.log(n1 && "");  // ""
// console.log(n1 && "werty");  // "werty"


// var n1 = 12;
// var n2 = 13;
// console.log(n1 || n2); 
// console.log(n1 || 0); 


for (let i = 0; i < 4; i++) {
    var s = "";
    for (let j = 0; j <= i; j++) {
        s+="* ";
    }   
    console.log(s);
}