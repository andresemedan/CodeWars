// function digitize(n) {
//   return String(n).split('').map(Number)
//   // .split('').map(Number).reverse()
// }
// console.log(digitize(348597))
/*-----------------------------------------------------------------------------------------------------------------------------------*/
// var humanYearsCatYearsDogYears = function(humanYears) {
//   let catYears = 0;
//   let dogYears = 0;
//   if (humanYears === 1){
//     catYears = 15;
//     dogYears = 15;
//   }else if(humanYears === 2 ){
//     catYears = 24;
//     dogYears = 24;
//   }else if( humanYears > 2){
//     catYears = parseInt((humanYears - 2) * 4 + 24);
//     dogYears = parseInt((humanYears - 2) * 5 + 24);
//   }
   
//   return [`Jennifer is ${humanYears} in Human Years, ${catYears} in Cat Years, and ${dogYears} in Dog Years`];
// }


// alert(humanYearsCatYearsDogYears(31))

/*================================================================================================================================*/

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// function betterThanAverage(classPoints, yourPoints) {
//   let otherStudents = classPoints.reduce((sum,current) => sum + current, 0)/ classPoints.length;
//   if( otherStudents > yourPoints){
//     return False
//   }else{
//     return True
//   }
// }
// console.log(betterThanAverage(70, 90))

// ==========================================================================================================================================

// ================================================ JS Way Arrays  =====================================================================