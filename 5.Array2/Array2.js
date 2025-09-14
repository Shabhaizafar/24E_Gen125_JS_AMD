/*
    push pop shift unshift

    sort map filter foreach

    reverse join fill some every slice splice reduce


    
*/ 
// var arr = [23,14,65,43,87,1];
//          0  1  2  3
// console.log("Array : ",arr);

// reverse : 
// arr.reverse();
// console.log("Array : ",arr);

// join : 

// var fname = [1,true,'ya','l Technosoft'];

// console.log(fname.join());
// console.log(fname.join(''));

// console.log(fname.join(' | '));   //return string 


// arr.fill(0);
// console.log(arr);

// arr.fill(0,1);
// arr.fill(0,1,3);
// console.log(arr);

// slice : 
// console.log(arr.slice());
// console.log(arr.slice(2));
// console.log(arr.slice(2,4));


// splice : 
// arr.splice();
// arr.splice(2);
// arr.splice(2,2);
// console.log(arr);



//  every some reduce 
// var arr = [23,14,65,43,87,1];
// console.log("Array : ",arr);



// var ans =   arr.every((element)=>{
//     if(element<80)
//         return true;
// });

// console.log("Ans",ans);


// var arr = [23,14,65,43,7,1];
// console.log("Array : ",arr);

// var ans =   arr.some((element)=>{
//     if(element>80)
//         return true;
// });

// console.log("Ans",ans);



//----------------------------------
// var arr = [1,2,3,4,5];
// console.log("Array : ",arr);


// arr.reduce((previousvalue,currentvalue)=>{
//     console.log(previousvalue,currentvalue);
//     return currentvalue;
// });


// var ans = arr.reduce((previousvalue,currentvalue)=>{
//     // console.log(previousvalue,currentvalue);
//     return currentvalue+previousvalue;
// });
// console.log(ans);


// ### 🔹 `fill()`

// In an online quiz app, you want to show **10 unanswered questions** as `"Not Attempted"`.
// Generate an array of length 10 pre-filled with `"Not Attempted"`.

// var arr = "0123456789".split('').fill("Not Attempted");
// console.log(arr);

// var arr= [];
// for (let i = 0; i < 10; i++) {
//     arr.push('');
// }
// arr.fill("Not Attempted");
// console.log(arr);


/*

### 🔹 `reverse()`

You are building a chat app. Messages are stored in an array in the order they were sent:
`["Hi", "How are you?", "I'm fine", "Great!"]`.
Show the chat in reverse order (latest message first).

---

### 🔹 `join()`

In an eCommerce app, you have a cart with item names:
`["Shoes", "Watch", "Bag"]`.
Display them in the bill as:
`"Shoes, Watch, Bag"`.

---

### 🔹 `fill()`

In an online quiz app, you want to show **10 unanswered questions** as `"Not Attempted"`.
Generate an array of length 10 pre-filled with `"Not Attempted"`.

---

### 🔹 `some()`

In a payment system, you store transactions as amounts:
`[200, 150, 500, 50]`.
Check if **any transaction is above ₹400**.

---

### 🔹 `every()`

In an exam system, marks are recorded as `[85, 92, 78, 88]`.
Check if **every student scored more than 40** (passing mark).

---

### 🔹 `slice()`

In a movie streaming app, the “Top Picks” section should only show the **first 3 movies** from a trending list:
`["Inception", "Interstellar", "Tenet", "Dunkirk", "Memento"]`.

---



### 🔹 `reduce()`

In an online shopping cart, item prices are `[1200, 800, 450, 150]`.
Find the **total bill amount** using `reduce()`.

*/

// ### 🔹 `splice()`

// In a contacts list: `["John", "Emma", "Michael", "Sophia"]`,
// you want to remove `"Michael"` and add `"David"` instead.

var d = "Emma";
var temp;
var arr =["John", "Emma", "Michael", "Sophia","Royal"];
console.log(arr);

// console.log(arr.indexOf(d));

for (let i = 0; i < arr.length; i++) {
    if(d==arr[i]){
        temp = i;
        break;
    }
}

var more =  arr.splice(temp).splice(1);
arr.push("David",...more);

console.log(arr);


