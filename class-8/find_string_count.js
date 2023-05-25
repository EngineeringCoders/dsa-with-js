//find the count of a string in a given big string

let testString = "I am a professional fullstack developer with 3 years of \
extensive experience in designing, developing & deploying scalable products."

//let's assume count value to 0
let count = 0;

let stringToSearch = 'a';
//find the positing of stringToSearch string
let stringToSearchPosition = testString.indexOf(stringToSearch);

while(stringToSearchPosition !== -1){
    count++;
    stringToSearchPosition = testString.indexOf(stringToSearch,stringToSearchPosition + 1);
}

console.log(`${stringToSearch} occurs ${count} times in the string ${testString}`);