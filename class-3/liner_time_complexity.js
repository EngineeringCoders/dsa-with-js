//linear time complexity O(n)
/**
 * time taken by an algorithm  is directly proportional to the number of inputs given to it.
 * f(n) = n
 */
//Example
//Find the largest number from a given array
const numArr = [4,56,98];

const findLargestNumber = (arr) => {
    let largestNum = arr[0];
    for(let i = 0;i<arr.length;i++){
        if(arr[i] > largestNum){
            largestNum = arr[i];
        }
    }
    return largestNum;
}
const start = Date.now();
const result = findLargestNumber(numArr);
console.log(result);
const end = Date.now();
const executionTime = end - start;
console.log("The time taken to execute the program is: ",executionTime);