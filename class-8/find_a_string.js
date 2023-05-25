//finding a string from a larger string

function existsInString(stringValue,searchString){
    return stringValue.indexOf(searchString) !== -1;
}

console.log(existsInString("Ipl Finals",'a'));
console.log(existsInString("Ipl Finals",'r'));