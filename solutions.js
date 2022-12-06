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
    if(typeof input === `number`){
        return input * 2
    }
}
