//object comparison 
//create one object
person1 = {
    firstName: "Praveen",
    lastName: "Kumar",
    getMarks: function(){
        
    }
}
//create other object
person2 = {
    firstName: "Praveen",
    lastName: "Kumar",
    getMarks: function(){
        
    }
}

//check if both the object are same ? using == or === operator.
// const isObjEqual = person1 == person2;
// console.log("The person1 & person2 objects are same: ",isObjEqual);
// //check value as well as type using === operator 
// const isObjStrictEqual = person1 === person2;
// console.log("The person1 & person2 objects are same: ",isObjStrictEqual);

//function to compare objects 
function isEquals(obj1,obj2){
    //arrays of property names
    var obj1Props = Object.getOwnPropertyNames(obj1);
    var obj2Props = Object.getOwnPropertyNames(obj2);
    //check if objects property lengths are different, they are different objects
    if(obj1Props.length != obj2Props.length){
        return false;
    };
    for(var i = 0; i<obj1Props.length; i++){
        var propName = obj1Props[i];
        //check if the values of property are different, not equal
        if(obj1Props[propName] !== obj2Props[propName]){
            return false;
        }
    };
    // If everything property values in both of the objects are matched, both objects are equal
    return true;
};

const isObjEqual = isEquals(person1,person2);
console.log("The person1 & person2 objects are same: ",isObjEqual);