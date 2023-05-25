// if(node){
//     //.........
// }
// node is some variable. 
// If that variable is empty, null, or undefined, it will evaluated as false.
/**
 * Some of the commonly used expressions that evaluate to false are:
 * 
 * 1. false
 * 2. 0
 * 3. empty strings('' or "")
 * 4. NaN
 * 5. undefined
 * 6. null
 * */
/**
 * Some common use expressions that evaluates to true are:
 * 1. true
 * 2. Any number other than 0
 * 3. Non-empty strings
 * 4. Non-empty object
 */
//example

var printIfTrue = '';

if(printIfTrue){
    console.log("The if block is evaluated as true");
}else{
    console.log("The if block is evaluated as false");
}