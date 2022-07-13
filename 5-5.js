// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// function grow(x){
//     return x.reduce((accum,curr)=> accum * curr, 1)
// }

const grow = x => x.reduce((a,c)=> a * c, 1)

console.log(grow([1,2,3,4]))


// ======================================================================================

// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
   let con = arr1.concat(arr2)
   return con.reduce((a,c)=> a+c,0)
  }
  