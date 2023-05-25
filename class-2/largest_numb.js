// Program to find the largest number from a given array of numbers;
//declared an array of numbers ie marks
const marks = [94,56,78,34,67,89,100];

// function to find largest item from a given array
/**
 * 
 * @param {[]} numbers 
 * @returns {number} largest number from the input array
 */
// function findLargestNumber(numbers) {
//     // considering first item of the given array as the largest item/number
//     let largest = numbers[0];
//     //iterating the items of the given array
//     for (let i = 1; i < numbers.length; i++) {
//         //checking if the current element is greater than our assumpted largest 
//         // number
//       if (numbers[i] > largest) {
//         //if the current item/number is greater then largest number then replace
//         largest = numbers[i];
//       }
//     }
//     return largest;//100
// }


const result = findLargestNumber(marks);
console.log("The largest marks scored is: ", result);
//What is the 