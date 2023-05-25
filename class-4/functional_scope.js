//Functional Scope of Js variables
function scope1(){
    var top = "top";
    //accessing the variable before it's declaration
    bottom = "bottom";
    console.log("The value of bottom variable is:",bottom);
    //declaring a variable using var keyword
    var bottom;
}
//executing the function
// scope1();// It doesn't give any error 
//Above program is the best example of hoisting 
//Hoisting -> It is a concept in Js Where variable is used before it's declaration.

//the above program is same as the below program 
function scope1(){
    var top = "top";
    var bottom;
    //accessing the variable before it's declaration
    bottom = "bottom";
    console.log("The value of bottom variable is:",bottom);
    //declaring a variable using var keyword
    // var bottom;
}

// function scope2(print){
//     if(print){
//         //local variable of if block 
//         var insideIf = '12';
//     }
//     console.log("The insideIf variable value is: ",insideIf);
// }
// scope2(true);//The insideIf variable value is:  12

//the above program is equivalent to the below program
// function scope2(print){
//     var insideIf;
//     if(print){
//         //local variable of if block 
//         // var insideIf = '12';
//         insideIf = '12';
//     }
//     console.log("The insideIf variable value is: ",insideIf);
// }
// scope2(true);

//first variable 
var a = 1;
function four(){
    if(true){
        //second variable
        var a = 4;
    }
    console.log("The value of a is: ",a);
}
// console.log("The value of first a: ",a);
four();
console.log("The value of first a: ",a);

