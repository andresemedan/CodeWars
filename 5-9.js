// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

//prep-- parameters - return - examples - pseudo code
//P: Array is strings and numbers. Return sum of Array Values
//R: the sum of the array values as if all were numbers.
//E: ([9, 3, '7', '3']), 22);
//P: loop through each element. Make it a number. Add into a sum.


function sumMix(x){
    let sum = 0;
    for(i=0; i< x.length; i++){
        sum += +x[i]
    }
   return sum
}

const sumMix = x => x.reduce((acc, curr) => +acc + +curr)

