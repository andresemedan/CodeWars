// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

function switchItUp(number){
    //Write your own Code!
    let ans = ''
    switch (number){
        case 1 :
            ans = 'One';
            break;
        case 2 :
            ans = 'Two';
            break;
        case 3 :
            ans = 'Three';
            break;
        case 4 :
            ans = 'Four';
            break;
        case 5 :
            ans = 'Five';
            break;
        case 6 :
            ans = 'Six';
            break;
        case 7 :
            ans = 'Seven';
            break;
        case 8 :
            ans = 'Eight'
            break;
        case 9 :
            ans = 'Nine'
            break;
    }
        return ans
    }