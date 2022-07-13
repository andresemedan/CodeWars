function oddOrEven(array) {
    //enter code here
   let arr = array.reduce(( prev, curr)=> prev + curr, 0)
   if( arr % 2 === 0 || arr === 0){
     return "even"
   }else if( arr % 1 === 0){
     return "odd"
   }
   return arr
 }