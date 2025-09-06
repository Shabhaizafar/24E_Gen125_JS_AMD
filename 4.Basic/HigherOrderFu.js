function main(){
    var choice = prompt("1. 'str' type for String.\n2. 'num' type for Number.\n\nEnter your Choice : ");
    switch (choice) {
        case 'str': forString();
            break;
        case 'num': forNumber();
            break;
    
        default: console.log("Choose Valid Option !!");
            break;
    }
}
main();




function forNumber(){
    var n1 = +prompt("Enter the Value of N1 : ");
    var n2 = +prompt("Enter the Value of N2 : ");
    var choice = prompt("1. '+' type for Addition.\n2. '-' type for Subtraction.\n\nEnter your Choice : ");

    switch (choice) {
        case '+': Addition(n1,n2);
            break;
        case '-':
            break;
        default: console.log("Choose Valid Option !!");
            break;
    }
}


function Addition(a,b){
    console.log("Addition : ",a+b);
}


function forString(){

}