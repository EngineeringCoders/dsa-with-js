//Using Number.EPSILON property for float-point approximation

// function numberEquals(a,b){
//     return Math.abs(a - b) < Number.EPSILON;
// }

function numberEquals(a,b){
    return Math.abs(a + b) < Number.EPSILON;
}

const result = numberEquals(0.1+0.2, 0.3);
console.log("The absolute number is ",result);