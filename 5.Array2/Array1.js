// push pop shift unshift  : 

// var arr = [43,12,21,56,78,98,33];

// var arr = [1,101,100010001,111,100001];
// console.log("Array : ",arr);
// // 1.sort():
// arr.sort();
// console.log("Array : ",arr);


// var arr = [1,101,100010001,111,100001];
// console.log("Array : ",arr);
// // 1.sort():
// arr.sort((a,b)=>{
//     return a-b;
// });
// console.log("Array : ",arr);

// arr.sort((a,b)=>{
//     return b-a;
// });
// console.log("Array : ",arr);
//-------------------------------------------------
var arr = [43,12,21,56,78,98,33];
console.log("Array : ",arr);

// console.log("Foreach :");
// arr.forEach((element,index,selfarr)=>{
//     console.log(element,index,selfarr);
// });

// console.log("Map :");
// arr.map((element,index,selfarr)=>{
//     console.log(element,index,selfarr);
// });

// console.log("Filter :");
// arr.filter((element,index,selfarr)=>{
//     console.log(element,index,selfarr);
// });








console.log("Foreach :");
var ans1 =  arr.forEach((element)=>{
    // if(element>40)
        console.log(element*2);
});
// console.log(ans1);

console.log("Map :");
var ans2 = arr.map((element)=>{
    // if(element>40)
        return element*2;
});
console.log(ans2);

console.log("Filter :");
var ans3 = arr.filter((element)=>{
    // if(element>40)
        // console.log(element*2);
    return element*2 > 100;
});
console.log(ans3);




/*
---

### **filter**

1. From a list of students’ ages, get only those who are eligible to vote (18+).
2. Given an array of product prices, filter out the items that cost more than ₹500.

---

### **map**

1. You have an array of temperatures in Celsius, convert them into Fahrenheit using `map`.
2. From a list of employee names, create a new array where each name is in uppercase.

---

### **forEach**

1. Print each item in a shopping cart array along with its index number.
2. For a list of bank transactions, display each transaction amount with “Credit” or “Debit”.

---

### **sort**

1. Sort an array of movie ratings (numbers) from highest to lowest.
2. Arrange a list of city names in alphabetical order.


*/

