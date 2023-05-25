//WAp to find pairs in the given array that adds up to given result as 10
const items = [2,5,6,7,9,1,4,3,8,0];
//function to find pairs that add up to 10

//example (2 + 8) = 10, 5, 6 + 4, 7 + 3, 
function findPairsThatAddUpToTen(numbers){
    const pairs = [];
    // iterate for the 1st item of a given pair 
    for (let i = 0; i < items.length ; i++){
        // iterate for the 2nd item of a given pair 
        for(let j = i + 1; j < items.length ; j++ ){
            //logic to check whether the 1st item + 2nd item return 10
            if(items[i] + items[j] === 10){
                pairs.push([items[i],items[j]]);
            }
        }
        // return pairs;
    }
    return pairs;


}

//execution 
const result = findPairsThatAddUpToTen(items);
console.log("The pairs which returns 10 after adding together are: ", result);

// The time complexity of the above program O(n^2);