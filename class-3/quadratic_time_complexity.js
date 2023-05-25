//quadratic time complexity
function exampleQuadratic(n){
    for(var i = 0;i < n;i++){
        console.log("The first loop",i);
        for(var j =0;j<n;j++){
            console.log("The inner loop",j);
        }
    }
}

//execution
console.time();
exampleQuadratic(1);
console.timeEnd();
console.time();
exampleQuadratic(2);
console.timeEnd();
console.time();
exampleQuadratic(3);
console.timeEnd();
console.time();
exampleQuadratic(4);
console.timeEnd();
console.time();
exampleQuadratic(5);
console.timeEnd();