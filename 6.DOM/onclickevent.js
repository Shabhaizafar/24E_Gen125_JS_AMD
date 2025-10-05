

// Events : 

// Mouse Event : 
// 1 onclick

// function onclickevent(){
//     console.log(document.getElementsByTagName('button')[0]);
// }


// document.getElementsByTagName('button')[0].onclick = onclickevent;




// document.getElementsByTagName('button')[0].onclick = function (){
        // console.log(document.getElementsByTagName('button')[0]);

    // }
    
    
    // document.getElementsByTagName('button')[0].onclick = function (){
        //     document.getElementsByTagName('button')[0].style.backgroundColor = 'red';
        // }
        
// document.getElementsByTagName('button')[0].onclick = function (event){
//         console.log(document.getElementsByTagName('button')[0]);
//     // console.log(event.target);
// }


document.getElementsByTagName('section')[0].onclick = function (event){
    // console.log(event.target.innerHTML);
    document.getElementsByTagName('div')[0].innerHTML += event.target.innerHTML;
}












