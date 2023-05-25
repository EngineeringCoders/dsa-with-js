//primitive data types in js
var is40 = false;//false
console.log("The data type is: ",typeof is40);// boolean

var age = 25;
console.log("The data type is: ",typeof age);// number

var lastName = 'Kumar';
console.log("The data type is: ",typeof lastName); // string

var fruits = ["Apple","Banana","Orange"];
console.log("The data type is: ",typeof fruits);// object

var person = {
    firstName: "Praveen",
    lastName: "Kumar"
}
console.log("The data type is: ",typeof person); // object

var nullVariable = null;
console.log("The data type is: ",typeof nullVariable); //object

var function1 = function(){
    console.log('test function');
}
 
console.log("The data type is: ",typeof function1); // function

var undeclared;
console.log("The data type is: ",typeof undeclared);// undefined