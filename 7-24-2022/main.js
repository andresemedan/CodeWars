// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	// your code
    return s.split('').map((el,ind)=>(el.toUpperCase() + el.toLowerCase().repeat(ind))).join('-')
}

console.log(accum('abcdef'))

// I recieve a string.
// I want to split each letter.
// return a new string with each letter separated by a - and +1 of their index in amount.
// The first letter in each group should be capitalized.