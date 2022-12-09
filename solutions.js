"use strict";
/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * lowerCase()
 * subtract()
 * multiplyBy2()
 * getLowestNumber()
 * isEvenlyDivisible()
 * inBetween()
 * replace()
 * addStringLengths()
 * convertHourToSec()
 * calculateChange()
 */

//problem01
function lowerCase(input){
    if(typeof input === `string`){
        return input.toLowerCase();
    }
    return false
}


//problem02
// Write a function named subtract that takes in two inputs. If both inputs provided are numeric or numeric strings, subtract will return the difference when the second input is subtracted from the first input. If one or both inputs is not numeric or numeric strings, subtract should return false.

function subtract(a,b){
    if (isNaN(a) || isNaN(b) === true){
        return false
    }
    // if(a || b === true || false){
    //     return false
    // }
    if(a && b === true || false){
        return false
    }
    // if (typeof parseInt(a) || typeof parseInt(b) !== `number`){
    //     return false
    // }
    return parseInt(a) - parseInt(b)
}



// function subtract(a,b){
//     a = parseInt(a);
//
//     b = parseInt(b);
//     if (typeof a && typeof b === `number`){
//         return a - b;
//     }
//     if ( isNaN(a) || isNaN(b) === true){
//         return false;
//     }
//     return false
// }
console.log(subtract(`25`, `lkdjsfsdf`));
console.log(typeof true);
console.log(typeof 5);
console.log(typeof `6`);
console.log(typeof NaN);

//problem03
function multiplyBy2(input){
    // if (isNaN(input) === true){
    //     return false
    // }
    // if(typeof parseFloat(input) === `number`){
    //     return input * 2
    // }
    if (input){
        return input * 2
    }
    return false
}

//problem04
// Write a function named getLowestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the lowest number. If any of the 3 inputs is missing or non-numeric, then return false.

function getLowestNumber(a,b,c,){
    if(typeof a && typeof b && typeof c === `number`){
        // switch(getLowestNumber) {
        //     case a < b && a < c:
        //     case a < b && a < c:
        //         return a;
        //         break;
        //     case b < a && b < c:
        //         return b;
        //         break;
        //     case c < b && c < a:
        //         return c;
        //         break;
        //     default:
        //         return false;
        //         break;
        // }
        if(a < b && a < c){
            return a
        }
        if(b < a && b < c){
            return b
        }
        if(c < b && c < a){
            return c
        }
    }
    return false
}

console.log(getLowestNumber(3,1,2));

//problem05
// Define a function named isEvenlyDivisible that takes in two inputs: a numeric value and divisor. If the numeric value can be evenly divided by the divisor, then return true. Otherwise, return false.

function isEvenlyDivisible(a,b){
    return b % a === 0;

}

//problem06
// Define a function named inBetween that takes in three numeric inputs: a value, a low, and high. If the first numeric value is in-between the ranges of the low and high values, then return true. Otherwise, return false.

function inBetween(a,b,c){
    if(a > c && a < b){
        return true
    }
    if(a < c && a > b){
        return true
    }
    return false
}

//problem07
// Write a function named replace that takes in three inputs. The first input is a string, the second input is the string that is to be replaced, the third is the string that you are replacing the second input with. Only replace the first occurrence of the matched string. Return the string with the newly replaced values. If the first input is not a string, return false.
function replace(a,b,c){
    if(typeof a !== `string`){
        return false
    }
    return b = c
}

//problem08
// Write a function named addStringLengths that takes in two inputs. If both inputs provided are strings, addStringLengths returns the sum after adding the length (number of characters) of both strings. If either or both inputs are not strings, return false.
function addStringLengths(a,b){
    if(typeof a && typeof b === `string`){
        return a.length + b.length
    }
    return false
}

//problem09
// Define a function named convertHourToSec that takes in one input Hours. Return the conversation of the number of hours into total seconds. If the input is not numeric or a numeric string, convertHourToSec, should return false.
function convertHourToSec(hours){
    if(typeof hours === `boolean`){
        return false
    }
    if(hours < 0){
        return false
    }
    if(typeof hours === `string` || `number`){
        return parseFloat(hours) * 60 * 60
    }
    return false
}
// console.log(convertHourToSec(3.66));

//problem10
// Write a function named calculateChange that takes in two inputs, totalPaid and totalCost. If both inputs are numeric or numeric strings, calculateChange should return the change after subtracting the cost from the amount paid. The return should be in $x.xx format as a string. If either or both inputs are not numeric or numeric strings, calculateChange should return false.
function calculateChange(totalPaid,totalCost){
    if(typeof totalPaid && typeof totalCost === `number`){
        return `$` + totalPaid.toFixed(2) - totalCost.toFixed(2);
    }
    if(typeof totalPaid || typeof totalCost === `boolean`){
        return false;
    }
    return false
}
console.log(calculateChange(10,3));

//current grade
function grade(specs,failures){
    return parseInt(((specs - failures) / specs) * 100)
}
console.log(grade(103,26));

