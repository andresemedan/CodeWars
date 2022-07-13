// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.


function sumArray(array) {  
    if ( !array ) {
      return 0;
    }else{
  //     let sorted = array.sort((a,b) => a - b)
  //     let newArr = sorted.slice(1,-1)
  //     let sum = newArr.reduce((prev, curr)=> prev + curr, 0)
  //     return sum    
      return array.sort((a,b) => a - b).slice(1,-1).reduce((prev, curr)=> prev + curr, 0)
    } 
  }




//   You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.


function updateLight(current) {
  
    if( current === 'green'){
        return 'yellow'
    }else if (current === 'yellow') {
        return 'red'
    }else {
        return 'green'
    }
    //your code here!
  
  }



//   Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

function doubleChar(str) {
    return str.split('').map(num => num + num).join('')
  }
  