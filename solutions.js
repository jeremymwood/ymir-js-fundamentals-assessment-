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
    if(typeof a && typeof b === `boolean`){
        return false
    }
    return parseInt(a) - parseInt(b)
}

//problem03
function multiplyBy2(input){
    if (input === null){
        return false
    }  else
    if (typeof input === `boolean`){
        return false
    }  else
    if(typeof parseFloat(input) === `number`){
        return input * 2
    }  else
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
        if (a === b && b === c){
            return a
        }
    }
    return false
}
// console.log(getLowestNumber(3,1,2));

//problem05
// Define a function named isEvenlyDivisible that takes in two inputs: a numeric value and divisor. If the numeric value can be evenly divided by the divisor, then return true. Otherwise, return false.

function isEvenlyDivisible(a,b){
    if(a === null || b === null){
        return false
    }
    if(a % b === 0){
        return true
    }
    if( typeof a || typeof b === null){
        return false
    } else
    return false;
}
// console.log(isEvenlyDivisible(100,2))

//problem06
// Define a function named inBetween that takes in three numeric inputs: a value, a low, and high. If the first numeric value is in-between the ranges of the low and high values, then return true. Otherwise, return false.

function inBetween(a,b,c){
    // if (isNaN(a) || isNaN(b) || isNaN(c)){
    //     return false
    // }
    if (typeof a !== `number`){
        return false
    }
    if(a > c && a < b){
        return true
    }
    if(a < c && a > b){
        return true
    }
    // if (typeof a && typeof b && typeof c !== `number`){
    //     return false
    // }
    return false
}
//passing tests vary
// console.log(inBetween(1,2,3));

//problem07
// Write a function named replace that takes in three inputs. The first input is a string, the second input is the string that is to be replaced, the third is the string that you are replacing the second input with. Only replace the first occurrence of the matched string. Return the string with the newly replaced values. If the first input is not a string, return false.
function replace(a,b,c){
    if(typeof a !== `string`){
        return false
    }
    return a.replace(b,c);
}
// console.log(replace(1,2,3));

//problem08
// Write a function named addStringLengths that takes in two inputs. If both inputs provided are strings, addStringLengths returns the sum after adding the length (number of characters) of both strings. If either or both inputs are not strings, return false.
function addStringLengths(a,b){
    // console.log(`${a} type: ${typeof a}`);
    // console.log(`${b} type: ${typeof b}`);
    if(typeof a === `string` && typeof b === `string`){
        return a.length + b.length
    }
    return false
}
// console.log(addStringLengths([],`string`));


//problem09
// Define a function named convertHourToSec that takes in one input Hours. Return the conversation of the number of hours into total seconds. If the input is not numeric or a numeric string, convertHourToSec, should return false.
function convertHourToSec(hours){
    if(hours === null){
        return false
    }
    if (isNaN(hours) === true){
        return false
    }
    if(hours < 0){
        return false
    }
    if(hours === true){
        return false
    }
    return parseFloat(hours) * 60 * 60
}
console.log(convertHourToSec(10.22));

//problem10
// Write a function named calculateChange that takes in two inputs, totalPaid and totalCost. If both inputs are numeric or numeric strings, calculateChange should return the change after subtracting the cost from the amount paid. The return should be in $x.xx format as a string. If either or both inputs are not numeric or numeric strings, calculateChange should return false.

//numeric or numeric strings
//two inputs
//subtracting the cost from the amount paid
//return change
//$x.xx format as string
//otherwise, return false

function calculateChange(totalPaid,totalCost){
    if (typeof totalPaid !== `number` && typeof totalPaid !== `string`){
        return false
    }
    if (typeof totalCost !== `number` && typeof totalCost !== `string`){
        return false
    }
    if (isNaN(totalPaid) || isNaN(totalCost) === true){
        return false
    }
    return `$${(totalPaid - totalCost).toFixed(2)}`
}
console.log(calculateChange(`30`, 15));
// console.log(typeof 10)

//current grade
function grade(specs,failures){
    return parseInt(((specs - failures) / specs) * 100)
}

console.log(`Current grade: ${grade(103, 0)
}`);

// 4 failures:
// isEvenlyDivisible
// isBetween
// addStringLengths
// calculateChange

//5th failure
// convertHourToSec

// 6th failure
//2nd convertHourToSec, boolean