// DOM : 
// Access Element  : 
// Access Element Content : 
// Add/Modify Content : 
// Add/Modify CSS : 




// How to Add New Element in a HTML Using JS : 


// 
// document.write("Hii");
// document.write("<h2>This is New Element</h2>");

// Step : 1  => create a new element 
var heading2 = document.createElement('h2');
// console.log(heading2);

// Step : 2  => add a Content (optional)
heading2.innerHTML = "JS Content";


// Step : 3  => add new Element in a HTML File 
// access any element 
// document.body
var ans = document.getElementsByTagName('div')[0];

// add new child 
// document.body.appendChild(heading2);

ans.appendChild(heading2);