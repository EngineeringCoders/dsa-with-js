//Write a program to find the prime factorization of a given number n ?
/**
 * input : n
 * output: prime factors of n 
 * n = 6 
 * output = 2 , 3
 */

function primeFactors(n){
    //print the number of 2s that divide n
    while(n%2 == 0){
        console.log(2);
        n = n/2; // 
    }
    //i = i + 2
    for(var i = 3; i * i <= n; i = i + 2){
        //while i divides n, print i and divide n
        while(n%i == 0){
            console.log(i);
            n = n/i;
        }
    }
    // to handle the case when n is a prime number greater than 2
    if(n>2){
        console.log(n);
    }
}

//execution code 
primeFactors(15);