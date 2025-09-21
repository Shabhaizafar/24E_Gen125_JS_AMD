console.log(document.getElementById('id1'));
console.log(document.getElementsByTagName('h3')[0]);
console.log(document.getElementsByClassName('class1')[0]);



// How to Access Element Content Using JS : 
// 1. using innerHTML
console.log("Using InnerHTML : ");
console.log(document.getElementById('id1').innerHTML);
console.log(document.getElementsByTagName('h3')[0].innerHTML);
console.log(document.getElementsByClassName('class1')[0].innerHTML);


// 2. using innerText
console.log("Using InnerText : ");
console.log(document.getElementById('id1').innerText);
console.log(document.getElementsByTagName('h3')[0].innerText);
console.log(document.getElementsByClassName('class1')[0].innerText);

// 3. using textContent
console.log("Using textContent : ");
console.log(document.getElementById('id1').textContent);
console.log(document.getElementsByTagName('h3')[0].textContent);
console.log(document.getElementsByClassName('class1')[0].textContent);







// How to Modify/change HTML Content Using JS :
document.getElementById('id1').innerHTML = "New Data";
document.getElementsByTagName('h3')[0].innerText = "Hello Everyone Welcome to JS !!";
document.getElementsByClassName('class1')[1].textContent = "Using JS Changed !!";





// How to Apply/Modify CSS Using JS : 
document.body.style.backgroundColor = "teal";
document.getElementById('id1').style.fontSize = '100px';
document.getElementsByTagName('h3')[0].style.color = "lightblue";
