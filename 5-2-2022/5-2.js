// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// function fakeBin(x){
//     let num = x.split(',')
//     for(let i = 0; i<x.length; i++){
//         if(num[1]>5){
//             num.push(1)
//         }else if(num[1] < 5){
//             num.push(0)
//         }
//         num.join(',')
//     }
//     return num
// }

// console.log(fakeBin("3,4,4,6,7,3"))

// Their Answers----

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}


  function fakeBin(str){
    var newStr = "";
    for(var i=0;i<str.length;i++){
      if(Number(str[i])>=5){
        newStr += "1"
      }
      else{
        newStr += "0";
      }
    }
    return newStr;
  }