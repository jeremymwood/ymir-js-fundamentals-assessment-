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
function subtract(a,b){
    if(typeof a === `string` || `number`){
        return parseFloat(a) - parseFloat(b);
    }
    if(typeof b === `string` || `number`){
        return parseFloat(a) - parseFloat(b);
    }
    return false
}
console.log(subtract(3,4));

//problem03
function multiplyBy2(input){
    if(typeof parseFloat(input) === `number`){
        return input * 2
    }
    return false
}

//problem04
// Write a function named getLowestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the lowest number. If any of the 3 inputs is missing or non-numeric, then return false.

function getLowestNumber(a,b,c,){
    if(typeof parseFloat(a) && typeof parseFloat(b) && typeof parseFloat(c) === `number`){
        return true
    }
    return false
}

//problem05
// Define a function named isEvenlyDivisible that takes in two inputs: a numeric value and divisor. If the numeric value can be evenly divided by the divisor, then return true. Otherwise, return false.

function isEvenlyDivisible(a,b){
    if(b % a === 0){
        return true
    }
    return false
}

//problem06
// Define a function named inBetween that takes in three numeric inputs: a value, a low, and high. If the first numeric value is in-between the ranges of the low and high values, then return true. Otherwise, return false.

function inBetween(a,b,c){

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

}

//problem10
// Write a function named calculateChange that takes in two inputs, totalPaid and totalCost. If both inputs are numeric or numeric strings, calculateChange should return the change after subtracting the cost from the amount paid. The return should be in $x.xx format as a string. If either or both inputs are not numeric or numeric strings, calculateChange should return false.
function calculateChange(a,b){

}


